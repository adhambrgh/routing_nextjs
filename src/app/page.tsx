import React from "react";
import Link from "next/link";   

export default function home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link href="/profile">Profile</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}
