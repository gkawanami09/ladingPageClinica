import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightSmile Dental Clinic | Free Consultation",
  description:
    "Book your free consultation with BrightSmile Dental Clinic for trusted, modern dental care in a friendly environment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
