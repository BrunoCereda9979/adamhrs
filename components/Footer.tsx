import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/config";
import { COMPANY_LINKS } from "@/config";
import {
  TiPhoneOutline,
  TiMail,
  TiMap,
  TiPinOutline,
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialGooglePlusCircular,
} from "react-icons/ti";
import QuillIconWhite from "../public/quill-white.png";

const Footer = () => {
  return (
    <section className="flex flex-col justify-between items-start gap-5 bg-green-90 lg:gap-5 md:gap-5 text-slate-50 p-10 lg:flex-row lg:justify-around md:flex-row">
      <div className="flex flex-col gap-2 h-full">
        <div className="flex gap-2">
          <Image src={QuillIconWhite} alt="Logo" width={23} height={20} />
          <h3 className="text-xl font-bold pb-1">Adam HRS</h3>
        </div>
        <div className="flex flex-row items-center">
          <TiPinOutline size={18} />
          <p className="text-slate-400 px-1">100 Brandywine Ln, NC, 27804</p>
        </div>
        <div className="flex flex-row items-center">
          <TiMail size={18} />
          <p className="text-slate-400 px-1">example@adamhrs.com</p>
        </div>
        <div className="flex flex-row items-center">
          <TiPhoneOutline size={18} />
          <p className="text-slate-400 px-1">+1 252 255 9256</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-blue-70">Sections</h3>
        <ul className="flex flex-col h-full gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              className="text-slate-400 regular-16 cursor-pointer transition-all hover:font-bold"
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-blue-70">Company</h3>
        <ul className="flex flex-col h-full gap-2 lg:flex">
          {COMPANY_LINKS.map((link) => (
            <Link
              className="text-slate-400 regular-16 cursor-pointer transition-all hover:font-bold"
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="h-full">
        <h3 className="text-xl font-bold mb-3 text-blue-70">Get in touch</h3>
        <div className="flex gap-1">
          <TiSocialFacebookCircular size={30} />
          <TiSocialInstagramCircular size={30} />
          <TiSocialGooglePlusCircular size={30} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
