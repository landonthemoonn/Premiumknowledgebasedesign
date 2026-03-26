import { Search, Share2, BookOpen, Clock, Bookmark } from "lucide-react";

export function TopBar() {
  return (
    <div className="h-14 border-b border-black/10 bg-[#FAFAFA] flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>G</span>
          </div>
          <span className="text-xs uppercase tracking-wider font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>GAP STUDIO</span>
        </div>
        <div className="h-4 w-px bg-black/10" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/40" strokeWidth={2} />
          <input
            type="text"
            placeholder="SEARCH"
            className="w-72 h-8 pl-9 pr-3 border border-black/10 bg-white text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-all uppercase tracking-wide"
            style={{ fontFamily: 'Space Mono, monospace' }}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <button className="h-8 px-4 flex items-center gap-2 text-xs text-black/70 hover:text-black hover:bg-black/5 transition-all uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
          <Clock className="w-3.5 h-3.5" strokeWidth={2} />
          HISTORY
        </button>
        <button className="h-8 px-4 flex items-center gap-2 text-xs text-black/70 hover:text-black hover:bg-black/5 transition-all uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
          <Bookmark className="w-3.5 h-3.5" strokeWidth={2} />
          SAVE
        </button>
        <button className="h-8 px-4 flex items-center gap-2 text-xs text-black/70 hover:text-black hover:bg-black/5 transition-all uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
          <Share2 className="w-3.5 h-3.5" strokeWidth={2} />
          SHARE
        </button>
      </div>
    </div>
  );
}
