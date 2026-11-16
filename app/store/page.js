import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function Store() {
  return (
    <main>
      <h1>Store</h1>
      <SearchBar />
      {/* TODO: search bar component that filters fakestoreapi.com products */}
      <Link href="/">Back home</Link>
    </main>
  );
}
