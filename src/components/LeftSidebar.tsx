import React from 'react';
import {
  Sparkles,
  LayoutDashboard,
  BookOpen,
  PenTool,
  Gamepad2,
  Wrench,
  FlaskConical,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';

export type NavTab = 'course' | 'prompt' | 'templates' | 'readiness' | 'labs' | 'help' | 'overview';

interface LeftSidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onOpenPractice: () => void;
}

export default function LeftSidebar({
  activeTab,
  onSelectTab,
  isOpenMobile,
  onCloseMobile,
  onOpenPractice,
}: LeftSidebarProps) {
  const navItems = [
    { id: 'overview', label: 'Tổng quan', icon: LayoutDashboard },
    { id: 'course', label: 'Khóa học', icon: BookOpen },
    { id: 'prompt', label: 'Tạo Prompt', icon: PenTool },
    { id: 'templates', label: 'Thư viện mẫu KHKT', icon: Gamepad2 },
    { id: 'readiness', label: 'Nâng cấp & Chuẩn bị', icon: Wrench },
    { id: 'labs', label: 'Thư viện trải nghiệm', icon: FlaskConical },
    { id: 'help', label: 'Trợ giúp', icon: HelpCircle },
  ];

  return (
    <>
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-2xs lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static top-16 bottom-0 left-0 z-40 w-60 bg-white border-r border-slate-200/90 p-4 flex flex-col justify-between transition-transform duration-200 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-4">
          {/* Top Action Button */}
          <button
            onClick={() => {
              onOpenPractice();
              onCloseMobile();
            }}
            className="w-full py-2.5 px-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-left flex items-center gap-2.5 transition shadow-2xs group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                KHÔNG GIAN
              </span>
              <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                Thực hành AI
              </span>
            </div>
          </button>

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

        {/* Bottom Tip Card */}
        <div className="p-3.5 rounded-2xl bg-[#fff7ed] border border-[#ffedd5] text-xs text-[#9a3412] space-y-1">
          <div className="flex items-center gap-1 font-bold text-[#c2410c] text-[11px] uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5 text-[#f97316]" />
            Mẹo nhỏ
          </div>
          <p className="text-[11px] text-[#7c2d12] leading-relaxed font-normal">
            Bắt đầu bằng một đề tài bạn sắp làm để mọi bước thực hành đều có ý nghĩa thực tế.
          </p>
        </div>
      </aside>
    </>
  );
}
