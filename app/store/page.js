import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function Store() {
  return (
    <main>
      <h1>Store</h1>
      <SearchBar />
      <Link href="/">Back home</Link>
    </main>
  );
}
