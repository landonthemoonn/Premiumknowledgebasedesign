import { useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "before-begin", label: "Before You Begin" },
  { id: "quick-summary", label: "Quick Summary" },
  { id: "instructions", label: "Instructions" },
  { id: "expected-result", label: "Expected Result" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "notes", label: "Notes" },
  { id: "escalation", label: "Escalation" },
  { id: "related", label: "Related Articles" },
];

export function RightNavigation() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="w-52 h-screen bg-[#FAFAFA] border-l border-black/10 p-6 sticky top-0 overflow-y-auto">
      <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
        ON THIS PAGE
      </h2>
      <nav className="space-y-0.5">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left text-xs py-1.5 px-2 transition-all ${
              activeSection === section.id
                ? "text-black font-medium bg-black/5"
                : "text-black/60 hover:text-black hover:bg-black/5"
            }`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t border-black/10">
        <div className="text-[10px] text-black/50 mb-3 uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
          METADATA
        </div>
        <div className="space-y-3 text-[10px]" style={{ fontFamily: 'Space Mono, monospace' }}>
          <div>
            <div className="text-black/50 mb-0.5">LAST UPDATED</div>
            <div className="text-black">03.12.26</div>
          </div>
          <div>
            <div className="text-black/50 mb-0.5">VERSION</div>
            <div className="text-black">2.1</div>
          </div>
          <div>
            <div className="text-black/50 mb-0.5">AUTHOR</div>
            <div className="text-black">STUDIO TECH</div>
          </div>
        </div>
      </div>
    </div>
  );
}
