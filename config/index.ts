import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "WorkshopLink - Enhancing Your IEEE Workshop Experience",
    template: `%s | WorkshopLink`,
  },
  description:
    "WorkshopLink is your ultimate platform for enhancing IEEE workshop experiences. Seamlessly manage schedules, engage in real-time interactions, and provide valuable feedback.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "WorkshopLink - Enhancing Your IEEE Workshop Experience",
    description:
      "WorkshopLink is your ultimate platform for enhancing IEEE workshop experiences. Seamlessly manage schedules, engage in real-time interactions, and provide valuable feedback.",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hashenudara", // Replace with your actual handle
    title: "WorkshopLink - Enhancing Your IEEE Workshop Experience",
    description:
      "WorkshopLink is your ultimate platform for enhancing IEEE workshop experiences. Seamlessly manage schedules, engage in real-time interactions, and provide valuable feedback.",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://hashen.xleron.io"), // Replace with your actual website URL
};
