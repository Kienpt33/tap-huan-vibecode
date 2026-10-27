import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const ITEMS = [
  ['v1', 'Đúng yêu cầu', 'Tên, số liệu, công thức và nội dung hiển thị đúng với đề bài.'],
  ['v2', 'Thử nhiều tình huống', 'Thử dữ liệu bình thường, để trống và nhập sai để xem ứng dụng phản hồi.'],
  ['v3', 'An toàn dữ liệu', 'Không có thông tin nhận diện học sinh, mật khẩu hoặc khóa truy cập.'],
  ['v4', 'Nhờ người khác dùng thử', 'Một đồng nghiệp có thể hiểu và thao tác mà không cần bạn giải thích thêm.'],
];

export default function VerificationChecklistLab() {
  const [checked, setChecked] = useState<string[]>([]);

  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Bảng kiểm trước khi sử dụng</h4>
          <p className="mt-1 text-xs text-slate-500">Chỉ đánh dấu sau khi bạn đã tự kiểm tra.</p>
        </div>
        <span className="text-xs font-bold text-blue-600">{checked.length}/{ITEMS.length}</span>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {ITEMS.map(([id, title, description]) => {
          const done = checked.includes(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => setChecked(current => done ? current.filter(item => item !== id) : [...current, id])}
              className={`flex gap-2.5 rounded-xl border p-3 text-left transition ${done ? 'border-blue-200 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
            >
              {done ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> : <Circle className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />}
              <span>
                <strong className="block text-xs text-slate-900">{title}</strong>
                <span className="mt-1 block text-[11px] leading-relaxed text-slate-500">{description}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
