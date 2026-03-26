import { TopBar } from "./components/TopBar";
import { LeftSidebar } from "./components/LeftSidebar";
import { ArticleContent } from "./components/ArticleContent";
import { RightNavigation } from "./components/RightNavigation";
import { AIAssistant } from "./components/AIAssistant";

export default function App() {
  return (
    <div className="h-screen w-full bg-[#FAFAFA] flex flex-col overflow-hidden">
      <TopBar />
      <div className="flex-1 flex overflow-hidden">
        <LeftSidebar />
        <ArticleContent />
        <RightNavigation />
      </div>
      <AIAssistant />
    </div>
  );
}