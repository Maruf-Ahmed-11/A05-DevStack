import Logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content pt-16 pb-8">
      {/* 1. Full-width border line at the top */}
      <div className="w-full border-t border-base-200 mb-12"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        
        {/* Links & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
                {/* Logo */}
              <div>
                    <img src={Logo} alt="DevStack Logo" className="h-8 cursor-pointer" />
                </div>
            </div>
            <p className="text-base-content/70 text-sm max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-sm font-medium text-base-content/80 pt-2">
              <a href="#github" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral">Product</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li><a href="#home" className="hover:text-neutral transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-neutral transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-neutral transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral">Company</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li><a href="#about" className="hover:text-neutral transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-neutral transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-neutral transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral">Legal</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li><a href="#privacy" className="hover:text-neutral transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-neutral transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* 2. Container-width border line */}
        <div className="border-t border-base-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-base-content/60 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-neutral transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-neutral transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;