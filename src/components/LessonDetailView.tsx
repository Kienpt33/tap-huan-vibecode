import React, { useState } from 'react';
import { LessonCard, CompetitionTrack } from '../types';
import { COMPETITION_TRACKS } from '../data/courseData';
import TokenCalculatorLab from './labs/TokenCalculatorLab';
import NckhPromptBuilderLab from './labs/NckhPromptBuilderLab';
import ReadinessChecklistLab from './labs/ReadinessChecklistLab';
import DeployConfigGeneratorLab from './labs/DeployConfigGeneratorLab';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

interface LessonDetailViewProps {
  lesson: LessonCard;
  selectedTrack: CompetitionTrack;
  isCompleted: boolean;
  onToggleCompleted: () => void;
  onBackToGrid: () => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function LessonDetailView({
  lesson,
  selectedTrack,
  isCompleted,
  onToggleCompleted,
  onBackToGrid,
  onNavigateNext,
  onNavigatePrev,
  hasNext,
  hasPrev,
}: LessonDetailViewProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const trackInfo = COMPETITION_TRACKS[selectedTrack];

  const handleCopyPrompt = () => {
    if (!lesson.samplePrompt) return;
    navigator.clipboard.writeText(lesson.samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const renderTool = () => {
    switch (lesson.toolType) {
      case 'token-calculator':
        return <TokenCalculatorLab />;
      case 'nckh-prompt-builder':
        return <NckhPromptBuilderLab />;
      case 'readiness-checklist':
        return <ReadinessChecklistLab />;
      case 'deploy-generator':
        return <DeployConfigGeneratorLab />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      {/* Top Bar: Back button & Status */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={onBackToGrid}
          className="px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-2 transition"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <span>Quay lại Lộ trình</span>
        </button>

        <div className="flex items-center gap-2.5">
          <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
            {trackInfo.icon} {trackInfo.shortTitle}
          </span>

          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
            Chặng {lesson.stepNumber}
          </span>

          <button
            onClick={onToggleCompleted}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-white' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Đã hoàn thành' : 'Đánh dấu đã học'}</span>
          </button>
        </div>
      </div>

      {/* Title & Metadata */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>Thời lượng ước tính: {lesson.duration}</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {lesson.title}
        </h1>

        <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed font-normal">
          {lesson.description}
        </p>
      </div>

      {/* Key Takeaways Cards */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
          📌 Điểm then chốt cho {trackInfo.title}:
        </span>
        <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 list-disc list-inside leading-relaxed">
          {lesson.keyPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Sample Prompt Box */}
      {lesson.samplePrompt && (
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Câu lệnh mẫu (Prompt) tham khảo:
            </span>
            <button
              onClick={handleCopyPrompt}
              className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-blue-300 text-blue-700 text-xs font-semibold rounded-lg flex items-center gap-1 transition"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Đã sao chép
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Sao chép prompt
                </>
              )}
            </button>
          </div>

          <div className="p-3 bg-white border border-blue-100 rounded-xl text-xs md:text-sm text-slate-800 font-mono leading-relaxed">
            {lesson.samplePrompt}
          </div>
        </div>
      )}

      {/* Educational Body Reading Content */}
      <div
        className="prose prose-slate max-w-none text-slate-800 text-sm md:text-base leading-relaxed space-y-4 pt-2"
        dangerouslySetInnerHTML={{ __html: lesson.contentHtml }}
      />

      {/* Interactive Tool Widget (No API key needed!) */}
      {renderTool()}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button
          onClick={onNavigatePrev}
          disabled={!hasPrev}
          className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Bài trước</span>
        </button>

        <button
          onClick={onNavigateNext}
          disabled={!hasNext}
          className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 shadow-xs"
        >
          <span>Bài tiếp theo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
