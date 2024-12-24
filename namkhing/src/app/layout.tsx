"use client"
import { useEffect } from "react";
import '../styles/global.css';
import Routing from './router/routing';

export default function RootLayout() {
  useEffect(() => {
    document.title = "ANV My LUV";
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/heart.png" type="image/png"></link>
      </head>
      <body>
        <Routing />
      </body>
    </html>
  );
}
