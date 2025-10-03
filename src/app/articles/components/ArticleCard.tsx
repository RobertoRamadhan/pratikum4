// src/app/articles/components/ArticleCard.tsx

interface Article {
  id: number;
  title: string;
  urlImage: string;
  description: string;
  author: string;
  link: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Gambar Artikel */}
      <img 
        src={article.urlImage} 
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      
      {/* Title */}
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600">
          {article.title}
        </h5>
      </a>
      
      {/* Author */}
      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        Oleh: {article.author}
      </p>
      
      {/* Description */}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {article.description}
      </p>
      
      {/* Read More Button */}
      <a 
        href={article.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Baca Selengkapnya
        <svg 
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 14 10"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}