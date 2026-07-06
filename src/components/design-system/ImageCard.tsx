import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type ImageCardProps = Omit<ImageProps, "className"> & {
  className?: string;
  imageClassName?: string;
};

export default function ImageCard({
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  ...props
}: ImageCardProps) {
  return (
    <div className={cn("image-rounded", className)}>
      <Image
        alt={alt}
        sizes={sizes}
        className={cn("h-full w-full rounded-[1.35rem] object-cover", imageClassName)}
        {...props}
      />
    </div>
  );
}
