import React from "react";
import Link from "next/link";

export default function Library() {
  return (
    <div>
      <Link href="/">Kembali ke beranda</Link>
      <h1>Daftar Buku</h1>
      <h2><Link href="/library/comedy">Komedi</Link></h2>
      <h2><Link href="/library/horror">Horror</Link></h2>
      <h2><Link href="/library/romance">Romance</Link></h2>
    </div>
  );
}
