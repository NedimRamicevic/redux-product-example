"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../app/reducer";
const inter = Inter({ subsets: ["latin"] });

const store = createStore(reducer);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row gap-4 m-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/favorites">Favorites</Link>
        </div>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
