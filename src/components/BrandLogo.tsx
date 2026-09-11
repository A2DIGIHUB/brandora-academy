export const BRANDORAX_LOGO_URL =
  "/__l5e/assets-v1/249ae6f4-de83-4b66-aa73-2b0ef3682676/brandorax-logo.png";

export function BrandLogo({ className = "h-8 w-auto", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={BRANDORAX_LOGO_URL}
      alt="BrandoraX"
      width={1920}
      height={363}
      className={`${className} ${invert ? "brightness-0 invert" : ""}`}
    />
  );
}
