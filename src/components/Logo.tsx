import logo from "@/asset/logo.svg";

type LogoProps = {
  className?: string;
  alt?: string;
};

const Logo = ({
  className = "w-full h-full",
  alt = "Precision Forge",
}: LogoProps) => {
  return <img src={logo} alt={alt} className={`${className} object-contain`} />;
};

export default Logo;
