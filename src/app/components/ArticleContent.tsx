import { Clock, User, Tag, CheckCircle2, AlertTriangle, Info, ArrowRight } from "lucide-react";

export function ArticleContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-4xl mx-auto px-16 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-black text-white text-[10px] font-medium uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace' }}>
              DISPLAY & COLOR
            </span>
            <span className="px-3 py-1 border border-[#FF6B35] text-[#FF6B35] text-[10px] font-medium uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace' }}>
              HARDWARE
            </span>
          </div>
          <h1 className="text-6xl text-black mb-6 font-bold tracking-tight leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Calibrate an iMac Pro Display
          </h1>
          <div className="flex items-center gap-8 text-[10px] text-black/60 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" strokeWidth={2} />
              15 MIN READ
            </div>
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" strokeWidth={2} />
              STUDIO TECH TEAM
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" strokeWidth={2} />
              UPDATED 03.12.26
            </div>
          </div>
        </div>

        {/* Overview */}
        <section id="overview" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            01 // OVERVIEW
          </h2>
          <div className="bg-[#FAFAFA] border border-black/10 p-8">
            <p className="text-black leading-relaxed mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              This guide walks you through the complete process of calibrating an iMac Pro display to ensure accurate color reproduction for photography, design, and video editing workflows. Proper calibration is essential for maintaining color consistency across the studio's imaging pipeline.
            </p>
            <p className="text-black leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Display calibration should be performed monthly or whenever color accuracy issues are reported. This process typically takes 15-20 minutes and requires a hardware colorimeter.
            </p>
          </div>
        </section>

        {/* Before You Begin */}
        <section id="before-begin" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            02 // BEFORE YOU BEGIN
          </h2>
          <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 p-8">
            <div className="flex gap-4">
              <AlertTriangle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                  PREREQUISITES
                </h3>
                <ul className="space-y-3 text-sm text-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-[#FF6B35] flex-shrink-0" />
                    <span>X-Rite i1Display Pro colorimeter (available from Tech Equipment room)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-[#FF6B35] flex-shrink-0" />
                    <span>DisplayCAL software installed (pre-configured on studio machines)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-[#FF6B35] flex-shrink-0" />
                    <span>Allow display to warm up for at least 30 minutes before calibration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-[#FF6B35] flex-shrink-0" />
                    <span>Ensure room lighting is consistent with typical working conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section id="quick-summary" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            03 // QUICK SUMMARY
          </h2>
          <div className="border border-black/10 bg-[#FAFAFA] p-8">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-black/50 mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  DURATION
                </div>
                <div className="text-black font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>15-20 min</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-black/50 mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  DIFFICULTY
                </div>
                <div className="text-black font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Intermediate</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-black/50 mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  EQUIPMENT
                </div>
                <div className="text-black font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>X-Rite i1</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-black/50 mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  FREQUENCY
                </div>
                <div className="text-black font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Monthly</div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section id="instructions" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            04 // INSTRUCTIONS
          </h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Prepare the Display",
                content: "Turn on the iMac Pro and allow it to warm up for at least 30 minutes. Disable auto-brightness and Night Shift. Set the display brightness to 100% in System Preferences {">"} Displays."
              },
              {
                step: 2,
                title: "Connect the Colorimeter",
                content: "Connect the X-Rite i1Display Pro to an available USB-C port. The device should be recognized automatically. If prompted, allow system extensions for the colorimeter driver."
              },
              {
                step: 3,
                title: "Launch DisplayCAL",
                content: "Open DisplayCAL from Applications. Select 'X-Rite i1 Display Pro' from the Measurement Instrument dropdown. Choose 'High' precision mode for best results."
              },
              {
                step: 4,
                title: "Configure Target Settings",
                content: "Set the following targets: White Point: D65 (6500K), Gamma: 2.2, Luminance: 120 cd/m². These are standard settings for photography and design work at GAP Studio."
              },
              {
                step: 5,
                title: "Position the Colorimeter",
                content: "Place the colorimeter on the center of the display. Use the counterweight cable to ensure it hangs properly against the screen. Ensure no ambient light is hitting the sensor."
              },
              {
                step: 6,
                title: "Run Calibration",
                content: "Click 'Calibrate & Profile' and wait for the process to complete. This typically takes 10-15 minutes. Do not move the colorimeter or interact with the display during this time."
              },
              {
                step: 7,
                title: "Review Results",
                content: "Once complete, review the calibration report. Look for Delta E values under 1.0 for optimal color accuracy. Save the profile with a descriptive name including the date."
              },
              {
                step: 8,
                title: "Apply Profile",
                content: "The new color profile will be automatically set as the default. Verify in System Preferences {">"} Displays {">"} Color that the new profile is selected and active."
              }
            ].map((step) => (
              <div key={step.step} className="bg-white border border-black/10 p-6 hover:border-black/20 transition-all">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {step.step.toString().padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black mb-2 uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                      {step.title}
                    </h3>
                    <p className="text-black leading-relaxed text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {step.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expected Result */}
        <section id="expected-result" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            05 // EXPECTED RESULT
          </h2>
          <div className="bg-black/5 border border-black/10 p-8">
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                  SUCCESS INDICATORS
                </h3>
                <ul className="space-y-3 text-sm text-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-black flex-shrink-0" />
                    <span>Delta E values below 1.0 across all color patches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-black flex-shrink-0" />
                    <span>Neutral gray tones display without color cast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-black flex-shrink-0" />
                    <span>Luminance reading matches target (120 cd/m²)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-black flex-shrink-0" />
                    <span>Color profile automatically loads on system restart</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            06 // TROUBLESHOOTING
          </h2>
          <div className="space-y-3">
            <details className="bg-white border border-black/10 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-black/5 transition-all flex items-center justify-between">
                <span className="font-medium text-black uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Colorimeter not detected
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-black/40 group-open:rotate-90 transition-transform" strokeWidth={2} />
              </summary>
              <div className="px-6 pb-4 text-sm text-black leading-relaxed border-t border-black/10 pt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Try disconnecting and reconnecting the USB cable. Ensure system extensions are allowed in System Preferences {">"} Security & Privacy. Restart DisplayCAL. If the issue persists, try a different USB-C port or restart the machine.
              </div>
            </details>

            <details className="bg-white border border-black/10 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-black/5 transition-all flex items-center justify-between">
                <span className="font-medium text-black uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                  High Delta E values ({">"}2.0)
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-black/40 group-open:rotate-90 transition-transform" strokeWidth={2} />
              </summary>
              <div className="px-6 pb-4 text-sm text-black leading-relaxed border-t border-black/10 pt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Ensure the display has warmed up for at least 30 minutes. Check that ambient light isn't interfering with the colorimeter sensor. Clean the display screen and sensor lens. Run calibration again with 'Very High' precision mode.
              </div>
            </details>

            <details className="bg-white border border-black/10 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-black/5 transition-all flex items-center justify-between">
                <span className="font-medium text-black uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Calibration fails to complete
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-black/40 group-open:rotate-90 transition-transform" strokeWidth={2} />
              </summary>
              <div className="px-6 pb-4 text-sm text-black leading-relaxed border-t border-black/10 pt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Verify the colorimeter is properly positioned and hasn't moved during the process. Disable screen savers and prevent the display from sleeping. Close unnecessary applications to ensure system resources are available. If using wireless devices, switch to wired connection.
              </div>
            </details>

            <details className="bg-white border border-black/10 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-black/5 transition-all flex items-center justify-between">
                <span className="font-medium text-black uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Profile doesn't persist after restart
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-black/40 group-open:rotate-90 transition-transform" strokeWidth={2} />
              </summary>
              <div className="px-6 pb-4 text-sm text-black leading-relaxed border-t border-black/10 pt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Manually select the profile in System Preferences {">"} Displays {">"} Color and ensure it's checked as the default. Install the profile for all users if multiple accounts are used. Check that the profile file exists in ~/Library/ColorSync/Profiles.
              </div>
            </details>
          </div>
        </section>

        {/* Notes */}
        <section id="notes" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            07 // NOTES
          </h2>
          <div className="bg-black/5 border border-black/10 p-8">
            <div className="flex gap-4">
              <Info className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div className="space-y-4 text-sm text-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <p>
                  <strong className="uppercase text-xs tracking-wide font-bold" style={{ fontFamily: 'Space Mono, monospace' }}>Recalibration Schedule:</strong> Display calibration should be performed monthly as a baseline. More frequent calibration may be needed for color-critical work or if environmental conditions change significantly.
                </p>
                <p>
                  <strong className="uppercase text-xs tracking-wide font-bold" style={{ fontFamily: 'Space Mono, monospace' }}>Equipment Handling:</strong> The X-Rite i1Display Pro colorimeter is a precision instrument. Handle with care and store in its protective case when not in use. Do not expose to direct sunlight or extreme temperatures.
                </p>
                <p>
                  <strong className="uppercase text-xs tracking-wide font-bold" style={{ fontFamily: 'Space Mono, monospace' }}>Profile Naming:</strong> Use the naming convention "iMacPro_[SerialNumber]_[Date]" for easy identification and tracking. Example: "iMacPro_C02XK0L5JG5H_2026-03-12"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Escalation */}
        <section id="escalation" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            08 // ESCALATION
          </h2>
          <div className="bg-white border border-black/10 p-8">
            <p className="text-black leading-relaxed mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              If calibration continues to fail or produces inconsistent results after following all troubleshooting steps, escalate to the Senior Studio Tech team.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-6 text-xs">
                <div className="w-28 text-black/50 flex-shrink-0 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>CONTACT</div>
                <div className="text-black" style={{ fontFamily: 'Space Mono, monospace' }}>studio-tech@gap.com</div>
              </div>
              <div className="flex items-start gap-6 text-xs">
                <div className="w-28 text-black/50 flex-shrink-0 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>SLACK</div>
                <div className="text-black" style={{ fontFamily: 'Space Mono, monospace' }}>#studio-tech-support</div>
              </div>
              <div className="flex items-start gap-6 text-xs">
                <div className="w-28 text-black/50 flex-shrink-0 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>PHONE</div>
                <div className="text-black" style={{ fontFamily: 'Space Mono, monospace' }}>ext. 5500</div>
              </div>
              <div className="flex items-start gap-6 text-xs">
                <div className="w-28 text-black/50 flex-shrink-0 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>PRIORITY</div>
                <div className="text-black" style={{ fontFamily: 'Space Mono, monospace' }}>MEDIUM (4hr SLA)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section id="related" className="mb-16">
          <h2 className="text-[10px] uppercase tracking-widest text-black/50 mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            09 // RELATED ARTICLES
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { title: "Configure Color Profile for Photography Workflow", category: "Display & Color" },
              { title: "Resolve Display Flickering on iMac Pro", category: "Troubleshooting" },
              { title: "Install and Configure DisplayCAL", category: "Software Configuration" },
              { title: "Understanding Color Spaces and Profiles", category: "Display & Color" }
            ].map((article, index) => (
              <button
                key={index}
                className="bg-white border border-black/10 p-6 hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-black font-medium mb-1 group-hover:text-[#FF6B35]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {article.title}
                    </div>
                    <div className="text-[10px] text-black/50 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                      {article.category}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all" strokeWidth={2} />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
