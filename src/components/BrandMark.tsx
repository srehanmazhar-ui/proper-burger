import Image from "next/image";

type Props = {
  className?: string;
  variant?: "classic" | "premium";
};

export function BrandMark({ className = "", variant = "premium" }: Props) {
  return (
    <Image
      className={`brand-mark ${className}`.trim()}
      src={`/images/proper-burger-logo-${variant}.svg`}
      alt=""
      width={320}
      height={56}
      priority
    />
  );
}
