import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      const sections = document.querySelectorAll("section[id]");

      if (atBottom) {
        const last = sections[sections.length - 1];
        setActiveSection(last?.getAttribute("id") || "");
        return;
      }

      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 20, behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  const navItems = [
    { id: "about", label: "/about" },
    { id: "experience", label: "/experience" },
    { id: "education", label: "/education" },
    { id: "when-not-working", label: "/out of office" },
    { id: "contact", label: "/contact" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-card border border-border rounded-lg p-2 hover:bg-muted transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Desktop nav items — positioning handled by parent */}
      <nav className="hidden md:block">
        <div className="space-y-1">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`w-full text-left px-2 py-2 transition-colors duration-150 ${
                activeSection === id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-mono text-sm">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile: fixed overlay */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-background md:hidden transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-4 py-8">
          <div className="space-y-1 pt-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full text-left px-2 py-2 transition-colors duration-150 ${
                  activeSection === id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-mono text-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile overlay backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
