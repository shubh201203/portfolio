export const mentalHealthProject = {
  id: "mental-health-detection",
  slug: "mental-health-detection",
  aliases: ["mental-health-detection"],
  title: "AI-Powered Mental Health Detection Using NLP & Machine Learning",
  shortTitle: "Mental Health NLP",
  subtitle: "Educational NLP Classification & Multi-Model Sentiment Pattern Analysis",
  category: "NLP & Machine Learning Project",
  role: "NLP & ML Developer",
  priority: 8,
  isFlagship: false,
  status: "Deployed & Verified",
  tagline: "Educational NLP classification platform evaluating Multinomial Naive Bayes, Logistic Regression, and Linear Support Vector Machines on TF-IDF feature representations.",
  description: "Educational NLP classification platform evaluating Multinomial Naive Bayes, Logistic Regression, and Linear Support Vector Machines on TF-IDF feature representations.",
  
  links: {
    live: "https://mental-health-ai-app-ldakmvakivnws7llfcaajf.streamlit.app/",
    github: "https://github.com/shubh201203/mental-health-ai-app"
  },

  problemStatement: {
    inquiries: "How effectively can classical NLP feature representations (n-gram TF-IDF) and linear machine learning classifiers identify subtle linguistic patterns of depression and distress across unstructured text entries?",
    commercialImpact: "Digital journaling platforms and community forums often lack automated early-warning cues for mental health risk. This educational benchmark compares classical ML classifiers to evaluate sensitivity, calibration, and inference efficiency."
  },

  verifiedMetrics: {
    bestModel: {
      value: "94.03%",
      raw: "94.03% Accuracy",
      label: "Linear SVC Accuracy",
      desc: "Top performing classifier on balanced test evaluation split"
    },
    featureSpace: {
      value: "15,000",
      raw: "15,000 features",
      label: "TF-IDF Dimensions",
      desc: "Unigram and bigram representation with WordNet lemmatization"
    },
    testSuite: {
      value: "8 Tests",
      raw: "8 passing unittests",
      label: "Automated Tests",
      desc: "Validating probability calibration, text cleaning, and fallback cues"
    },
    deployment: {
      value: "Streamlit",
      raw: "Streamlit Cloud",
      label: "Production Target",
      desc: "Interactive web dashboard with emergency crisis hotlines"
    }
  },

  deliverables: [
    {
      num: "01",
      title: "Tri-Model Benchmark Framework",
      tech: "Scikit-Learn · MNB · Logistic Regression · Linear SVC",
      desc: "Comparative evaluation of Multinomial Naive Bayes (89.59%), Logistic Regression (93.53%), and Linear SVC (94.03%) on standardized corpora."
    },
    {
      num: "02",
      title: "Linguistic Feature Pipeline",
      tech: "NLTK · Tokenization · WordNet · TF-IDF",
      desc: "End-to-end NLP preprocessing pipeline including lowercasing, stopword removal, lemmatization, and 15,000-dimensional n-gram vectorization."
    },
    {
      num: "03",
      title: "Interactive Streamlit Interface",
      tech: "Streamlit · Matplotlib · Python",
      desc: "Real-time interactive dashboard featuring dual-mode analysis (single reflection vs. timeline simulation) with XSS-sanitized keyword highlighting."
    }
  ],

  architectureSteps: [
    { step: "01", title: "Text Cleansing", tool: "NLTK Preprocessing", desc: "Performs punctuation removal, tokenization, and WordNet POS-aware lemmatization." },
    { step: "02", title: "Vectorization", tool: "Scikit-Learn TF-IDF", desc: "Builds 15,000-dimensional unigram and bigram feature representations." },
    { step: "03", title: "Classifier Inference", tool: "Linear SVC & LogReg", desc: "Executes calibrated classification with prediction probability confidence intervals." },
    { step: "04", title: "Crisis Safety Guardrail", tool: "Streamlit App", desc: "Automatically displays prominent emergency hotline resources whenever elevated risk is detected." }
  ],

  methodology: {
    categoryLabel: "NLP Text Preprocessing • Vector Space Modeling",
    badgeLabel: "TF-IDF Pipeline",
    codeLanguage: "python",
    codeSnippet: `def preprocess_text(raw_text: str) -> str:
    """
    Cleans raw text reflection:
    - Normalizes case and strips punctuation/digits
    - Removes stopwords while preserving affective negations
    - Applies WordNet lemmatization
    """
    tokens = word_tokenize(raw_text.lower())
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words('english')) - {'no', 'not', 'never'}
    
    clean_tokens = [
        lemmatizer.lemmatize(token)
        for token in tokens
        if token.isalpha() and token not in stop_words
    ]
    return " ".join(clean_tokens)`,
    explanation: "Preserving affective negation terms (such as 'not' and 'never') is critical for preventing misclassification of sentiment polarity in psychological text."
  },

  // No screenshots - Gallery is omitted!
  dashboardScreenshots: [],

  findings: [
    {
      num: "01",
      title: "Linear SVC Superiority",
      metric: "94.03% Accuracy",
      desc: "Linear Support Vector Classifier outperformed Multinomial Naive Bayes by 4.44% due to superior handling of sparse, high-dimensional n-gram margins."
    },
    {
      num: "02",
      title: "Affective Negation Sensitivity",
      metric: "Crucial Preprocessing Node",
      desc: "Retaining negation keywords prevented severe false negative misclassifications on phrases like 'not feeling well'."
    },
    {
      num: "03",
      title: "Sub-50ms Inference Latency",
      metric: "Real-Time Response",
      desc: "Linear model weights enabled instant classification without requiring expensive neural model hosting."
    }
  ],

  resultsAndDecisions: {
    decisionsEnabled: [
      "Deployed on Streamlit Cloud with public web interface.",
      "Integrated emergency crisis support resources prominently into the UI.",
      "Validated end-to-end inference and safety fallback logic with 8 automated unittests."
    ],
    technicalLimitations: [
      "Project is an academic exploration tool and explicitly not a certified clinical diagnostic instrument.",
      "Cannot detect sarcasm, irony, or nuanced metaphor without deep transformer contextualization."
    ]
  },

  techStack: [
    "Python",
    "NLP",
    "NLTK",
    "Scikit-learn",
    "TF-IDF",
    "Streamlit",
    "Pandas",
    "Matplotlib"
  ]
};
