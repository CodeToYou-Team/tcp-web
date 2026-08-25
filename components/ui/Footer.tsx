import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const LOGO_SRC =
  "https://res.cloudinary.com/dkokeszcd/image/upload/w_662,h_148/v1700552958/tcp-web/tcp-full-recolor_hc9iqb.png";

const socialLinkClass =
  "rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:gap-0 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Ir al inicio">
          <Image
            className="h-12 w-auto"
            src={LOGO_SRC}
            alt="Tu Carro Propio"
            width={662}
            height={148}
          />
        </Link>
        <span className="text-sm text-muted-foreground sm:border-l-2 sm:border-border sm:pl-4">
          © Tu Carro Propio J50149900-4
        </span>
        <span className="inline-flex items-center justify-center gap-3">
          <a
            aria-label="WhatsApp de Tu Carro Propio"
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.link/07ixay"
            className={socialLinkClass}
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <a
            aria-label="TikTok de Tu Carro Propio"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/@tucarropropio?lang=es"
            className={socialLinkClass}
          >
            <svg
              aria-hidden="true"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
            </svg>
          </a>
          <a
            aria-label="Instagram de Tu Carro Propio"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/tucarropropio/?hl=es-la"
            className={socialLinkClass}
          >
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
