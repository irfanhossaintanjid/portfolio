import { useState } from 'react';
import { Camera, Calendar, MapPin, TrendingUp, TrendingDown, Dumbbell, Clock, Flame, CheckCircle, Layers, Plus } from 'lucide-react';

export default function ProjectPreview({ project, className = '' }) {
  const [imageError, setImageError] = useState(false);
  const { previewType, title, image } = project;

  // If a real image exists and hasn't errored out, render it with fallback to UI Mockup
  if (image && !imageError) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[var(--color-bg-secondary)] ${className}`}>
        <img
          src={image}
          alt={`${title} project preview`}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 via-transparent to-transparent pointer-events-none"></div>
      </div>
    );
  }

  // Otherwise, render a custom CSS-based UI composition matching the project's category
  return (
    <div className={`relative w-full h-full overflow-hidden p-5 sm:p-6 flex flex-col justify-between font-sans select-none bg-gradient-to-br from-[var(--color-bg-secondary)] via-[var(--color-surface)] to-[var(--color-bg)] ${className}`}>
      
      {/* Background Blueprint Grid Accent */}
      <div className="absolute inset-0 architect-grid opacity-30 pointer-events-none"></div>

      {previewType === 'framio' && <FramioMockup />}
      {previewType === 'bazardor' && <BazarDorMockup />}
      {previewType === 'fitlog' && <FitLogMockup />}
      {previewType === 'devstack' && <DevStackMockup />}

      {/* Blueprint Corner Watermark */}
      <div className="absolute bottom-2.5 right-3 font-mono text-[9px] text-[var(--color-text-muted)] tracking-wider">
        UI_ARCH // {title.toUpperCase()}
      </div>
    </div>
  );
}

// 1. Framio: Creative Studio Booking Interface Mockup
function FramioMockup() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-3">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)] text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-[var(--color-text-primary)] block text-xs">Aperture Stage A</span>
            <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1 font-mono">
              <MapPin className="w-2.5 h-2.5" /> Cyclorama Wall & Overhead Grid
            </span>
          </div>
        </div>
        <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          $85/hr
        </span>
      </div>

      {/* Simulated Time Slot & Booking UI */}
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="p-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] text-center">
          <span className="text-[var(--color-text-muted)] block text-[9px]">10:00 - 14:00</span>
          <span className="text-emerald-400 font-semibold">Available</span>
        </div>
        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center shadow-inner">
          <span className="text-blue-300 block text-[9px]">14:00 - 18:00</span>
          <span className="text-blue-400 font-semibold">Selected Slot</span>
        </div>
        <div className="p-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] text-center opacity-50">
          <span className="text-[var(--color-text-muted)] block text-[9px]">18:00 - 22:00</span>
          <span className="text-rose-400 font-semibold">Reserved</span>
        </div>
      </div>

      {/* Feature Badges & Booking CTA Strip */}
      <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border-subtle)]">
        <div className="flex gap-1.5 text-[10px] font-mono text-[var(--color-text-muted)]">
          <span className="px-1.5 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">Soundproof</span>
          <span className="px-1.5 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">3-Phase Power</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>Confirm Booking</span>
        </div>
      </div>
    </div>
  );
}

// 2. BazarDor: Commodity Market Intelligence & Bengali Price Tracker Mockup
function BazarDorMockup() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-3">
      {/* Price Ticker Strip */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)] text-xs">
        <span className="font-mono text-[10px] text-[var(--color-secondary-accent)] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          লাইভ বাজারদর // LIVE TICKER
        </span>
        <span className="font-mono text-[10px] text-[var(--color-text-muted)]">ঢাকা বিভাগ</span>
      </div>

      {/* Price Cards Grid with Bengali Typography */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-[var(--color-text-primary)]">নাজিরশাইল চাল</span>
            <span className="text-[10px] text-emerald-400 flex items-center font-mono font-semibold">
              <TrendingUp className="w-3 h-3 mr-0.5" /> ▲ ২.১%
            </span>
          </div>
          <span className="font-mono text-sm font-extrabold text-[var(--color-text-primary)] block">৮৪ টাকা <span className="text-[10px] font-normal text-[var(--color-text-muted)]">/ কেজি</span></span>
        </div>

        <div className="p-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-[var(--color-text-primary)]">দেশি পেঁয়াজ</span>
            <span className="text-[10px] text-rose-400 flex items-center font-mono font-semibold">
              <TrendingDown className="w-3 h-3 mr-0.5" /> ▼ ৩.৫%
            </span>
          </div>
          <span className="font-mono text-sm font-extrabold text-[var(--color-text-primary)] block">৯৫ টাকা <span className="text-[10px] font-normal text-[var(--color-text-muted)]">/ কেজি</span></span>
        </div>
      </div>

      {/* Market Comparison Strip */}
      <div className="p-2 rounded-xl bg-[var(--color-bg)]/80 border border-[var(--color-border-subtle)] flex items-center justify-between text-[10px] font-mono">
        <span className="text-[var(--color-text-muted)]">কারওয়ান বাজার: ৳৮২</span>
        <span className="text-[var(--color-text-muted)]">মোহাম্মদপুর: ৳৮৪</span>
        <span className="text-sky-400 font-semibold">গড় দাম: ৳৮৩</span>
      </div>
    </div>
  );
}

// 3. FitLog: Workout Planner & Progress Tracker Mockup
function FitLogMockup() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-3">
      {/* Session Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)] text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
            <Dumbbell className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-[var(--color-text-primary)] block text-xs">Today's Routine</span>
            <span className="text-[10px] font-mono text-[var(--color-secondary-accent)]">Chest & Triceps Focus</span>
          </div>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">
          4 / 5 EXERCISES
        </span>
      </div>

      {/* Routine Item List */}
      <div className="space-y-1.5 text-xs">
        <div className="p-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-[var(--color-text-primary)] text-xs">Barbell Bench Press</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--color-text-muted)]">4 sets × 8 reps</span>
        </div>

        <div className="p-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-[var(--color-text-primary)] text-xs">Incline DB Press</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--color-text-muted)]">3 sets × 10 reps</span>
        </div>
      </div>

      {/* Session Telemetry Footer */}
      <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-sky-400" /> 48 MINS
        </span>
        <span className="flex items-center gap-1">
          <Flame className="w-3 h-3 text-amber-400" /> 380 KCAL
        </span>
        <span className="text-emerald-400 font-bold">ON TARGET</span>
      </div>
    </div>
  );
}

// 4. DevStack: Developer Tooling & Architecture Configurator Mockup
function DevStackMockup() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)] text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-[var(--color-text-primary)] block text-xs">Architecture Canvas</span>
            <span className="text-[10px] font-mono text-[var(--color-text-muted)]">Full-Stack Blueprint</span>
          </div>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
          COMPATIBLE
        </span>
      </div>

      {/* Active Stack Blocks */}
      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
        <div className="p-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
          <span className="text-[var(--color-text-muted)] block text-[9px]">Frontend</span>
          <span className="text-sky-400 font-bold">React + Vite</span>
        </div>
        <div className="p-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
          <span className="text-[var(--color-text-muted)] block text-[9px]">Styling</span>
          <span className="text-teal-400 font-bold">Tailwind CSS</span>
        </div>
        <div className="p-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
          <span className="text-[var(--color-text-muted)] block text-[9px]">Type Engine</span>
          <span className="text-blue-400 font-bold">TypeScript</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[10px] font-mono">
        <span className="text-[var(--color-text-muted)] flex items-center gap-1">
          <Plus className="w-3 h-3 text-indigo-400" /> 4 Tools Active
        </span>
        <span className="text-sky-400 font-semibold">Generate Config →</span>
      </div>
    </div>
  );
}
