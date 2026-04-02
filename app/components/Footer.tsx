export default function Footer() {
  return (
    <footer className="bg-[#080808] py-12 md:py-16 px-6 md:px-16 lg:px-24 border-t border-glass-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-text tracking-wide mb-2">
              DUST DEFENDER LAB
            </h3>
            <p className="text-text-muted text-sm font-light mb-4">
              Premium Car & Bike Detailing Studio
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", href: "#", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6" },
                { label: "YouTube", href: "#", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58A2.78 2.78 0 003.4 19.6c1.72.44 8.6.44 8.6.44s6.88 0 8.6-.46a2.78 2.78 0 001.94-2c.312-1.732.46-3.49.44-5.54a29.94 29.94 0 00-.44-5.62zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
                { label: "Facebook", href: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-glass-border flex items-center justify-center text-text-muted/50 hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Contact
            </h4>
            <div className="space-y-2 text-text-muted text-sm font-light">
              <p>Bhavani Towers, beside Srikara Hospital, LB Nagar, Hyderabad 500074</p>
              <p>
                <a href="tel:+919999999999" className="hover:text-accent transition-colors duration-300">
                  +91 99999 99999
                </a>
              </p>
              <p>
                <a href="mailto:hello@dustdefenderlab.com" className="hover:text-accent transition-colors duration-300">
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
              <p>Paint Protection Film (PPF)</p>
              <p>Ceramic Coating</p>
              <p>Graphene Coating</p>
              <p>Sunfilm Protection</p>
              <p>Interior Foam Cleaning</p>
              <p>Car Wash & Steam Clean</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-text text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Studio Hours
            </h4>
            <div className="space-y-2 text-text-muted text-sm font-light">
              <div className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-text">10am - 7pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-text">By Appointment</span>
              </div>
            </div>
            <p className="text-text-muted/40 text-xs mt-4 font-light">
              Proudly serving Hyderabad since 2023
            </p>
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
