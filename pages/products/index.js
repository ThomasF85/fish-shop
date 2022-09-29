import Head from "next/head";
import Link from "next/link";
import { getAllProducts } from "../../services/productService";

export function getServerSideProps() {
  const products = getAllProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Alle Produkte</title>
      </Head>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
