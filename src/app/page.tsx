import React from "react";
import Link from "next/link";   

export default function home() {
  return (
    <div>
      <h1>Selamat datang di sistem portal sekolah</h1>
      <Link href="/teachers">Daftar Guru</Link>
      <br />
      <Link href="/library">Daftar Buku</Link>
      <br />
    </div>
  );
}
