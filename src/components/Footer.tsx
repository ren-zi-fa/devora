import ThemeToggle from "@/utils/theme";

const footerData = {
  offices: [
    { country: "Germany", address: "Hammer Straße 19, Düsseldorf" },
    { country: "Croatia", address: "Radnicka cesta 47, Zagreb" },
  ],
  links: [
    {
      title: "Explore",
      items: [
        "About us",
        "Services",
        "Work",
        "How we work",
        "Team",
        "Careers",
        "Client testimonials",
        "Contact",
        "Our HQ",
      ],
    },
    {
      title: "Services",
      items: [
        "Software development",
        "Software product design",
        "Product discovery",
      ],
    },
    {
      title: "Expertise",
      items: [
        "Mobile development",
        "Web development",
        "Quality assurance",
        "MVP development",
        "AI-powered apps",
        "Digital transformation",
        "Custom software development",
        "Build-Operate-Transfer (BOT)",
      ],
    },
    {
      title: "Solutions",
      items: ["For enterprises", "For SMEs", "For CTOs", "For consultants"],
    },
    {
      title: "Industries",
      items: [
        "Fintech",
        "Communication",
        "Internet of Things",
        "Transportation & logistics",
        "Healthcare",
        "Other",
      ],
    },
    {
      title: "Resources",
      items: [
        "Engineering hub",
        "Podcast",
        "Guides",
        "Articles",
        "Events",
        "Press kit",
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}

      {/* Main Grid */}
      <div className="mainGrid">
        {/* Offices */}
        <div className="column">
          <h4 className="columnTitle">Offices</h4>
          {footerData.offices.map((office, idx) => (
            <div key={idx} className="officeInfo mb-4">
              <p className="font-semibold">{office.country}</p>
              <p>{office.address}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        {footerData.links.map((section, idx) => (
          <div className="column" key={idx}>
            <h4 className="columnTitle">{section.title}</h4>
            <ul className="linkList">
              {section.items.map((item, i) => (
                <li key={i} className="linkItem">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bottomBar">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="socialLinks justify-center mt-4 items-center">
          <a href="#" aria-label="LinkedIn">
            <svg
              className="socialIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.3h.05c.53-1 1.84-2.3 3.8-2.3 4.06 0 4.8 2.67 4.8 6.1V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.1V24h-4V8z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg
              className="socialIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.56a9.93 9.93 0 0 1-2.82.78A4.92 4.92 0 0 0 23.34 3a9.86 9.86 0 0 1-3.13 1.19 4.92 4.92 0 0 0-8.38 4.48A13.97 13.97 0 0 1 1.67 3.15a4.91 4.91 0 0 0 1.52 6.56A4.92 4.92 0 0 1 .96 9.1v.06a4.92 4.92 0 0 0 3.95 4.82 4.93 4.93 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.87 9.87 0 0 1 0 21.54a13.93 13.93 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.06 10.06 0 0 0 24 4.56z" />
            </svg>
          </a>
        <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
