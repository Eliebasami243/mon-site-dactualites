document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    const articles = [
        { title: "Titre de l'actualité 1", content: "Contenu de l'actualité 1..." },
        { title: "Titre de l'actualité 2", content: "Contenu de l'actualité 2..." },
        { title: "Titre de l'actualité 3", content: "Contenu de l'actualité 3..." }
    ];

    articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        newsContainer.appendChild(articleElement);
    });
});
