import "./globals.css";

export const metadata = {
  title: "CSCI 331 Next.js",
  description: "Counters and a fake store search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
