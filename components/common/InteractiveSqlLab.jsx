import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  ShieldCheck
} from 'lucide-react';

export default function InteractiveSqlLab() {
  const [activeTab, setActiveTab] = useState('cte');
  const [copied, setCopied] = useState(false);

  const queries = {
    cte: {
      id: 'cte',
      title: 'Order-Level CTE Aggregation (Grain Safety)',
      purpose: 'Prevents Cartesian multiplication when joining fact_sales to fact_payments',
      tableContext: 'fact_sales (104,852 rows) ⟷ fact_payments (62,952 rows)',
      verifiedMetric: 'Net Reconciled Revenue: ₹971,486,941.80 (Zero join duplication)',
      code: `-- Safe Order-Level Aggregation Pattern (Prevents Cartesian Duplication)
WITH order_level_sales AS (
    SELECT 
        order_id, 
        SUM(net_revenue) AS total_order_revenue,
        COUNT(sales_key) AS line_item_count
    FROM fact_sales
    WHERE is_completed = TRUE
    GROUP BY order_id
),
order_level_payments AS (
    SELECT 
        fp.order_id, 
        SUM(fp.payment_amount) AS total_settled_payment
    FROM fact_payments fp
    JOIN dim_payment dp ON fp.payment_key = dp.payment_key
    WHERE dp.payment_status = 'Completed'
    GROUP BY fp.order_id
)
SELECT 
    s.order_id, 
    s.total_order_revenue, 
    s.line_item_count,
    p.total_settled_payment,
    (s.total_order_revenue - p.total_settled_payment) AS variance
FROM order_level_sales s
JOIN order_level_payments p ON s.order_id = p.order_id;`,
      architectureNote: 'A naive join of fact_sales directly to fact_payments on order_id creates a Cartesian product between multi-line orders and multiple payment retry attempts. Pre-aggregating at order grain within CTEs preserves exact financial accuracy.'
    },
    cohort: {
      id: 'cohort',
      title: 'Monthly Customer Cohort Retention Matrix',
      purpose: 'Engineers public.vw_cohort_retention measuring 18-month customer loyalty decay',
      tableContext: 'dim_customer (5,000) ⟷ fact_sales (104,852)',
      verifiedMetric: '383 cohort records validated (Retention values: 1.23% to 100%)',
      code: `-- Customer Cohort Retention View Definition (vw_cohort_retention)
WITH customer_first_order AS (
    SELECT 
        customer_key,
        DATE_TRUNC('month', MIN(d.full_date)) AS cohort_month
    FROM fact_sales s
    JOIN dim_date d ON s.date_key = d.date_key
    WHERE s.is_completed = TRUE
    GROUP BY customer_key
),
order_intervals AS (
    SELECT 
        s.customer_key,
        cfo.cohort_month,
        (EXTRACT(YEAR FROM d.full_date) - EXTRACT(YEAR FROM cfo.cohort_month)) * 12 +
        (EXTRACT(MONTH FROM d.full_date) - EXTRACT(MONTH FROM cfo.cohort_month)) AS months_since_first,
        s.net_revenue
    FROM fact_sales s
    JOIN dim_date d ON s.date_key = d.date_key
    JOIN customer_first_order cfo ON s.customer_key = cfo.customer_key
    WHERE s.is_completed = TRUE
)
SELECT 
    cohort_month,
    months_since_first,
    COUNT(DISTINCT customer_key) AS retained_customers,
    SUM(net_revenue) AS cohort_revenue
FROM order_intervals
GROUP BY cohort_month, months_since_first
ORDER BY cohort_month, months_since_first;`,
      architectureNote: 'Tracks acquisition cohorts through successive purchase months to detect customer lifetime value decay, seasonal repeat surges, and long-term buyer stabilization.'
    },
    pareto: {
      id: 'pareto',
      title: 'Pareto 80/20 Cumulative Profit Distribution',
      purpose: 'Identifies product SKUs and categories driving 80% of total company profit',
      tableContext: 'dim_product (180 SKUs) ⟷ fact_sales (104,852 rows)',
      verifiedMetric: 'Realized Profit: ₹262.16M (Electronics = 58.3% vol, 18.6% margin)',
      code: `-- Cumulative Running Profit & Pareto Distribution
WITH product_profitability AS (
    SELECT 
        p.product_id,
        p.product_name,
        p.category,
        SUM(s.net_revenue) AS total_revenue,
        SUM(s.profit) AS total_profit
    FROM fact_sales s
    JOIN dim_product p ON s.product_key = p.product_key
    WHERE s.is_completed = TRUE
    GROUP BY p.product_id, p.product_name, p.category
),
ranked_profit AS (
    SELECT 
        *,
        SUM(total_profit) OVER(ORDER BY total_profit DESC) AS running_profit,
        SUM(total_profit) OVER() AS grand_total_profit
    FROM product_profitability
)
SELECT 
    product_id,
    product_name,
    category,
    total_profit,
    ROUND((running_profit / grand_total_profit) * 100, 2) AS cumulative_profit_pct
FROM ranked_profit
WHERE (running_profit / grand_total_profit) <= 0.80
ORDER BY total_profit DESC;`,
      architectureNote: 'Window function SUM() OVER() calculates a running total over descending profits, revealing the core subset of catalog items that generate four-fifths of operating profitability.'
    }
  };

  const current = queries[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#111827] text-white border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 relative z-10">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Analytical SQL Laboratory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-1">
            Engineered CTEs, Window Calculations & Grain Safety
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Inspecting the actual analytical SQL architecture powering NovaCart's warehouse and Power BI measures.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy SQL'}</span>
          </button>
        </div>
      </div>

      {/* Query Selector Tabs */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {[
          { id: 'cte', label: '1. Fact Grain Safety (CTE)' },
          { id: 'cohort', label: '2. Cohort Retention Matrix' },
          { id: 'pareto', label: '3. Pareto 80/20 Profit Window' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-glow-blue border border-blue-400/50'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Query Context Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono relative z-10">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
          <span className="text-slate-400">Context:</span>
          <span className="text-cyan-300 font-semibold">{current.tableContext}</span>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
          <span className="text-slate-400">Reconciled Benchmark:</span>
          <span className="text-emerald-400 font-semibold">{current.verifiedMetric}</span>
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="rounded-xl bg-[#0B0F19] border border-white/10 overflow-hidden relative z-10">
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-300">{current.title}</span>
          </div>
          <span className="text-slate-500">PostgreSQL 18 Dialect</span>
        </div>

        <div className="p-4 sm:p-5 overflow-x-auto text-[11.5px] font-mono leading-relaxed text-slate-300">
          <pre className="text-emerald-300/90 whitespace-pre">{current.code}</pre>
        </div>
      </div>

      {/* Architecture Rationale Callout */}
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs text-blue-200 flex items-start gap-3 relative z-10">
        <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-white font-medium">Architectural Rationale: </strong>
          {current.architectureNote}
        </p>
      </div>

    </div>
  );
}
