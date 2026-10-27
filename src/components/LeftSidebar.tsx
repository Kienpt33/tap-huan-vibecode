import React from 'react';
import {
  BookOpen,
  PenTool,
  Lightbulb,
  CircleHelp,
  ArrowRightLeft,
} from 'lucide-react';
import { CompetitionTrack } from '../types';

export type NavTab = 'course' | 'prompt' | 'help';

interface LeftSidebarProps {
  activeTab: NavTab;
  selectedTrack: CompetitionTrack;
  onChangeTrack: () => void;
  onSelectTab: (tab: NavTab) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export default function LeftSidebar({
  activeTab,
  selectedTrack,
  onChangeTrack,
  onSelectTab,
  isOpenMobile,
  onCloseMobile,
}: LeftSidebarProps) {
  const navItems = [
    { id: 'course', label: '5 bước bắt đầu', icon: BookOpen },
    { id: 'prompt', label: 'Tạo Prompt', icon: PenTool },
    { id: 'help', label: 'Hỗ trợ', icon: CircleHelp },
  ];

  return (
    <>
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-2xs xl:hidden"
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-[64px] z-40 flex w-[240px] shrink-0 flex-col justify-between overflow-y-auto border-r border-slate-200/90 bg-white p-[16px] transition-transform duration-200 ease-in-out xl:sticky xl:bottom-auto xl:top-0 xl:h-screen xl:self-start ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
        }`}
      >
        <div className="space-y-4">
          <div className="hidden border-b border-slate-200 pb-5 xl:block">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-base font-black text-white shadow-sm">V</span>
              <span className="text-base font-black tracking-tight text-slate-900">VibeLab</span>
            </div>
            <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Chương trình tập huấn</p>
            <p className="mt-1 text-xs font-extrabold leading-relaxed text-blue-600">Vibe Coding cho Đề tài Khoa học, Kỹ thuật</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id as NavTab);
                    onCloseMobile();
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2.5 transition ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => {
              onCloseMobile();
              onChangeTrack();
            }}
            className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Đổi bảng thi"
          >
            <span className="min-w-0 truncate">
              {selectedTrack === 'nckh' ? '🔬 Khoa học' : '⚙️ Kỹ thuật'}
            </span>
            <span className="flex shrink-0 items-center gap-1.5 text-blue-600">
              <ArrowRightLeft className="h-3.5 w-3.5" />
              Đổi bảng
            </span>
          </button>

          {/* Bottom Tip Card */}
          <div className="space-y-1 rounded-2xl border border-[#ffedd5] bg-[#fff7ed] p-3.5 text-xs text-[#9a3412]">
            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#c2410c]">
              <Lightbulb className="h-3.5 w-3.5 text-[#f97316]" />
              Mẹo nhỏ
            </div>
            <p className="text-[11px] font-normal leading-relaxed text-[#7c2d12]">
              Hãy bắt đầu bằng một ứng dụng rất nhỏ, chạy thử được trong 15 phút.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
