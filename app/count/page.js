import Link from "next/link";
import Counter from "../components/Counter";

export default function Count() {
  return (
    <main>
      <h1>Counters</h1>
      <Counter name="Counter 1" step={1} color="lightblue" />
      <Counter name="Counter 2" step={2} color="lightgreen" />
      <Link href="/">Back home</Link>
    </main>
  );
}
