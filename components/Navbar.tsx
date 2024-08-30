import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/config";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex flex-row justify-between">
        <p className="text-xl mr-[5px]">
          <span className="mr-[3.5px] text-green-90">Adam</span>
          <span className="font-bold text-xl text-blue-90">HRS</span>
        </p>
        <Image src="./public/quill.png" alt="Logo" width={26} height={25} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Start Free Trial"
          icon=". /user.svg"
          variant="btn_blue"
        />
      </div>
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
      />
    </nav>
  );
};

export default Navbar;
