import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#101A14] text-[#A9B39E] py-10 border-t border-[#24352A]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🏈 THE GRIDIRON GUARDIAN
        </div>

        <p className="text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          THE GRIDIRON GUARDIAN is a digital coaching resource for youth
          flag football. It is designed to help volunteer coaches and
          youth instructors organize practices and game days. It does not
          constitute professional sports certification, medical advice, or
          official league compliance. Always follow your league's specific
          rules and safety guidelines.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a
            href="mailto:support@gridironguardian.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-xs text-[#7C8877]">
          <p>
            © 2025 The Gridiron Guardian — All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}
