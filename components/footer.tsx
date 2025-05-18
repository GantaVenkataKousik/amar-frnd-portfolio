export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {currentYear} Amarnath Sagala. All rights reserved.</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">AWS Architect | 3X AWS Certified | DevOps Architect</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
