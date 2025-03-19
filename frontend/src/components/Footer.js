import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Telemedicine", href: "#" },
        { name: "Lab Tests", href: "#" },
        { name: "Health Records", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Youtube />, href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href}>
                {social.icon}
              </a>
            ))}
          </div>
          <p className="footer-text">© 2024 HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
