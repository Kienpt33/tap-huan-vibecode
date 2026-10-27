export type CompetitionTrack = 'nckh' | 'tech';

export interface LessonCard {
  id: string;
  stepNumber: string;
  title: string;
  duration: string; // "8 PHÚT", "10 PHÚT", etc.
  description: string;
  theme: 'blue' | 'green' | 'orange' | 'purple';
  questionId: number;
  track: 'nckh' | 'tech' | 'common';
  keyPoints: string[];
  samplePrompt: string;
  contentHtml: string;
  toolType?: 'token-calculator' | 'nckh-prompt-builder' | 'readiness-checklist' | 'deploy-generator' | 'ai-studio-login' | 'guided-practice' | 'verification-checklist';
  references?: Array<{
    label: string;
    url: string;
  }>;
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
