import { cn } from "@/lib/utils";

export type PageHeroVariant = "editorial" | "immersive" | "compact";

export interface PageHeroProps {
  variant?: PageHeroVariant;
  imageSrc: string;
  imageAlt: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  /** Replaces default flex + height for this variant (e.g. `flex h-[75vh] min-h-[520px] items-end`) */
  sectionClassName?: string;
  contentClassName?: string;
}

export const PageHero = ({
  variant = "editorial",
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  children,
  sectionClassName,
  contentClassName,
}: PageHeroProps) => {
  const isImmersive = variant === "immersive";

  const layoutClass =
    sectionClassName ??
    (variant === "editorial"
      ? "flex h-[70vh] min-h-[500px] items-end"
      : variant === "immersive"
        ? "flex min-h-screen items-center justify-center"
        : "flex max-h-[560px] min-h-[380px] items-end justify-center md:min-h-[44vh]");

  return (
    <section className={cn("relative overflow-hidden", layoutClass)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover animate-image-zoom"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-navy/30" />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div
        className={cn(
          "relative w-full",
          isImmersive
            ? "container-wide px-6 pt-20 text-center md:px-10"
            : variant === "compact"
              ? "container-narrow px-6 pb-12 pt-28 text-center md:px-10 md:pb-16 md:pt-32"
              : "container-wide px-6 pb-16 md:px-10 md:pb-20",
          contentClassName,
        )}
      >
        {eyebrow != null && (
          <p
            className={cn(
              "eyebrow mb-3 text-sand/90 tracking-[0.3em]",
              isImmersive && "mb-6 animate-fade-in",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "display-italic text-sand",
            isImmersive &&
              "animate-fade-up text-5xl leading-[0.9] md:text-8xl lg:text-9xl",
            !isImmersive && variant === "editorial" && "max-w-3xl",
            variant === "compact" && "mx-auto max-w-3xl",
          )}
        >
          {title}
        </h1>
        {subtitle != null && (
          <p
            className={cn(
              "mt-6 max-w-xl text-sand/80",
              isImmersive && "mx-auto",
              variant === "compact" && "mx-auto text-sand/85",
            )}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
