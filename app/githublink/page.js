import Link from "next/link";
import GitHub from "../components/GitHub";

export default function GitHubLink() {
  return (
    <main>
      <h1>GitHub</h1>
      <GitHub />
      <Link href="/">Back home</Link>
    </main>
  );
}
