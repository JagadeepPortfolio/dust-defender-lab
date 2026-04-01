export default function Footer() {
  return (
    <footer className="bg-[#080808] py-12 md:py-16 px-6 md:px-16 lg:px-24 border-t border-glass-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-text tracking-wide mb-2">
              DUST DEFENDER LAB
            </h3>
            <p className="text-text-muted text-sm font-light">
              Premium Car & Bike Detailing Studio
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Contact
            </h4>
            <div className="space-y-2 text-text-muted text-sm font-light">
              <p>Bhavani Towers, beside Srikara Hospital, LB Nagar, Hyderabad 500074</p>
              <p>
                <a
                  href="tel:+919999999999"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +91 99999 99999
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@dustdefenderlab.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  hello@dustdefenderlab.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Services
            </h4>
            <div className="space-y-2 text-text-muted text-sm font-light">
              <p>Ceramic Coating</p>
              <p>Paint Correction</p>
              <p>Car Detailing</p>
              <p>Bike Detailing</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-light">
            &copy; {new Date().getFullYear()} Dust Defender Lab. All rights reserved.
          </p>
          <p className="text-text-muted/50 text-xs font-light">
            Crafted by{" "}
            <a
              href="https://stitchwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-muted transition-colors duration-300"
            >
              PageStitches
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
