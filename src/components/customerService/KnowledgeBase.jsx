// src/components/customerService/KnowledgeBase.js

import React, { useState, useEffect } from "react";

const KnowledgeBase = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/knowledge-base-articles");
        const data = await response.json();
        setArticles(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching knowledge base articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="knowledge-base">
      <h2>Knowledge Base</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display knowledge base articles here */}
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <a href={article.link}>{article.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;