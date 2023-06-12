import Image from "next/image";

interface LogoProps {
  size?: number;
}

const Logo = ({ size = 52 }: LogoProps) => {
  return <Image src="/logo_plain.png" alt="Logo" height={size} width={size} />;
};

export default Logo;
