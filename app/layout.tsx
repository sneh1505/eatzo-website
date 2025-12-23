import "./globals.css";

export const metadata = {
  title: "Eatzo | A smarter way to eat",
  description: "Order ahead. Skip the wait. Pick up fresh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
