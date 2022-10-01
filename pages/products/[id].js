import Head from "next/head";
import { useRouter } from "next/router";
import ProductForm from "../../components/ProductForm";
import { getAllCategories } from "../../services/categoriesService";
import { getProductById } from "../../services/productService";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await getProductById(id);
  const categories = await getAllCategories();

  return {
    props: { product, categories },
  };
}

export default function Product({ product, categories }) {
  const { name, description, price, category } = product;
  const router = useRouter();

  async function handleSubmit(data) {
    const response = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    await response.json();

    router.reload();
  }

  async function handleDelete() {
    const response = await fetch(`/api/products/${product.id}`, {
      method: "DELETE",
    });
    await response.json();
    router.push("/products");
  }

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
      <h2>Bearbeiten</h2>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        product={product}
      />
      <h2>Löschen</h2>
      <button type="button" onClick={handleDelete}>
        Produkt löschen
      </button>
    </>
  );
}
