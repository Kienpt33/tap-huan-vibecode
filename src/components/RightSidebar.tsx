import React from 'react';
import { Users, Calendar, Radio, Sparkles, ArrowRightLeft } from 'lucide-react';
import { CompetitionTrack } from '../types';
import { COMPETITION_TRACKS } from '../data/courseData';

interface RightSidebarProps {
  selectedTrack: CompetitionTrack;
  onSelectTrack: (track: CompetitionTrack) => void;
}

export default function RightSidebar({
  selectedTrack,
  onSelectTrack,
}: RightSidebarProps) {
  const currentInfo = COMPETITION_TRACKS[selectedTrack];
  const otherTrack: CompetitionTrack = selectedTrack === 'nckh' ? 'tech' : 'nckh';
  const otherInfo = COMPETITION_TRACKS[otherTrack];

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

        <button
          onClick={() => onSelectTrack(otherTrack)}
          className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
        >
          <ArrowRightLeft className="w-3.5 h-3.5 text-blue-600" />
          <span>Đổi sang {otherInfo.shortTitle}</span>
        </button>
      </div>

      {/* Card 2: HOẠT ĐỘNG CỘNG ĐỒNG */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              HOẠT ĐỘNG CỘNG ĐỒNG
            </span>
            <span className="text-xs font-bold text-slate-800 block">
              Lượt truy cập
            </span>
          </div>
        </div>

        <div className="space-y-2 pt-1 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <span className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              Tổng truy cập
            </span>
            <span className="font-bold text-blue-600 font-mono">344</span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Hôm nay
            </span>
            <span className="font-bold text-slate-800 font-mono">2</span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              Đang online
            </span>
            <span className="font-bold text-emerald-600 font-mono">1</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 leading-tight">
          Thống kê ẩn danh, không lưu IP hay thông tin cá nhân.
        </p>
      </div>

      {/* Card 3: Nguyên tắc Vibe Coding */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[11px]">
          <strong className="text-slate-800 block font-semibold">Tập trung vào ý tưởng</strong>
          Không cần nhập API Key hay học thuộc cú pháp. Bạn chỉ cần đưa ra ý tưởng và dữ liệu, AI sẽ hỗ trợ tạo sản phẩm.
        </div>
      </div>
    </aside>
  );
}
