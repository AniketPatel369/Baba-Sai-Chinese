import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { Button } from "./ui/button";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919898701230" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <WhatsAppIcon className="w-full h-full" />
      </div>
    </a>
  );
}
