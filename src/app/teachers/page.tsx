import React from "react";
import Link from "next/link";
export default function Teachers() {

    return (
        <div>
        <h1>Nama Guru</h1>
        <br />
        <Link href="/teachers/Budi">Budi</Link>
        <br />
        <Link href="/teachers/Rahmat">Rahmat</Link>
        </div>
    );
}