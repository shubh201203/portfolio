import React from 'react';
import ProjectCaseStudyLayout from '@/components/case-studies/ProjectCaseStudyLayout';
import { portfolioData } from '@/data/portfolioData';

export async function generateStaticParams() {
  return [
    { slug: 'novacart' },
    { slug: 'product-analytics' },
    { slug: 'bitepulse' },
    { slug: 'disaster-reporting' },
    { slug: 'wardrobewhiz' },
    { slug: 'smart-resume' },
    { slug: 'emotion-music' },
    { slug: 'mental-health-detection' },
    { slug: 'shortx' },
    { slug: 'todo' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projectSlug = slug === 'bitepulse' ? 'product-analytics' : slug;
  const project = portfolioData.projects.find((p) => p.id === projectSlug);

  return {
    title: `${project?.shortTitle || project?.title || 'Case Study'} — Shubh Sharma`,
    description: project?.tagline || 'Data Analyst Portfolio Case Study',
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  return <ProjectCaseStudyLayout slug={slug} />;
}