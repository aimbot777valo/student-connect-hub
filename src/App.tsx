import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Marketplace from "./pages/Marketplace";
import QnA from "./pages/QnA";
import Resources from "./pages/Resources";
import Hostels from "./pages/Hostels";
import Achievements from "./pages/Achievements";
import Announcements from "./pages/Announcements";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
