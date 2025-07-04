import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
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
      const offsetTop = element.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsSidebarOpen(false);
  };

  const navItems = [
    { id: "home", label: "/home" },
    { id: "about", label: "/about" },
    { id: "experience", label: "/experience" },
    { id: "education", label: "/education" },
    { id: "contact", label: "/contact" }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-card border border-border rounded-lg p-2 hover:bg-primary/10 transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}>
        <div className="flex flex-col h-full p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary font-mono">Navigation</h2>
          </div>
          
          <div className="flex-1 space-y-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? "bg-primary/20 text-primary border-l-4 border-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <span className="font-mono text-sm">{label}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-auto pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              © 2025 Personal Resume
            </p>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
