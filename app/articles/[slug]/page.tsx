export const dynamic = 'force-dynamic';

import { getArticleBySlug, STRAPI_URL } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Article } from '@/types/types';
import RichTextRenderer from '@/components/RichTextRenderer';

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params?.slug) return notFound();

  const article: Article | null = await getArticleBySlug(params.slug);

  if (!article) return notFound();

  const { title, description, image } = article;
  const imageUrl = image?.formats?.medium?.url || image?.url;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      {imageUrl && (
        <Image
          src={`${STRAPI_URL}${imageUrl}`}
          alt={title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
      )}

      <RichTextRenderer blocks={description} />
    </main>
  );
}
