import React from 'react';
import NckhPromptBuilderLab from './labs/NckhPromptBuilderLab';
import { PenTool } from 'lucide-react';
import { CompetitionTrack } from '../types';

export default function PromptStudioTab({ selectedTrack }: { selectedTrack: CompetitionTrack }) {
  return (
    <div className="min-w-0 overflow-hidden bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <PenTool className="w-3.5 h-3.5" />
          <span>CÔNG CỤ THỰC HÀNH</span>
        </div>
        <h1 className="break-words text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Tạo Prompt Cho Ứng Dụng Đầu Tiên
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Chọn một ví dụ, sửa ba thông tin và sao chép prompt sang Google AI Studio.
        </p>
      </div>

      <NckhPromptBuilderLab initialTrack={selectedTrack} />
    </div>
  );
}
