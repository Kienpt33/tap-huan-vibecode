import React from 'react';
import { LessonCard, CompetitionTrack } from '../types';
import { COMPETITION_TRACKS } from '../data/courseData';
import { Clock, ArrowRight, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

interface RoadmapGridProps {
  selectedTrack: CompetitionTrack;
  onSelectTrack: (track: CompetitionTrack) => void;
  lessons: LessonCard[];
  onSelectLesson: (lessonId: string) => void;
}

export default function RoadmapGrid({
  selectedTrack,
  onSelectTrack,
  lessons,
  onSelectLesson,
}: RoadmapGridProps) {
  const currentTrackInfo = COMPETITION_TRACKS[selectedTrack];

  const getThemeClasses = (theme: LessonCard['theme']) => {
    switch (theme) {
      case 'green':
        return {
          bg: 'bg-[#f0fdf4]',
          numberColor: 'text-[#4ade80]/90',
        };
      case 'orange':
        return {
          bg: 'bg-[#fff7ed]',
          numberColor: 'text-[#fb923c]/90',
        };
      case 'purple':
        return {
          bg: 'bg-[#f5f3ff]',
          numberColor: 'text-[#a78bfa]/90',
        };
      case 'blue':
      default:
        return {
          bg: 'bg-[#f0f9ff]',
          numberColor: 'text-[#38bdf8]/90',
        };
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-8">
      {/* SECTION 1: PROMINENT COMPETITION TRACK SELECTION BANNER */}
      <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
              BƯỚC 1: XÁC ĐỊNH BẢNG THI CỦA ĐỘI BẠN
            </span>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mt-0.5">
              Chọn nhánh bài học phù hợp với đề tài dự thi
            </h2>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Bấm chọn để chuyển đổi lộ trình học tập
          </span>
        </div>

        {/* 2 Track Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Track 1: NCKH */}
          <div
            onClick={() => onSelectTrack('nckh')}
            className={`p-4 md:p-5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
              selectedTrack === 'nckh'
                ? 'bg-white border-blue-600 shadow-sm ring-2 ring-blue-100'
                : 'bg-white/60 border-slate-200 hover:border-slate-300 text-slate-600'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🔬</span>
                {selectedTrack === 'nckh' ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Đang chọn
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                    Bấm để chọn
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Bảng Nghiên Cứu Khoa Học (NCKH)
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Đề tài xuất phát từ giả thuyết, câu hỏi nghiên cứu (Môi trường, Sinh học, Hóa học, Y sinh, Khoa học xã hội).
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-medium text-blue-700">
              💡 Vibe Coding hỗ trợ: Tự động phân tích số liệu thực nghiệm, tính toán thống kê và vẽ biểu đồ tương quan.
            </div>
          </div>

          {/* Track 2: Tech */}
          <div
            onClick={() => onSelectTrack('tech')}
            className={`p-4 md:p-5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
              selectedTrack === 'tech'
                ? 'bg-white border-blue-600 shadow-sm ring-2 ring-blue-100'
                : 'bg-white/60 border-slate-200 hover:border-slate-300 text-slate-600'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">⚙️</span>
                {selectedTrack === 'tech' ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Đang chọn
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                    Bấm để chọn
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Bảng Công Nghệ Kỹ Thuật (KHKT)
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Đề tài chế tạo thiết bị, giải pháp kỹ thuật, hệ thống nhúng, IoT, robot giải quyết các bài toán đời sống.
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-medium text-blue-700">
              💡 Vibe Coding hỗ trợ: Xây dựng Dashboard điều khiển thiết bị, biểu đồ cảm biến và nút bấm giả lập sự cố.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ROADMAP HEADER FOR THE CHOSEN TRACK */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
            LỘ TRÌNH 6 CHẶNG CHO {currentTrackInfo.title.toUpperCase()}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {selectedTrack === 'nckh' ? 'Nhánh Phân Tích Thực Nghiệm' : 'Nhánh Bảng Điều Khiển Thiết Bị'}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Học Vibe Coding bằng cách <span className="text-blue-600">tạo sản phẩm.</span>
        </h1>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          {currentTrackInfo.vibeCodingBenefit} Đi hết 6 chặng dưới đây, bạn sẽ nắm trọn quy trình chuẩn bị và xuất bản sản phẩm cho ngày chấm thi.
        </p>
      </div>

      {/* Suggestion Callout Card */}
      <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-start sm:items-center gap-3 text-xs md:text-sm text-[#166534]">
        <BookOpen className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5 sm:mt-0" />
        <div className="leading-relaxed">
          <strong className="font-semibold text-[#14532d]">Gợi ý cho đội thi:</strong>{' '}
          Học theo thứ tự 6 chặng để hiểu đúng từ khái niệm, chuẩn bị số liệu đến khi xuất bản mã QR. Tổng thời lượng đọc khoảng 60 phút.
        </div>
      </div>

      {/* SECTION 3: 3-COLUMN GRID OF LESSON CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
        {lessons.map((lesson) => {
          const t = getThemeClasses(lesson.theme);

          return (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className="group rounded-2xl border border-slate-200/90 overflow-hidden bg-white hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              {/* Pattern Header with Watermark Step Number */}
              <div
                className={`relative h-24 ${t.bg} p-4 flex items-center justify-start overflow-hidden border-b border-slate-100/60`}
                style={{
                  backgroundImage: `radial-gradient(currentColor 1.5px, transparent 1.5px)`,
                  backgroundSize: '10px 10px',
                }}
              >
                <span
                  className={`text-5xl font-black font-mono tracking-tight select-none ${t.numberColor}`}
                >
                  {lesson.stepNumber}
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
