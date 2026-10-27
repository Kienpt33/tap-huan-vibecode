import React from 'react';
import { ShieldCheck, Sparkles, CalendarClock } from 'lucide-react';
import { CompetitionTrack } from '../types';
import { COMPETITION_TRACKS } from '../data/courseData';

interface RightSidebarProps {
  selectedTrack: CompetitionTrack;
}

export default function RightSidebar({
  selectedTrack,
}: RightSidebarProps) {
  const currentInfo = COMPETITION_TRACKS[selectedTrack];

  return (
    <aside className="w-64 shrink-0 hidden xl:flex flex-col gap-4 p-4 pl-0">
      {/* Card 1: BẢNG THI ĐANG CHỌN */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            BẢNG THI CỦA BẠN
          </span>
          <span className="text-xl">{currentInfo.icon}</span>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900">
            {currentInfo.title}
          </h4>
          <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">
            {currentInfo.badge}
          </span>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            {currentInfo.vibeCodingBenefit}
          </p>
        </div>

      </div>

      {/* Card 2: SAFETY QUICK CHECK */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              TRƯỚC KHI CHIA SẺ
            </span>
            <span className="text-xs font-bold text-slate-800 block">
              Kiểm tra an toàn dữ liệu
            </span>
          </div>
        </div>

        <ul className="space-y-2 text-[11px] text-slate-600 leading-relaxed">
          <li>• Xóa tên, email và mã học sinh khỏi dữ liệu.</li>
          <li>• Chỉ công khai dữ liệu đã tổng hợp hoặc ẩn danh.</li>
          <li>• Không dùng liên kết công khai để điều khiển thiết bị nguy hiểm.</li>
        </ul>
        <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
          <CalendarClock className="w-3.5 h-3.5" />
          Nội dung rà soát: 27/10/2026
        </div>
      </div>

      {/* Card 3: Nguyên tắc Vibe Coding */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[11px]">
          <strong className="text-slate-800 block font-semibold">Tập trung vào ý tưởng</strong>
          AI hỗ trợ viết mã; đội thi vẫn phải kiểm tra dữ liệu, công thức, nguồn tham chiếu và thử nghiệm sản phẩm.
        </div>
      </div>
    </aside>
  );
}
