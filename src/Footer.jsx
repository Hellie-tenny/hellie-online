import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMailUnreadSharp } from 'react-icons/io5';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/iamhellie/',
    icon: FaFacebook,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Hellie-tenny/',
    icon: FaGithub,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Hellietennyson',
    icon: BsTwitterX,
  },
  {
    label: 'Email',
    href: 'mailto:hellingsmakondetsa@gmail.com',
    icon: IoMailUnreadSharp,
  },
];

function Footer() {
  return (
    <footer className="bg-black p-4">
      <span className="block text-2xl font-bold text-[#E7FDF6]">
        Hellie<span className="text-[#F25C0C]">.</span>
      </span>
      <div className="my-5 flex gap-5">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="text-[#E7FDF6] transition hover:text-[#F25C0C]"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <span className="block text-center text-[#E7FDF6]">&copy; {new Date().getFullYear()} Hellings Makondetsa</span>
    </footer>
  );
}

export default Footer;
