import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, FileText } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: { title: string; category: string }[];
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your knowledge base assistant. I can help you find answers from our technical documentation. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: generateResponse(input),
        sources: [
          { title: "Calibrate an iMac Pro Display", category: "Display & Color" },
          { title: "Configure Color Profile for Photography", category: "Display & Color" },
        ],
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query: string) => {
    // Mock response based on common queries
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("calibrat") || lowerQuery.includes("display") || lowerQuery.includes("color")) {
      return "To calibrate an iMac Pro display, you'll need the X-Rite i1Display Pro colorimeter from the Tech Equipment room. The process takes about 15-20 minutes and should be done monthly. Start by warming up the display for 30 minutes, then launch DisplayCAL and follow the step-by-step process to ensure accurate color reproduction.";
    } else if (lowerQuery.includes("colorimeter") || lowerQuery.includes("equipment")) {
      return "The X-Rite i1Display Pro colorimeter is available from the Tech Equipment room. It's a precision instrument that should be handled with care and stored in its protective case when not in use. Make sure to avoid exposing it to direct sunlight or extreme temperatures.";
    } else if (lowerQuery.includes("troubleshoot") || lowerQuery.includes("problem") || lowerQuery.includes("issue")) {
      return "Common calibration issues include: colorimeter not being detected (try reconnecting USB or restarting), high Delta E values (ensure 30-minute warm-up and check ambient light), calibration failing to complete (disable screen savers and close unnecessary apps), or profiles not persisting after restart (manually select the profile in System Preferences).";
    } else {
      return "I found information related to your question in our knowledge base. Could you provide more specific details about what you're trying to accomplish? I can help with display calibration, hardware setup, network configuration, software installation, and troubleshooting.";
    }
  };

  const exampleQuestions = [
    "How do I calibrate the iMac display?",
    "Where can I find the colorimeter?",
    "What if calibration fails?",
  ];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#FF6B35] text-white hover:bg-[#FF5520] transition-all flex items-center justify-center group z-50 shadow-lg"
        >
          <Sparkles className="w-5 h-5" strokeWidth={2} />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[440px] h-[680px] bg-white border border-black/10 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between bg-[#FAFAFA]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>AI ASSISTANT</div>
                <div className="text-[10px] text-black/60 uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace' }}>KNOWLEDGE BASE</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 border border-black/10 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all"
            >
              <X className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] ${
                    message.role === "user"
                      ? "bg-black text-white p-4"
                      : "bg-[#FAFAFA] text-black border border-black/10 p-4"
                  }`}
                >
                  <div className="text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {message.content}
                  </div>
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-black/10 space-y-2">
                      <div className="text-[10px] text-black/60 mb-3 uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>SOURCES</div>
                      {message.sources.map((source, idx) => (
                        <button
                          key={idx}
                          className="w-full flex items-start gap-2 p-2 hover:bg-white border border-black/10 transition-all text-left group"
                        >
                          <FileText className="w-3.5 h-3.5 text-black/40 mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-black leading-snug font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {source.title}
                            </div>
                            <div className="text-[10px] text-black/50 mt-0.5 uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                              {source.category}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#FAFAFA] border border-black/10 p-4">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="space-y-2">
                <div className="text-[10px] text-black/60 mb-3 uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>SUGGESTIONS</div>
                {exampleQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(question);
                    }}
                    className="w-full text-left px-4 py-3 border border-black/10 hover:border-black hover:bg-black/5 transition-all text-xs group" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-black/10 bg-[#FAFAFA]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="ASK ANYTHING..."
                className="flex-1 px-4 py-3 border border-black/10 bg-white text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-all uppercase tracking-wide"
                style={{ fontFamily: 'Space Mono, monospace' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-11 h-11 bg-[#FF6B35] text-white flex items-center justify-center hover:bg-[#FF5520] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
            <div className="mt-2 text-[10px] text-black/50 text-center uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
              KB SOURCED
            </div>
          </div>
        </div>
      )}
    </>
  );
}
