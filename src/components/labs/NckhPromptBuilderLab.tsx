import React, { useEffect, useMemo, useState } from 'react';
import { Check, Copy, FileText } from 'lucide-react';
import { CompetitionTrack } from '../../types';

const PRESETS = {
  nckh: [
    {
      label: 'Theo dõi cây',
      name: 'Nhật ký theo dõi sự phát triển của cây đậu',
      input: 'Ngày đo, tên cây và chiều cao tính bằng cm',
      features: 'Nhập số liệu, xem bảng và vẽ biểu đồ chiều cao theo ngày'
    },
    {
      label: 'Đọc sách',
      name: 'Bảng theo dõi thói quen đọc sách của lớp',
      input: 'Mã học sinh ẩn danh, tên sách và số phút đọc',
      features: 'Thêm lượt đọc, xem tổng số phút và biểu đồ theo tuần'
    },
    {
      label: 'Phân loại rác',
      name: 'Thống kê rác tái chế trong lớp học',
      input: 'Ngày, loại rác và số lượng',
      features: 'Nhập số lượng, tính tổng và vẽ biểu đồ theo loại rác'
    }
  ],
  tech: [
    {
      label: 'Tưới cây',
      name: 'Bảng điều khiển mô phỏng tưới cây',
      input: 'Độ ẩm đất từ 0 đến 100%',
      features: 'Hiển thị độ ẩm và nút bật/tắt máy bơm ở chế độ demo'
    },
    {
      label: 'Thùng rác',
      name: 'Mô phỏng thùng rác thông minh',
      input: 'Mức đầy của thùng từ 0 đến 100%',
      features: 'Hiển thị mức đầy và cảnh báo khi vượt 80%'
    },
    {
      label: 'Thư viện lớp',
      name: 'Bộ đếm sách mượn trong lớp',
      input: 'Tên sách, ngày mượn và trạng thái đã trả/chưa trả',
      features: 'Thêm lượt mượn, đổi trạng thái và đếm số sách chưa trả'
    }
  ]
} satisfies Record<CompetitionTrack, Array<{ label: string; name: string; input: string; features: string }>>;

export default function NckhPromptBuilderLab({ initialTrack = 'nckh' }: { initialTrack?: CompetitionTrack }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [dataInput, setDataInput] = useState('');
  const [features, setFeatures] = useState('');
  const [copied, setCopied] = useState(false);

  const applyPreset = (index: number) => {
    const preset = PRESETS[initialTrack][index];
    setSelectedIndex(index);
    setProjectName(preset.name);
    setDataInput(preset.input);
    setFeatures(preset.features);
  };

  useEffect(() => {
    const preset = PRESETS[initialTrack][0];
    setSelectedIndex(0);
    setProjectName(preset.name);
    setDataInput(preset.input);
    setFeatures(preset.features);
  }, [initialTrack]);

  const generatedPrompt = useMemo(() => {
    const safetyLine = initialTrack === 'tech'
      ? 'Đây là bản mô phỏng. Không kết nối hoặc điều khiển thiết bị thật.'
      : 'Không tự tạo thêm số liệu và không gửi dữ liệu lên máy chủ.';

    return `Tôi là giáo viên tiểu học.

Hãy tạo một ứng dụng web có tên: “${projectName}”.

Dữ liệu tôi có:
- ${dataInput}.

Ứng dụng cần làm được:
- ${features}.

Yêu cầu:
- Giao diện bằng tiếng Việt, chữ dễ đọc, nút bấm rõ ràng.
- Có sẵn vài dòng dữ liệu giả để tôi chạy thử.
- ${safetyLine}
- Nếu còn thiếu thông tin, hãy hỏi tôi trước khi tạo.
- Sau khi hoàn thành, giải thích cách sử dụng và đưa ra 5 tình huống để kiểm tra.`;
  }, [dataInput, features, initialTrack, projectName]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Tạo prompt đầu tiên</h4>
          <p className="mt-1 text-xs text-slate-500">Chọn ví dụ gần với ý tưởng của bạn, sau đó sửa ba ô bên dưới.</p>
        </div>
        <span className="rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
          {initialTrack === 'nckh' ? '🔬 Nhánh NCKH' : '⚙️ Nhánh Kỹ thuật'}
        </span>
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-12">
        <div className="min-w-0 space-y-3 lg:col-span-5">
          <div className="grid grid-cols-3 gap-2">
            {PRESETS[initialTrack].map((preset, index) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => applyPreset(index)}
                className={`rounded-lg border p-2 text-xs font-semibold transition ${selectedIndex === index ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <label className="block text-xs font-semibold text-slate-700">
            Tên ứng dụng
            <input value={projectName} onChange={event => setProjectName(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs font-normal text-slate-800 focus:border-blue-500 focus:outline-none" />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Dữ liệu có gì?
            <input value={dataInput} onChange={event => setDataInput(event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs font-normal text-slate-800 focus:border-blue-500 focus:outline-none" />
          </label>
          <label className="block text-xs font-semibold text-slate-700">
            Ứng dụng cần làm gì?
            <textarea value={features} onChange={event => setFeatures(event.target.value)} rows={3} className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs font-normal leading-relaxed text-slate-800 focus:border-blue-500 focus:outline-none" />
          </label>
        </div>

        <div className="min-w-0 flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-3.5 lg:col-span-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700"><FileText className="h-3.5 w-3.5" /> Prompt để dán vào AI Studio</span>
            <button type="button" onClick={handleCopy} className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100">
              {copied ? <><Check className="h-3.5 w-3.5 text-emerald-600" /> Đã sao chép</> : <><Copy className="h-3.5 w-3.5" /> Sao chép</>}
            </button>
          </div>
          <pre className="mt-3 max-h-72 flex-1 overflow-y-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-700">{generatedPrompt}</pre>
        </div>
      </div>
    </div>
  );
}
