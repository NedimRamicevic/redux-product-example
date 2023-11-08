"use client";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-row justify-center mt-20 gap-8">
      <div>
        <Link href="/products">Prodcuts</Link>
      </div>
      <div>
        <Link href="/favorites">Favorites</Link>
      </div>
    </div>
  );
}
