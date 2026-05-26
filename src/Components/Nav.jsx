import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

function Nav() {
  const [activeLink, setActiveLink] = useState('#home');

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

  return (
    <header className="sticky top-0">
      <nav className="flex justify-between p-4">
        <a
          href="#home"
          className="text-3xl font-black tracking-normal text-[#233860]"
          onClick={() => setActiveLink('#home')}
        >
          Hellie<span className="text-[#F25C0C]">.</span>
        </a>
        <ul className="flex w-full gap-1 rounded-lg bg-white/80 p-1 sm:w-auto">
          {navItems.map((item) => {
            const isActive = activeLink === item.href;

            return (
              <li key={item.href} className="flex-1 sm:flex-none">
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.href)}
                  className={`block rounded-md px-3 py-2 text-center text-sm font-bold transition ${
                    isActive ? ' text-[#F25C0C] shadow-sm' : 'text-[#233860] hover:bg-[#E7FDF6]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
