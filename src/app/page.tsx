import { Header } from '@/components/Header';
import { MenuTabs } from '@/components/MenuTabs';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SuggestionTool } from '@/components/SuggestionTool';

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <main className="container mx-auto px-4">
        <Header />
        <MenuTabs />
        <SuggestionTool />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
