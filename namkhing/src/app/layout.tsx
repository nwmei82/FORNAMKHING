import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/heart.png" type="image/png"></link>
        <title>ANV My LUV</title>
      </head>
      <body>{children}</body>
    </html>
  );
}