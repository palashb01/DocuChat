import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteURl(path: string) {
  if (typeof window !== "undefined") {
    return path;
  }
  if (process.env.VERCEL_URl) {
    return `https://${process.env.VERCEL_URL}${path}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function constructMetadata({
  title = "DocuChat",
  description = "Chatting with your documents made easy.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@PalashB_31",
    },
    icons,
    metadataBase: new URL("https://docu-chat-jade.vercel.app"),
    themeColor: "#ffffff",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
