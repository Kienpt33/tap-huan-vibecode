import React from 'react';
import NckhPromptBuilderLab from './labs/NckhPromptBuilderLab';
import { PenTool } from 'lucide-react';

export default function PromptStudioTab() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <PenTool className="w-3.5 h-3.5" />
          <span>CÔNG CỤ THỰC HÀNH</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Xưởng Tạo Prompt Cho Đề Tài KHKT
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tạo nhanh các câu lệnh đặc tả bài toán chuẩn xác để gửi cho AI Studio, Cursor hoặc v0.
        </p>
      </div>

      <NckhPromptBuilderLab />
    </div>
  );
}
