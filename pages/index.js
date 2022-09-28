import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fish Shop Admin</title>
      </Head>
      <h1>Fish Shop</h1>
      <p>Ship Admin Oberfläche</p>
      <Image
        src="https://unsplash.com/photos/9y7y26C-l4Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5MjcwNjYw&force=true&w=2400"
        alt="Schöne Fische"
        layout="responsive"
        width={2400}
        height={1800}
      />
    </>
  );
}
