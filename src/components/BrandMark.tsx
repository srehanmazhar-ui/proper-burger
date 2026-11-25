import Image from "next/image";

type Props = {
  className?: string;
  variant?: "classic" | "premium";
};

export function BrandMark({ className = "" }: Props) {
  return (
    <Image
      className={`brand-mark ${className}`.trim()}
      src="/images/proper-burger-logo-stacked.webp"
      alt=""
      width={520}
      height={256}
      sizes="128px"
      priority
    />
  );
}
