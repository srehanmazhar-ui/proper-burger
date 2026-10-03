type Props = {
  className?: string;
};

export function BrandMark({ className = "" }: Props) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-hidden="true">
      <span>PROP</span>
      <span className="brand-e">
        <i />
        <i />
        <i />
      </span>
      <span>R</span>
      <span className="brand-burger">BURGER</span>
    </span>
  );
}
