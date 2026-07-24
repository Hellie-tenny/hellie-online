import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

function Nav() {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + 120;
      const currentItem = navItems
        .map((item) => ({
          ...item,
          section: document.querySelector(item.href),
        }))
        .filter((item) => item.section)
        .reverse()
        .find((item) => item.section.offsetTop <= scrollPosition);

      setActiveLink(currentItem?.href || '#home');
    };

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);

    return () => {
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-[#233860]/10 bg-[#E7FDF6]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-xl font-bold text-[#233860]"
          onClick={() => handleLinkClick('#home')}
        >
          Hellie<span className="text-[#F25C0C]">.</span>
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => {
            const isActive = activeLink === item.href;

            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative block py-1 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#233860]' : 'text-[#233860]/50 hover:text-[#F25C0C]'
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#F25C0C]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="text-2xl text-[#233860] sm:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#233860]/10 sm:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`block px-4 py-3 text-sm font-medium ${
                    activeLink === item.href ? 'text-[#F25C0C]' : 'text-[#233860]/70'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav;
