import React, { useState, useMemo } from 'react';
import { Send, CheckCircle2, Globe } from 'lucide-react';

export default function TokenCalculatorLab() {
  const [inputText, setInputText] = useState(
    'Hãy xây dựng bảng điều khiển giám sát chất lượng không khí học đường, hiển thị nồng độ bụi mịn PM2.5 và phát tín hiệu cảnh báo khi vượt ngưỡng.'
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const stats = useMemo(() => {
    const chars = inputText.length;
    const words = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
    const roughCenter = Math.max(1, Math.round(chars / 3.2));
    const estimatedMin = Math.max(1, Math.round(roughCenter * 0.8));
    const estimatedMax = Math.max(1, Math.round(roughCenter * 1.2));

    return { chars, words, estimatedMin, estimatedMax };
  }, [inputText]);

  const handleTestApi = () => {
    setIsSimulating(true);
    setApiResponse(null);

    setTimeout(() => {
      setIsSimulating(false);
      setApiResponse(
        `[Mô phỏng nội bộ]: Đã đóng gói ${stats.estimatedMin}–${stats.estimatedMax} token ước lượng vào một yêu cầu HTTP. Không có dữ liệu nào được gửi ra Internet.`
      );
    }, 450);
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 my-6 shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">
            Ước lượng Token & Minh họa vòng đời API
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Kết quả chỉ là khoảng ước lượng; số thực tế phụ thuộc tokenizer và mô hình bạn sử dụng
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4">
        {/* Input & Metrics */}
        <div className="lg:col-span-7 space-y-3">
          <div>
            <label className="text-xs font-medium text-slate-700 block mb-1">
              Nội dung yêu cầu (Prompt) gửi tới AI:
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white transition resize-none font-sans"
            />
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">Số từ</span>
              <span className="text-base font-bold text-slate-900 font-mono">{stats.words}</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">Khoảng Token</span>
              <span className="text-base font-bold text-blue-600 font-mono">{stats.estimatedMin}–{stats.estimatedMax}</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">Số ký tự</span>
              <span className="text-base font-bold text-slate-700 font-mono">{stats.chars}</span>
            </div>
          </div>
        </div>

        {/* API Simulation */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-2.5">
              <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                Minh họa API — không gửi mạng
              </span>
              <span className="text-[11px] font-mono text-slate-500">HTTP POST</span>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Quan sát trạng thái gửi/nhận mà không dùng khóa truy cập hoặc máy chủ thật:
            </p>

            <button
              onClick={handleTestApi}
              disabled={isSimulating}
              className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-xs rounded-lg flex items-center justify-center gap-1.5 transition"
            >
              {isSimulating ? (
                <>
                  <div className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Đang gửi yêu cầu...
                </>
              ) : (
                <>
                  <Send className="w-3 h-3" />
                  Chạy mô phỏng nội bộ
                </>
              )}
            </button>
          </div>

          {apiResponse && (
            <div className="mt-3 p-2.5 bg-white border border-slate-200 rounded-lg text-xs space-y-1">
              <div className="flex items-center gap-1 text-emerald-700 font-medium text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                200 OK (phản hồi giả lập)
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                {apiResponse}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
