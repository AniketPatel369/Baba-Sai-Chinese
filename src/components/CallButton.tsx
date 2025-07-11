import { CallIcon } from "./icons/CallIcon";

export function CallButton() {
  return (
    <a
      href="tel:9898701230"
      className="fixed bottom-24 right-6 z-50 group"
      aria-label="Call us"
    >
      <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <CallIcon className="w-full h-full" />
      </div>
    </a>
  );
}
