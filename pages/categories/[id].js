import Head from "next/head";
import {
  getAllCategories,
  getCategoryById,
} from "../../services/categoriesService";

export function getStaticPaths() {
  const categories = getAllCategories();
  const ids = categories.map((category) => category.id);

  return {
    paths: ids.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { id } = context.params;
  const category = getCategoryById(id);

  return {
    props: { name: category.name, description: category.description },
  };
}

export default function Category({ name, description }) {
  return (
    <>
      <Head>
        <title>{`Kategorie: ${name}`}</title>
      </Head>
      <h1>Kategorie: {name}</h1>
      <h2>Beschreibung:</h2>
      <p>{description}</p>
    </>
  );
}
