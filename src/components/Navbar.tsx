import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onToggleMobileMenu?: () => void;
}

export default function Navbar({
  onToggleMobileMenu,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[64px] min-w-0 items-center border-b border-slate-200/90 bg-white px-[16px] xl:hidden">
      {/* Left: Brand Logos */}
      <div className="flex min-w-0 items-center gap-3.5 xl:hidden">
        <button
          onClick={onToggleMobileMenu}
          className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100 transition"
          aria-label="Mở menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-2 font-black tracking-tight text-sm">
            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">V</span>
            <span className="text-slate-800">VibeLab</span>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden md:block" />

          {/* Program Title */}
          <div className="hidden min-w-0 flex-col md:flex">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              CHƯƠNG TRÌNH TẬP HUẤN
            </span>
            <span className="max-w-[48vw] truncate text-xs font-extrabold text-blue-600 xl:max-w-none">
              Vibe Coding Cho Đề Tài Khoa Học, Kỹ Thuật
            </span>
          </div>
        </div>
      </div>

    </header>
  );
}
