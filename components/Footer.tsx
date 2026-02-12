import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <Image src="/images/logo.png" alt="REAE" width={100} height={33} className="brightness-0 invert mb-1" />
          </div>

          <div className="text-center md:text-right space-y-2">
            <div>
              <a
                href="mailto:hello@getreae.com"
                className="text-slate-400 hover:text-white transition-colors text-sm block"
              >
                hello@getreae.com
              </a>
            </div>
            <div>
              <a
                href="tel:865-409-1887"
                className="text-slate-400 hover:text-white transition-colors text-sm block"
              >
                865-409-1887
              </a>
            </div>
            <address className="not-italic text-slate-400 text-sm">
              174 1st St NE, Suite 1<br />
              Cleveland, TN 37311
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-slate-500">
          <span>&copy; {new Date().getFullYear()} REAE. A service of Blue Bison Digital LLC. All rights reserved.</span>
          <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
