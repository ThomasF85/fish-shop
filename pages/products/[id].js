import Head from "next/head";
import { getProductById } from "../../services/productService";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await getProductById(id);

  return {
    props: { ...product },
  };
}

export default function Product({ name, description, price, category }) {
  return (
    <>
      <Head>
        <title>{`Product: ${name}`}</title>
      </Head>
      <h1>Produkt: {name}</h1>
      <h2>Beschreibung</h2>
      <p>{description}</p>
      <p>Kategorie: {category}</p>
      <p>Preis: {price} €</p>
    </>
  );
}
