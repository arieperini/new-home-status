"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface AdBannerProps {
  imageUrl: string;
  altText: string;
  linkUrl: string;
  width?: string;
  height?: string;
}

export default function AdBanner({
  imageUrl,
  altText,
  linkUrl,
  width = "100%",
  height = "auto"
}: AdBannerProps) {
  const imgHeight = height === "auto" ? "200px" : height;

  return (
    <Card className="rounded-none border-none shadow-none overflow-hidden">
      <Link href={linkUrl} className="block relative" style={{ height: imgHeight }}>
        <Image
          src={imageUrl}
          alt={altText}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    </Card>
  );
}
