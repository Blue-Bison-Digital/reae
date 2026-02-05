export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight mb-1">REAE</p>
            <p className="text-slate-400 text-sm">
              Real Estate Appointment Engine (REAE)
            </p>
          </div>

          <div className="text-center md:text-right">
            <a
              href="mailto:hello@getreae.com"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              hello@getreae.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} REAE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
