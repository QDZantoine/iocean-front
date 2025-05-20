import { Article } from '@/types/types';

export const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

/**
 * Récupère tous les articles publiés
 */
export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${STRAPI_URL}/api/articles?populate=image`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Erreur lors du chargement des articles');
  const data = await res.json();
  return data.data;
}

/**
 * Récupère un article selon le slug
 */
export async function getArticleBySlug(slug: string) {
  const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=image`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('[getArticleBySlug] ❌ HTTP Error:', res.status, errorText);
    throw new Error('Erreur lors du chargement de l’article');
  }
  const data = await res.json();
  return data.data[0];
}

/**
 * Récupère toutes les offres d’emploi
 */
export async function getJobOffers() {
  const res = await fetch(`${STRAPI_URL}/api/job-offers?populate=icon`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Erreur lors du chargement des offres');

  const json = await res.json();
  return json.data; // <-- c’est ce qu’on veut
}
