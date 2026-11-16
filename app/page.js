import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CSCI 331 Next.js</h1>
      <ul>
        <li>
          <Link href="/count">Counters</Link>
        </li>
        <li>
          <Link href="/githublink">GitHub</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
      </ul>
    </main>
  );
}
