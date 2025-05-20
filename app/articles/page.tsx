import { getArticles, STRAPI_URL } from '@/lib/strapi';
import Link from 'next/link';
import Image from 'next/image';

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Nos actualités</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => {
          const { id, title, slug, image } = article;
          const imageUrl = image?.formats?.medium?.url || image?.url;

          return (
            <Link key={id} href={`/articles/${slug}`}>
              <div className="border rounded-lg hover:shadow-lg transition">
                {imageUrl && (
                  <Image
                    src={`${STRAPI_URL}${imageUrl}`}
                    alt={title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-4">
                  <h2 className="font-semibold text-lg">{title}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
