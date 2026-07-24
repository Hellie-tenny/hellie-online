import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMailUnreadSharp } from 'react-icons/io5';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/iamhellie/', icon: FaFacebook },
  { label: 'GitHub', href: 'https://github.com/Hellie-tenny/', icon: FaGithub },
  { label: 'X (Twitter)', href: 'https://x.com/Hellietennyson', icon: BsTwitterX },
  { label: 'Email', href: 'mailto:hellingsmakondetsa@gmail.com', icon: IoMailUnreadSharp },
];

function Footer() {
  return (
    <footer className="border-t border-[#233860]/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
        <span className="text-lg font-bold text-[#233860]">
          Hellie<span className="text-[#F25C0C]">.</span>
        </span>
        <div className="flex gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-[#233860]/60 transition hover:text-[#F25C0C]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <span className="text-sm text-[#233860]/50">&copy; {new Date().getFullYear()} Hellings Makondetsa</span>
      </div>
    </footer>
  );
}

export default Footer;
