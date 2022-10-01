import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllProducts } from "../../services/productService";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  const router = useRouter();

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
      <button type="button" onClick={() => router.push("/products/create")}>
        add a new product
      </button>
    </>
  );
}
