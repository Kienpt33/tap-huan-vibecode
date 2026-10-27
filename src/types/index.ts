export type CompetitionTrack = 'nckh' | 'tech';

export interface LessonCard {
  id: string;
  stepNumber: string; // "01", "02", "03", "04", "05", "06"
  title: string;
  duration: string; // "8 PHÚT", "10 PHÚT", etc.
  description: string;
  theme: 'blue' | 'green' | 'orange' | 'purple';
  questionId: number; // 1, 2, 3, 4
  track: 'nckh' | 'tech' | 'common';
  keyPoints: string[];
  samplePrompt: string;
  contentHtml: string;
  toolType?: 'token-calculator' | 'nckh-prompt-builder' | 'readiness-checklist' | 'deploy-generator';
}

export interface CompetitionTrackInfo {
  id: CompetitionTrack;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  targetDescription: string;
  exampleTopics: string[];
  vibeCodingBenefit: string;
}
