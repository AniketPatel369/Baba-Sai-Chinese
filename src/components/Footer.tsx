import { GPayIcon } from "./icons/GPayIcon";
import { PaytmIcon } from "./icons/PaytmIcon";
import { PhonePeIcon } from "./icons/PhonePeIcon";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="mt-16 py-8 bg-card border-t">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="mb-4">
          <h3 className="text-xl font-bold font-headline text-primary">Party Orders Accepted</h3>
          <p className="mt-2">Contact us on WhatsApp for bulk orders and events.</p>
        </div>
        <div className="mb-6">
          <p className="font-semibold">WhatsApp:</p>
          <a href="https://wa.me/919898701230" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">9898701230</a>
          <a href="https://wa.me/918780063939" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">8780063939</a>
        </div>
        <Separator className="my-6 max-w-xs mx-auto" />
        <div>
          <p className="mb-4 font-semibold">We Accept:</p>
          <div className="flex justify-center items-center gap-6">
            <PaytmIcon className="h-8 w-auto" />
            <GPayIcon className="h-8 w-auto" />
            <PhonePeIcon className="h-10 w-auto" />
          </div>
        </div>
        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} BABA SAI CHINESE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
