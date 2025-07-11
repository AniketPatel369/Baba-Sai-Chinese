import { Header } from '@/components/Header';
import { MenuTabs } from '@/components/MenuTabs';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <main className="container mx-auto px-4 pb-16">
        <Header />
        <MenuTabs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
