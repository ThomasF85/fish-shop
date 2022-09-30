import Head from "next/head";
import Link from "next/link";
import { getAllCategories } from "../../services/categoriesService";

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <Head>
        <title>Alle Kategorien</title>
      </Head>
      <h1>Kategorien</h1>
      <p>Liste aller Kategorien</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
