export const BRANDORAX_LOGO_BLACK = "/PNG/Full logo_colored_Black_BrandoraX.png";
export const BRANDORAX_LOGO_WHITE = "/PNG/Full logo_colored_White_BrandoraX.png";
export const BRANDORAX_ICON = "/PNG/Icon_colored_BrandoraX.png";

export function BrandLogo({
  className = "h-8 w-auto",
  invert = false,
  iconOnly = false,
}: {
  className?: string;
  invert?: boolean;
  iconOnly?: boolean;
}) {
  if (iconOnly) {
    return (
      <img
        src={BRANDORAX_ICON}
        alt="BrandoraX Icon"
        width={400}
        height={400}
        className={className}
      />
    );
  }

  return (
    <img
      src={invert ? BRANDORAX_LOGO_WHITE : BRANDORAX_LOGO_BLACK}
      alt="BrandoraX"
      width={1920}
      height={363}
      className={className}
    />
  );
}
