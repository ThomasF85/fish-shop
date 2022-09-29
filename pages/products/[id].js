import Head from "next/head";
import { getProductById } from "../../services/productService";

export function getServerSideProps(context) {
  const { id } = context.params;
  const product = getProductById(id);

  return {
    props: {
      name: product.name,
      description: product.description,
      price: product.price,
    },
  };
}

export default function Product({ name, description, price }) {
  return (
    <>
      <Head>
        <title>{`Product: ${name}`}</title>
      </Head>
      <h1>Produkt: {name}</h1>
      <h2>Beschreibung</h2>
      <p>{description}</p>
      <p>Preis: {price} €</p>
    </>
  );
}
