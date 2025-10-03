// src/app/articles/page.tsx

import { getArticles } from './services/getarticles';
import ArticleCard from './components/ArticleCard';

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Daftar Artikel
      </h1>
      
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Tidak ada artikel yang tersedia
        </p>
      )}
    </div>
  );
}