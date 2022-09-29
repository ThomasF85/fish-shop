import Head from "next/head";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Head>
        <title>Alle Produkte</title>
      </Head>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <ul>
        <li>
          <Link href="/products/guppy">Guppy</Link>
        </li>
        <li>
          <Link href="/products/regenbogenfisch">Regenbogenfisch</Link>
        </li>
      </ul>
    </>
  );
}
