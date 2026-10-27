import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CompetitionTrack } from '../types';
import { COMPETITION_TRACKS } from '../data/courseData';

interface TrackSelectionScreenProps {
  onSelect: (track: CompetitionTrack) => void;
}

export default function TrackSelectionScreen({ onSelect }: TrackSelectionScreenProps) {
  const tracks: CompetitionTrack[] = ['nckh', 'tech'];

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 text-slate-800 md:grid md:place-items-center md:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-7 flex items-center justify-center gap-2 text-sm font-black tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">V</span>
          <span className="text-slate-900">VibeLab</span>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xs md:p-10">
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
              Bắt đầu lộ trình
            </span>
            <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
              Đề tài của bạn thuộc nhánh nào?
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Chọn một lần để VibeLab hiển thị đúng bài học, checklist và Prompt Generator cho đội của bạn.
            </p>
          </header>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {tracks.map((track) => {
              const info = COMPETITION_TRACKS[track];
              const isResearch = track === 'nckh';

              return (
                <button
                  key={track}
                  type="button"
                  onClick={() => onSelect(track)}
                  className="group rounded-2xl border-2 border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 md:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl">
                      {info.icon}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-blue-600">
                      Chọn nhánh <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <h2 className="mt-5 text-lg font-extrabold text-slate-950 md:text-xl">{info.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {isResearch
                      ? 'Dành cho câu hỏi nghiên cứu, khảo sát, thực nghiệm và phân tích dữ liệu.'
                      : 'Dành cho thiết bị, IoT, robot, hệ thống nhúng và giải pháp phần mềm.'}
                  </p>

                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      {isResearch ? 'Trọng tâm: dữ liệu và phương pháp phân tích' : 'Trọng tâm: mô phỏng và kết nối thiết bị'}
                    </span>
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600" />
                      Có checklist kiểm chứng và an toàn riêng
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-400">
            Bạn có thể mở lại màn hình này bằng nút “Đổi nhánh” trong giao diện học tập.
          </p>
        </section>
      </div>
    </main>
  );
}
