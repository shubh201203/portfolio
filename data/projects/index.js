import { novacartProject } from './novacart';
import { bitepulseProject } from './bitepulse';
import { dirsProject } from './dirs';
import { wardrobewhizProject } from './wardrobewhiz';
import { emotionMusicProject } from './emotionMusic';
import { todoProject } from './todo';
import { smartResumeProject } from './smartResume';
import { mentalHealthProject } from './mentalHealth';
import { shortxProject } from './shortx';

export const allProjects = [
  novacartProject,
  bitepulseProject,
  dirsProject,
  wardrobewhizProject,
  emotionMusicProject,
  todoProject,
  smartResumeProject,
  mentalHealthProject,
  shortxProject
];

const projectsBySlug = {
  'novacart': novacartProject,
  'bitepulse': bitepulseProject,
  'product-analytics': bitepulseProject,
  'dirs': dirsProject,
  'disaster-reporting': dirsProject,
  'wardrobewhiz': wardrobewhizProject,
  'emotion-music': emotionMusicProject,
  'todo': todoProject,
  'smart-resume': smartResumeProject,
  'mental-health-detection': mentalHealthProject,
  'shortx': shortxProject
};

export function getProjectBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return projectsBySlug[normalized] || null;
}

export {
  novacartProject,
  bitepulseProject,
  dirsProject,
  wardrobewhizProject,
  emotionMusicProject,
  todoProject,
  smartResumeProject,
  mentalHealthProject,
  shortxProject
};
