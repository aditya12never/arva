import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARVA MULTIVERSE — Ideas into impact",
  description: "Independent creative studio building identities, digital experiences and moving images.",
  metadataBase: new URL("https://arvamultiverse.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
