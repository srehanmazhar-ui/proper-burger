import Image from "next/image";

type Props = {
  className?: string;
  variant?: "classic" | "premium";
};

export function BrandMark({ className = "" }: Props) {
  return (
    <Image
      className={`brand-mark ${className}`.trim()}
      src="/images/proper-burger-logo-storefront.png"
      alt=""
      width={2005}
      height={238}
      priority
    />
  );
}
