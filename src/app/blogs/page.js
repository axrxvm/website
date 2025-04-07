import Header from "@components/blogs/Header";
import Main from "@components/blogs/Main";

export const metadata = {
  title: "Blogs",
  description: "I write english sometimes, do check out for some cool chaotic vibes blogs",
  openGraph: {
    title: "Blogs",
    description: "I write english sometimes, do check out for some cool chaotic vibes blogs",

    images: [
      {
        url: "https://itzaarav.netlify.app/api/og?title=Blogs",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Blogs",
    card: "summary_large_image",
    description: "I write english sometimes, do check out for some cool chaotic vibes blogs",
    images: [
      {
        url: "https://itzaarav.netlify.app/api/og?title=Blogs",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  alternates: { canonical: "https://itzaarav.netlify.app/blogs" },
};

export default () => (
  <section className="max-w-3xl md:mx-auto my-20 mx-4 ">
    <Header />
    <Main />
  </section>
);
