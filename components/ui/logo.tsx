import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`} aria-label="AI Solution Konsult">
      <Image src={logo} alt="AI Solution Konsult Logo" width={56} height={42} />
    </Link>
  );
}
