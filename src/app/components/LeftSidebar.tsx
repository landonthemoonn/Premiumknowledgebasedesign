import { Monitor, Wifi, HardDrive, Wrench, AlertCircle, FileText } from "lucide-react";

const categories = [
  { icon: Monitor, label: "Display & Color", count: 12, active: true },
  { icon: HardDrive, label: "Hardware Setup", count: 8 },
  { icon: Wifi, label: "Network & Connectivity", count: 15 },
  { icon: Wrench, label: "Software Configuration", count: 24 },
  { icon: AlertCircle, label: "Troubleshooting", count: 18 },
];

const recentArticles = [
  { title: "Calibrate an iMac Pro Display", category: "Display & Color", active: true },
  { title: "Configure Color Profile for Photography", category: "Display & Color" },
  { title: "Resolve Display Flickering Issues", category: "Troubleshooting" },
  { title: "Set Up Dual Monitor Workflow", category: "Display & Color" },
  { title: "Install macOS on New Machines", category: "Software Configuration" },
];

export function LeftSidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-black/10 flex flex-col overflow-hidden">
      <div className="p-6 border-b border-black/10">
        <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
          CATEGORIES
        </h2>
        <div className="space-y-0.5">
          {categories.map((category) => (
            <button
              key={category.label}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 transition-all ${
                category.active
                  ? "bg-black text-white"
                  : "text-black/70 hover:bg-black/5 hover:text-black"
              }`}
            >
              <category.icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
              <span className="text-xs flex-1 text-left" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {category.label}
              </span>
              <span className={`text-[10px] font-mono ${category.active ? "text-white/60" : "text-black/40"}`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
          RECENT
        </h2>
        <div className="space-y-0.5">
          {recentArticles.map((article, index) => (
            <button
              key={index}
              className={`w-full text-left px-2.5 py-2.5 transition-all ${
                article.active
                  ? "bg-[#FF6B35] text-white"
                  : "hover:bg-black/5"
              }`}
            >
              <div className="flex items-start gap-2">
                <FileText className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                  article.active ? "text-white/80" : "text-black/40"
                }`} strokeWidth={2} />
                <div className="flex-1 min-w-0">
                  <div className={`text-xs leading-snug mb-1 ${
                    article.active ? "text-white font-medium" : "text-black"
                  }`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {article.title}
                  </div>
                  <div className={`text-[10px] uppercase tracking-wide ${
                    article.active ? "text-white/60" : "text-black/50"
                  }`} style={{ fontFamily: 'Space Mono, monospace' }}>
                    {article.category}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
