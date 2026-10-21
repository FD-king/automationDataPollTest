import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-800 text-sm font-sans pt-12 pb-8">
      <div className="w-full px-4 sm:px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Brand & Info Column */}
          <div className="w-full md:w-1/3 space-y-4">
            <img
              src={FooterLogo}
              alt="Dev Stack"
              className="h-8 object-contain"
            />
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#github"
                className="font-semibold text-slate-800 hover:text-slate-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#twitter"
                className="font-semibold text-slate-800 hover:text-slate-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="font-semibold text-slate-800 hover:text-slate-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-2/3 flex justify-between sm:justify-end gap-12 md:gap-20">
            {/* Product Column */}
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
                PRODUCT
              </h2>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li>
                  <a
                    href="#home"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
                COMPANY
              </h2>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-slate-800 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
                LEGAL
              </h2>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li>
                  <a
                    href="#privacy-policy"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms-of-service"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-xs">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
