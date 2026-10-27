import React from 'react';
import { LessonCard, CompetitionTrack } from '../types';
import { COMPETITION_TRACKS } from '../data/courseData';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface RoadmapGridProps {
  selectedTrack: CompetitionTrack;
  lessons: LessonCard[];
  onSelectLesson: (lessonId: string) => void;
}

export default function RoadmapGrid({
  selectedTrack,
  lessons,
  onSelectLesson,
}: RoadmapGridProps) {
  const currentTrackInfo = COMPETITION_TRACKS[selectedTrack];

  const getThemeClasses = (theme: LessonCard['theme']) => {
    switch (theme) {
      case 'green':
        return {
          bg: 'bg-[#f0fdf4]',
          numberColor: 'text-emerald-700',
        };
      case 'orange':
        return {
          bg: 'bg-[#fff7ed]',
          numberColor: 'text-orange-700',
        };
      case 'purple':
        return {
          bg: 'bg-[#f5f3ff]',
          numberColor: 'text-violet-700',
        };
      case 'blue':
      default:
        return {
          bg: 'bg-[#f0f9ff]',
          numberColor: 'text-sky-700',
        };
    }
  };

  return (
    <div className="roadmap-shell w-full min-w-0 max-w-full space-y-8 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-[24px] shadow-2xs md:p-[40px]">
      <div className="space-y-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="max-w-full rounded-md border border-blue-200/80 bg-blue-50 px-2.5 py-1 text-xs font-bold leading-relaxed text-blue-700">
            5 BƯỚC BẮT ĐẦU · {currentTrackInfo.title.toUpperCase()}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {selectedTrack === 'nckh' ? 'Nhánh Phân Tích Thực Nghiệm' : 'Nhánh Bảng Điều Khiển Thiết Bị'}
          </span>
        </div>

        <h1 className="break-words text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl 2xl:text-5xl">
          Bắt đầu Vibe Coding <span className="text-blue-600">từng bước.</span>
        </h1>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          {currentTrackInfo.vibeCodingBenefit} Bạn chỉ cần hoàn thành năm bước dưới đây để tạo và kiểm tra bản đầu tiên.
        </p>
      </div>

      {/* Suggestion Callout Card */}
      <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-start sm:items-center gap-3 text-xs md:text-sm text-[#166534]">
        <BookOpen className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5 sm:mt-0" />
        <div className="leading-relaxed">
          <strong className="font-semibold text-[#14532d]">Gợi ý cho đội thi:</strong>{' '}
          Đi theo thứ tự từ đăng nhập đến kiểm chứng. Tổng thời lượng đọc và thực hành mẫu khoảng 50 phút.
        </div>
      </div>

      <div className="roadmap-cards grid min-w-0 grid-cols-1 gap-5 pt-2">
        {lessons.map((lesson, index) => {
          const t = getThemeClasses(lesson.theme);
          const layoutClass = index < 3
            ? 'roadmap-card-top'
            : 'roadmap-card-bottom';

          return (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className={`group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:border-blue-300 hover:shadow-md ${layoutClass}`}
            >
              {/* Pattern Header with Watermark Step Number */}
              <div
                className={`relative flex h-20 items-center justify-center overflow-hidden border-b border-slate-100/60 p-3 ${t.bg}`}
                style={{
                  backgroundImage: `radial-gradient(rgba(100, 116, 139, 0.28) 1px, transparent 1px)`,
                  backgroundSize: '10px 10px',
                }}
              >
                <span
                  className={`inline-flex min-w-28 items-baseline justify-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 font-mono shadow-sm select-none ${t.numberColor}`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Bước</span>
                  <span className="text-3xl font-black leading-none tracking-tight">{lesson.stepNumber}</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lesson.duration}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug line-clamp-2">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">
                    {lesson.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Khám phá</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
