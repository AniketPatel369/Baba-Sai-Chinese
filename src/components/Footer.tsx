import { GPayIcon } from "./icons/GPayIcon";
import { PaytmIcon } from "./icons/PaytmIcon";
import { PhonePeIcon } from "./icons/PhonePeIcon";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="mt-16 py-8 bg-card border-t">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="mb-8">
          <h3 className="text-xl font-bold font-headline text-primary uppercase tracking-wider">Party Orders Accepted</h3>
          <p className="mt-2">Contact us on WhatsApp for bulk orders and events.</p>
        </div>
        <div className="mb-8">
          <p className="font-semibold text-lg mb-2">WhatsApp:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2">
            <a href="https://wa.me/919898701230" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg">9898701230</a>
            <a href="https://wa.me/918780063939" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg">8780063939</a>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="mb-4 font-semibold text-lg">We Accept:</p>
          <div className="flex justify-center items-center gap-6">
            <GPayIcon className="h-8 w-auto text-foreground" />
            <PhonePeIcon className="h-8 w-auto" />
            <PaytmIcon className="h-8 w-auto" />
          </div>
        </div>
        
        <Separator className="my-6 max-w-sm mx-auto bg-border/50" />

        <p className="text-sm">
          &copy; {new Date().getFullYear()} BABA SAI CHINESE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
