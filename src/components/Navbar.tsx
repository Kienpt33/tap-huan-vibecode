import React from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { CompetitionTrack } from '../types';

interface NavbarProps {
  onToggleMobileMenu?: () => void;
  selectedTrack: CompetitionTrack;
  onSelectTrack: (track: CompetitionTrack) => void;
}

export default function Navbar({
  onToggleMobileMenu,
  selectedTrack,
  onSelectTrack,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200/90 h-16 px-4 lg:px-6 flex items-center justify-between">
      {/* Left: Brand Logos */}
      <div className="flex items-center gap-3.5">
        <button
          onClick={onToggleMobileMenu}
          className="p-1.5 text-slate-600 hover:text-slate-900 lg:hidden rounded-md hover:bg-slate-100 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          {/* FPT Education style badge */}
          <div className="flex items-center font-black tracking-tighter text-sm italic">
            <span className="text-[#f37021]">F</span>
            <span className="text-[#008080]">P</span>
            <span className="text-[#0070ba]">T</span>
            <span className="ml-1 text-[11px] font-medium not-italic text-slate-600 tracking-normal border-l border-slate-300 pl-2">
              Education
            </span>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          {/* Program Title */}
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              CHƯƠNG TRÌNH TẬP HUẤN
            </span>
            <span className="text-xs font-extrabold text-blue-600">
              Vibe Coding Cho Cuộc Thi Sáng Tạo
            </span>
          </div>
        </div>
      </div>

      {/* Right: Category / Track Selector Switcher */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400 hidden md:inline">Bảng thi:</span>
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => onSelectTrack('nckh')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              selectedTrack === 'nckh'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🔬</span>
            <span className="hidden sm:inline">Nghiên Cứu Khoa Học</span>
            <span className="sm:hidden">NCKH</span>
          </button>

          <button
            onClick={() => onSelectTrack('tech')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              selectedTrack === 'tech'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>⚙️</span>
            <span className="hidden sm:inline">Công Nghệ Kỹ Thuật</span>
            <span className="sm:hidden">KHKT</span>
          </button>
        </div>
      </div>
    </header>
  );
}
