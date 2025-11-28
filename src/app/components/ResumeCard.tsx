import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: string[];
  period?: string;
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}: ResumeCardProps) {
  const content = (
    <div className="w-full flex transition-transform duration-200 hover:translate-x-1">
      <div className="flex-none">
        <div className="relative  bg-background border-flora border flex shrink-0 overflow-hidden rounded-full size-12 m-auto ">
          {logoUrl ? (
            <Image
              src={logoUrl as string}
              alt={altText}
              fill
              className="object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center">
              {altText.charAt(0).toLowerCase()}
            </span>
          )}
        </div>
      </div>
      <div className="grow ml-4 items-center flex-col group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              <ChevronRightIcon
                sx={{ fontSize: 16 }}
                className="translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
              />
            </h3>
            {period && (
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            )}
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </div>
        {description && (
          <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
            {description}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block cursor-pointer"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="rounded-lg bg-card text-card-foreground flex">
          {content}
        </div>
      </a>
    );
  }

  return (
    <div className="rounded-lg bg-card text-card-foreground flex">
      {content}
    </div>
  );
}
