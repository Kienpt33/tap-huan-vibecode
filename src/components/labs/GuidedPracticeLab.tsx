import React, { KeyboardEvent, UIEvent, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { CompetitionTrack } from '../../types';

interface GuidedPracticeLabProps {
  track: CompetitionTrack;
}

const COMMON_SLIDES = [
  {
    image: '/assets/ai-studio-guide/step-01.webp',
    title: 'Mở Google AI Studio',
    description: 'Truy cập trang AI Studio và bấm “Get started”.',
  },
  {
    image: '/assets/ai-studio-guide/step-02.webp',
    title: 'Chọn tài khoản giáo viên',
    description: 'Đăng nhập bằng tài khoản Google của giáo viên từ 18 tuổi trở lên.',
    private: true,
  },
  {
    image: '/assets/ai-studio-guide/step-03.webp',
    title: 'Tạo ứng dụng mới',
    description: 'Trong mục Build, bấm “New app”.',
  },
];

const NCKH_SLIDES = [
  ...COMMON_SLIDES,
  {
    image: '/assets/ai-studio-guide/step-04.webp',
    title: 'Dán prompt và gửi',
    description: 'Dán prompt của nhánh đã chọn rồi bấm nút mũi tên gửi.',
  },
  {
    image: '/assets/ai-studio-guide/step-05.webp',
    title: 'Chờ AI tạo ứng dụng',
    description: 'Giữ nguyên trang trong lúc AI đang tạo bản đầu tiên.',
  },
  {
    image: '/assets/ai-studio-guide/step-06.webp',
    title: 'Mở Preview và bấm thử',
    description: 'Nhập dữ liệu mẫu, bấm các nút và quan sát kết quả.',
  },
  {
    image: '/assets/ai-studio-guide/step-07.webp',
    title: 'Yêu cầu AI chỉnh sửa',
    description: 'Nhập một yêu cầu sửa ngắn ở ô chat, sau đó kiểm tra lại Preview.',
  },
];

const TECH_SLIDES = [
  ...COMMON_SLIDES,
  {
    image: '/assets/ai-studio-guide/tech-step-04.webp',
    title: 'Dán prompt mô phỏng tưới cây',
    description: 'Dán prompt của nhánh Kỹ thuật rồi bấm nút mũi tên gửi.',
  },
  {
    image: '/assets/ai-studio-guide/tech-step-05.webp',
    title: 'Thử bản mô phỏng đầu tiên',
    description: 'Mở Preview, thay đổi độ ẩm và thử nút máy bơm demo.',
  },
  {
    image: '/assets/ai-studio-guide/tech-step-06.webp',
    title: 'Yêu cầu AI sửa một việc',
    description: 'Nhập yêu cầu đổi tiêu đề và thêm nhãn cảnh báo bản demo.',
  },
  {
    image: '/assets/ai-studio-guide/tech-step-07.webp',
    title: 'Kiểm tra bản đã cập nhật',
    description: 'Mở lại Preview và xác nhận tiêu đề, cảnh báo và các nút vẫn hoạt động.',
  },
];

const GLOSSARY = [
  ['Prompt', 'Câu lệnh cho AI'],
  ['Build', 'Nơi tạo ứng dụng'],
  ['Preview', 'Bản để bấm thử'],
  ['Demo', 'Bản mô phỏng'],
  ['Data', 'Dữ liệu sử dụng'],
];

export default function GuidedPracticeLab({ track }: GuidedPracticeLabProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isResearch = track === 'nckh';
  const slides = isResearch ? NCKH_SLIDES : TECH_SLIDES;
  const revisionPrompt = isResearch
    ? 'Hãy đổi tiêu đề thành “Theo dõi 10 cây đậu”, thêm một nút “Thêm lần đo” và giữ giao diện tiếng Việt, dễ đọc.'
    : 'Hãy đổi tiêu đề thành “Bảng tưới cây mô phỏng”, thêm nhãn “Đây là bản demo” và giữ giao diện tiếng Việt, dễ đọc.';

  const goToSlide = (index: number) => {
    const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
    const slider = sliderRef.current;
    const slide = slider?.querySelectorAll<HTMLElement>('[data-slide]')[nextIndex];
    if (slider && slide) {
      slider.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
      setActiveIndex(nextIndex);
    }
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const slider = event.currentTarget;
    const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-slide]'));
    if (!slides.length) return;

    const nearest = slides.reduce((best, slide, index) => {
      const distance = Math.abs(slide.offsetLeft - slider.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });

    if (nearest.index !== activeIndex) setActiveIndex(nearest.index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') goToSlide(activeIndex - 1);
    if (event.key === 'ArrowRight') goToSlide(activeIndex + 1);
  };

  const copyRevision = async () => {
    await navigator.clipboard.writeText(revisionPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 p-5">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Vuốt để xem từng thao tác</h4>
          <p className="mt-1 text-xs text-slate-500">
            Ảnh thực tế · {isResearch ? 'Nhánh NCKH' : 'Nhánh Công nghệ Kỹ thuật'} · Xem từ ảnh 1 đến ảnh 7.
          </p>
        </div>
        <a
          href="https://aistudio.google.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700"
        >
          Mở Google AI Studio <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="relative p-5">
        <div
          ref={sliderRef}
          role="region"
          aria-label="Slideshow hướng dẫn Google AI Studio"
          tabIndex={0}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          style={{ scrollbarWidth: 'none' }}
        >
          {slides.map((slide, index) => (
            <figure key={slide.image} data-slide className="relative w-full shrink-0 snap-center">
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={slide.image}
                  alt={`Bước ${index + 1}: ${slide.title}`}
                  className="h-full w-full select-none object-contain"
                  draggable={false}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-950/90 font-mono text-sm font-black text-white shadow-lg ring-1 ring-white/20">
                  {index + 1}
                </span>
                {slide.private && (
                  <div className="absolute left-[51%] top-[28%] flex h-[48%] w-[42%] items-center justify-center rounded-xl border border-blue-200 bg-white/95 p-4 text-center shadow-lg">
                    <div>
                      <ShieldCheck className="mx-auto h-7 w-7 text-blue-600" />
                      <strong className="mt-2 block text-xs text-slate-900">Chọn tài khoản của giáo viên</strong>
                      <span className="mt-1 block text-[10px] text-slate-500">Thông tin tài khoản đã được ẩn.</span>
                    </div>
                  </div>
                )}
              </div>
              <figcaption className="flex min-h-24 items-center justify-between gap-4 bg-white p-4 sm:p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Ảnh {index + 1} / {slides.length}</span>
                  <strong className="mt-1 block text-sm text-slate-900 sm:text-base">{slide.title}</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">{slide.description}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label="Xem ảnh trước"
          onClick={() => goToSlide(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="absolute left-7 top-[42%] grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-800 shadow-lg transition hover:bg-white disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Xem ảnh tiếp theo"
          onClick={() => goToSlide(activeIndex + 1)}
          disabled={activeIndex === slides.length - 1}
          className="absolute right-7 top-[42%] grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-800 shadow-lg transition hover:bg-white disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mt-4 flex items-center justify-center gap-2" aria-label={`Đang xem ảnh ${activeIndex + 1} trên ${slides.length}`}>
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Xem ảnh ${index + 1}: ${slide.title}`}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-7 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
        <p className="mt-2 text-center text-[10px] text-slate-400">Vuốt ngang trên điện thoại · Dùng phím ← → trên máy tính</p>
      </div>

      <div className="mx-5 mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[11px] leading-relaxed text-amber-900">
        <strong>Giao diện Google có thể thay đổi.</strong> Hãy tìm các chữ <strong>Get started</strong>, <strong>New app</strong>, <strong>Preview</strong> và ô chat ở bên trái.
      </div>

      <div className="border-t border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-900">Câu lệnh sửa mẫu</p>
          <button type="button" onClick={copyRevision} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-blue-700 hover:border-blue-300">
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Đã sao chép' : 'Sao chép'}
          </button>
        </div>
        <p className="mt-2 rounded-xl border border-slate-200 bg-white p-3 font-mono text-[11px] leading-relaxed text-slate-700">{revisionPrompt}</p>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {GLOSSARY.map(([term, meaning]) => (
            <div key={term} className="rounded-lg border border-slate-200 bg-white p-2.5">
              <strong className="block text-[11px] text-blue-700">{term}</strong>
              <span className="mt-1 block text-[10px] leading-relaxed text-slate-500">{meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
