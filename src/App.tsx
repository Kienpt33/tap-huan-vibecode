import React, { useState, useEffect } from 'react';
import { LESSONS_NCKH, LESSONS_TECH } from './data/courseData';
import { CompetitionTrack } from './types';
import Navbar from './components/Navbar';
import LeftSidebar, { NavTab } from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import RoadmapGrid from './components/RoadmapGrid';
import LessonDetailView from './components/LessonDetailView';
import PromptStudioTab from './components/PromptStudioTab';
import { OverviewTab, TemplatesTab, ReadinessTab, LabsTab, HelpTab } from './components/Tabs';

const STORAGE_KEY = 'vibe_coding_roadmap_progress_v5';
const TRACK_STORAGE_KEY = 'vibe_coding_selected_track_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('course');
  const [selectedTrack, setSelectedTrack] = useState<CompetitionTrack>(() => {
    try {
      const saved = localStorage.getItem(TRACK_STORAGE_KEY);
      if (saved === 'nckh' || saved === 'tech') return saved;
    } catch (e) {
      console.error(e);
    }
    return 'nckh';
  });

  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return ['nckh-1'];
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Save progress & track selection
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessonIds));
    } catch (e) {
      console.error(e);
    }
  }, [completedLessonIds]);

  useEffect(() => {
    try {
      localStorage.setItem(TRACK_STORAGE_KEY, selectedTrack);
    } catch (e) {
      console.error(e);
    }
  }, [selectedTrack]);

  const handleSelectTrack = (track: CompetitionTrack) => {
    setSelectedTrack(track);
    setSelectedLessonId(null);
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveTab('course');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedLessonId(null);
  };

  const handleToggleCompleted = (lessonId: string) => {
    setCompletedLessonIds((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  // Lessons based on chosen track
  const currentLessons = selectedTrack === 'nckh' ? LESSONS_NCKH : LESSONS_TECH;

  // Find active lesson if selected
  const activeLessonIdx = currentLessons.findIndex((l) => l.id === selectedLessonId);
  const activeLesson = activeLessonIdx >= 0 ? currentLessons[activeLessonIdx] : null;

  const hasNext = activeLessonIdx >= 0 && activeLessonIdx < currentLessons.length - 1;
  const hasPrev = activeLessonIdx > 0;

  const handleNavigateNext = () => {
    if (hasNext) {
      setSelectedLessonId(currentLessons[activeLessonIdx + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigatePrev = () => {
    if (hasPrev) {
      setSelectedLessonId(currentLessons[activeLessonIdx - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render main content area based on active tab & lesson selection
  const renderMainContent = () => {
    if (activeTab === 'course') {
      if (activeLesson) {
        return (
          <LessonDetailView
            lesson={activeLesson}
            selectedTrack={selectedTrack}
            isCompleted={completedLessonIds.includes(activeLesson.id)}
            onToggleCompleted={() => handleToggleCompleted(activeLesson.id)}
            onBackToGrid={handleBackToGrid}
            onNavigateNext={handleNavigateNext}
            onNavigatePrev={handleNavigatePrev}
            hasNext={hasNext}
            hasPrev={hasPrev}
          />
        );
      }
      return (
        <RoadmapGrid
          selectedTrack={selectedTrack}
          onSelectTrack={handleSelectTrack}
          lessons={currentLessons}
          onSelectLesson={handleSelectLesson}
        />
      );
    }

    if (activeTab === 'prompt') {
      return <PromptStudioTab />;
    }

    if (activeTab === 'templates') {
      return (
        <TemplatesTab
          onGoToCourse={() => {
            setActiveTab('course');
            setSelectedLessonId(null);
          }}
          onSelectLesson={handleSelectLesson}
          selectedTrack={selectedTrack}
          onSelectTrack={handleSelectTrack}
        />
      );
    }

    if (activeTab === 'readiness') {
      return <ReadinessTab />;
    }

    if (activeTab === 'labs') {
      return <LabsTab />;
    }

    if (activeTab === 'help') {
      return <HelpTab />;
    }

    // Default: Overview
    return (
      <OverviewTab
        onGoToCourse={() => {
          setActiveTab('course');
          setSelectedLessonId(null);
        }}
        onSelectLesson={handleSelectLesson}
        selectedTrack={selectedTrack}
        onSelectTrack={handleSelectTrack}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar
        onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
        selectedTrack={selectedTrack}
        onSelectTrack={handleSelectTrack}
      />

      {/* Main App Layout */}
      <div className="flex-1 flex max-w-[1550px] w-full mx-auto">
        {/* Left Sidebar */}
        <LeftSidebar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            setSelectedLessonId(null);
          }}
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          onOpenPractice={() => {
            setActiveTab('prompt');
            setSelectedLessonId(null);
          }}
        />

        {/* Center Dynamic Content Area */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {renderMainContent()}
        </main>

        {/* Right Sidebar (Active Track Overview & Community Stats) */}
        <RightSidebar
          selectedTrack={selectedTrack}
          onSelectTrack={handleSelectTrack}
        />
      </div>
    </div>
  );
}
