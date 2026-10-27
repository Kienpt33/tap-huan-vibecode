import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

export default function NckhPromptBuilderLab() {
  const [track, setTrack] = useState<'nckh' | 'tech'>('nckh');
  const [selectedTopic, setSelectedTopic] = useState('water');

  const [teamProjectName, setTeamProjectName] = useState(
    'Khảo sát chất lượng nước mặt và nồng độ ô nhiễm sinh hoạt tại địa phương'
  );
  const [dataInputs, setDataInputs] = useState(
    'File số liệu 50 mẫu đo: pH, Oxy hòa tan (DO mg/L), Độ đục (NTU), 5 điểm lấy mẫu'
  );
  const [keyOutput, setKeyOutput] = useState(
    'Bảng tra cứu lọc mẫu theo ngày, tính trung bình và vẽ biểu đồ đường so sánh với ngưỡng QCVN 08-MT:2015'
  );
  const [copied, setCopied] = useState(false);

  const presetsNCKH: Record<string, { name: string; inputs: string; output: string }> = {
    water: {
      name: 'Đánh giá chất lượng nước sinh hoạt và nồng độ ô nhiễm tại địa phương',
      inputs: '50 mẫu đo các chỉ số: pH (6.5-8.5), DO (mg/L), Độ đục (NTU) tại 5 trạm',
      output: 'Biểu đồ đường biến thiên theo tuần và bảng đối chiếu với tiêu chuẩn nước mặt QCVN',
    },
    sleep: {
      name: 'Khảo sát ảnh hưởng của thời gian dùng màn hình điện thoại đến chất lượng giấc ngủ học sinh',
      inputs: 'Khảo sát 120 học sinh THCS: Số giờ dùng điện thoại, Số giờ ngủ/đêm, Mức độ tập trung (thang 1-10)',
      output: 'Biểu đồ phân tán (Scatter plot) thể hiện mối tương quan và tính hệ số tương quan r',
    },
    herb: {
      name: 'Nghiên cứu hoạt tính kháng khuẩn của dịch chiết lá bàng đối với vi khuẩn gây bệnh',
      inputs: 'Đường kính vòng kháng khuẩn (mm) ở 4 nồng độ dịch chiết khác nhau (10%, 25%, 50%, 75%) qua 3 lần lặp lại',
      output: 'Biểu đồ cột có thanh sai số (Error bars) và bảng so sánh với nhóm đối chứng',
    },
  };

  const presetsTech: Record<string, { name: string; inputs: string; output: string }> = {
    tree: {
      name: 'Hệ thống giám sát và tưới tiêu vườn trường thông minh',
      inputs: 'Cảm biến độ ẩm đất (0 - 100%) và cảm biến nhiệt độ ngoài trời',
      output: 'Đồng hồ kim đo độ ẩm, nút đóng/ngắt máy bơm thủ công và nút giả lập trời nắng hạn',
    },
    trash: {
      name: 'Thùng rác phân loại thông minh học đường',
      inputs: 'Cảm biến siêu âm đo mức đầy (cm) và nút bấm phân loại rác tái chế / hữu cơ',
      output: 'Thẻ đếm số lượt bỏ rác, thanh đo phần trăm dung lượng và âm thanh cảm ơn',
    },
    light: {
      name: 'Hệ thống đèn bàn học thông minh tự động điều chỉnh ánh sáng',
      inputs: 'Cảm biến cường độ ánh sáng (Lux) và cảm biến khoảng cách ngồi học (cm)',
      output: 'Cảnh báo khi học sinh cúi quá gần bàn (<25cm) và tự động tăng độ sáng đèn',
    },
  };

  const handleSelectTrack = (newTrack: 'nckh' | 'tech') => {
    setTrack(newTrack);
    if (newTrack === 'nckh') {
      setSelectedTopic('water');
      const p = presetsNCKH['water'];
      setTeamProjectName(p.name);
      setDataInputs(p.inputs);
      setKeyOutput(p.output);
    } else {
      setSelectedTopic('tree');
      const p = presetsTech['tree'];
      setTeamProjectName(p.name);
      setDataInputs(p.inputs);
      setKeyOutput(p.output);
    }
  };

  const handleSelectPreset = (key: string) => {
    setSelectedTopic(key);
    const p = track === 'nckh' ? presetsNCKH[key] : presetsTech[key];
    if (p) {
      setTeamProjectName(p.name);
      setDataInputs(p.inputs);
      setKeyOutput(p.output);
    }
  };

  const generatedPrompt =
    track === 'nckh'
      ? `Tôi đang chuẩn bị đề tài dự thi Nghiên Cứu Khoa Học:
"${teamProjectName}".

Yêu cầu AI viết ứng dụng web phân tích số liệu thực nghiệm:
1. Dữ liệu đầu vào: ${dataInputs}.
2. Tính năng phân tích & hiển thị: ${keyOutput}.
3. Tích hợp tính năng cho Hội đồng Giám khảo chọn lọc xem từng mẫu hoặc ngày đo trực tiếp trên web.
4. Giao diện trang nhã, biểu đồ khoa học rõ ràng, ghi rõ đơn vị đo trên các trục tọa độ.

Hãy viết mã nguồn hoàn chỉnh bằng React và Tailwind CSS.`
      : `Tôi đang chuẩn bị đề tài dự thi Công Nghệ Kỹ Thuật:
"${teamProjectName}".

Yêu cầu AI viết giao diện Dashboard điều khiển thiết bị:
1. Thông số cảm biến & thiết bị: ${dataInputs}.
2. Tính năng hiển thị & điều khiển: ${keyOutput}.
3. Tích hợp 1 nút bấm "Giả lập sự cố khẩn cấp" để Ban Giám Khảo bấm thử và quan sát cơ chế phản ứng của hệ thống.
4. Giao diện trực quan, nút bấm to rõ ràng, tương thích trên điện thoại thông minh.

Hãy viết mã nguồn hoàn chỉnh bằng React và Tailwind CSS.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 my-6 shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">
            Công cụ tạo câu lệnh yêu cầu (Prompt Generator) cho đề tài dự thi
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Lựa chọn bảng thi và đề tài mẫu để tạo câu lệnh đặc tả chuẩn cho AI
          </p>
        </div>

        {/* Track switch buttons */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => handleSelectTrack('nckh')}
            className={`px-2.5 py-1 rounded text-xs font-semibold transition ${
              track === 'nckh' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            🔬 Bảng NCKH
          </button>
          <button
            type="button"
            onClick={() => handleSelectTrack('tech')}
            className={`px-2.5 py-1 rounded text-xs font-semibold transition ${
              track === 'tech' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            ⚙️ Bảng Kỹ Thuật
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4">
        {/* Form Inputs */}
        <div className="lg:col-span-5 space-y-3 text-xs">
          <div>
            <label className="text-slate-700 font-medium block mb-1">
              Đề tài mẫu gợi ý ({track === 'nckh' ? 'Nghiên cứu Khoa học' : 'Công nghệ Kỹ thuật'}):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {track === 'nckh' ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('water')}
                    className={`p-2 rounded-lg border text-center transition font-medium ${
                      selectedTopic === 'water'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    Nước mặt
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('sleep')}
                    className={`p-2 rounded-lg border text-center transition font-medium ${
                      selectedTopic === 'sleep'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    Giấc ngủ
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('herb')}
                    className={`p-2 rounded-lg border text-center transition font-medium ${
                      selectedTopic === 'herb'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    Kháng khuẩn
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('tree')}
                    className={`p-2 rounded-lg border text-center transition font-medium ${
                      selectedTopic === 'tree'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    Vườn trường
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('trash')}
                    className={`p-2 rounded-lg border text-center transition font-medium ${
                      selectedTopic === 'trash'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    Thùng rác
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('light')}
                    className={`p-2 rounded-lg border text-center transition font-medium ${
                      selectedTopic === 'light'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    Đèn thông minh
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <label className="text-slate-700 font-medium block mb-1">
              Tên đề tài của nhóm:
            </label>
            <input
              type="text"
              value={teamProjectName}
              onChange={(e) => setTeamProjectName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-slate-700 font-medium block mb-1">
              {track === 'nckh' ? 'Số liệu mẫu & Biến số nghiên cứu:' : 'Thông số & Cảm biến phần cứng:'}
            </label>
            <input
              type="text"
              value={dataInputs}
              onChange={(e) => setDataInputs(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-slate-700 font-medium block mb-1">
              {track === 'nckh' ? 'Biểu đồ & Tiêu chuẩn so sánh:' : 'Tính năng điều khiển cho Giám khảo thử:'}
            </label>
            <input
              type="text"
              value={keyOutput}
              onChange={(e) => setKeyOutput(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Output Prompt */}
        <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-2">
              <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                Câu lệnh đề xuất (Copy & Paste vào AI):
              </span>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-md text-xs font-medium flex items-center gap-1 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" /> Đã sao chép
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-500" /> Sao chép
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 leading-relaxed font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
              {generatedPrompt}
            </pre>
          </div>

          <p className="text-[11px] text-slate-500 mt-2">
            Đội thi chỉ cần sao chép câu lệnh này và gửi cho AI trong buổi tập huấn để nhận mã nguồn phù hợp.
          </p>
        </div>
      </div>
    </div>
  );
}
