import React, { useState, useEffect } from 'react';
import { LESSONS_NCKH, LESSONS_TECH } from './data/courseData';
import { CompetitionTrack } from './types';
import Navbar from './components/Navbar';
import LeftSidebar, { NavTab } from './components/LeftSidebar';
import RoadmapGrid from './components/RoadmapGrid';
import LessonDetailView from './components/LessonDetailView';
import PromptStudioTab from './components/PromptStudioTab';
import TrackSelectionScreen from './components/TrackSelectionScreen';
import SupportTab from './components/SupportTab';

const STORAGE_KEY = 'vibe_coding_roadmap_progress_v7';
const TRACK_STORAGE_KEY = 'vibe_coding_selected_track_v1';

export default function App() {
  const [hasChosenTrack, setHasChosenTrack] = useState(false);
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
    return [];
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
    setActiveTab('course');
    setHasChosenTrack(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangeTrack = () => {
    setSelectedLessonId(null);
    setIsMobileMenuOpen(false);
    setHasChosenTrack(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          lessons={currentLessons}
          onSelectLesson={handleSelectLesson}
        />
      );
    }

    if (activeTab === 'prompt') {
      return <PromptStudioTab selectedTrack={selectedTrack} />;
    }

    if (activeTab === 'help') {
      return <SupportTab />;
    }

    return <SupportTab />;
  };

  if (!hasChosenTrack) {
    return <TrackSelectionScreen onSelect={handleSelectTrack} />;
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8fafc] font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <div className="mx-auto flex min-h-screen w-full min-w-0 max-w-[1550px]">
        {/* Left Sidebar */}
        <LeftSidebar
          activeTab={activeTab}
          selectedTrack={selectedTrack}
          onChangeTrack={handleChangeTrack}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            setSelectedLessonId(null);
          }}
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
        />

        <div className="flex w-full min-w-0 max-w-full flex-1 flex-col overflow-hidden">
          <Navbar
            onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
          />

          {/* Center Dynamic Content Area */}
          <main className="w-full min-w-0 max-w-full flex-1 overflow-x-hidden p-[16px] lg:p-[24px]">
            {renderMainContent()}
          </main>

          <footer className="border-t border-slate-200 bg-white px-4 py-3 text-center text-[11px] leading-relaxed text-slate-500">
            VibeLab · Tài liệu giáo dục, không thay thế tư vấn chuyên môn hoặc quy trình an toàn đã được phê duyệt · Rà soát 27/10/2026
          </footer>
        </div>
      </div>
    </div>
  );
}
