import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { Button } from "./ui/button";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919898701230" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <Button size="icon" className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg transition-colors">
        <WhatsAppIcon className="w-8 h-8 text-white" />
      </Button>
    </a>
  );
}
