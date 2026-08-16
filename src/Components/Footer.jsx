import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMailUnreadSharp } from 'react-icons/io5';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/iamhellie/', icon: FaFacebook },
  { label: 'GitHub', href: 'https://github.com/Hellie-tenny/', icon: FaGithub },
  { label: 'X (Twitter)', href: 'https://x.com/Hellietennyson', icon: BsTwitterX },
  { label: 'Email', href: 'mailto:hellingsmakondetsa@gmail.com', icon: IoMailUnreadSharp },
];

const siteMapLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="mx-4 mb-4 overflow-hidden rounded-3xl bg-[#233860] sm:mx-6 lg:mx-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:px-8 md:flex-row md:justify-between lg:px-10">
        <div className="flex max-w-sm flex-col gap-6">
          <a href="#home" className="text-2xl font-bold text-[#E7FDF6]">
            Hellie<span className="text-[#F25C0C]">.</span>
          </a>

          <p className="text-[#E7FDF6]/70">
            Frontend developer crafting clean, purposeful web experiences &mdash; from concept to
            deployed product.
          </p>

          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7FDF6] text-[#233860] transition hover:bg-[#F25C0C] hover:text-[#E7FDF6]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            {siteMapLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#E7FDF6]/70 transition hover:text-[#E7FDF6]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#F25C0C] px-6 py-3 text-center text-xs font-medium text-[#233860] sm:px-8 lg:px-10">
        &copy; {new Date().getFullYear()} Hellings Makondetsa. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;