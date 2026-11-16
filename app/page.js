import Link from "next/link";
import Counter from "./components/Counter";
import GitHub from "./components/GitHub";

export default function Home() {
  return (
    <main>
      <h1>CSCI 331 Next.js</h1>
      <Counter name="Counter 1" step={1} color="lightblue" />
      <Counter name="Counter 2" step={2} color="lightgreen" />
      <hr />
      <GitHub />
      <hr />
      <Link href="/store">Go to the store</Link>
    </main>
  );
}
