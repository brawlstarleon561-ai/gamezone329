const news = [
    { title: "Nouveau FPS annoncé !", desc: "Un nouveau jeu de tir futuriste arrive bientôt.", img: "https://picsum.photos/300/200?1" },
    { title: "Leak GTA 6", desc: "Des images du gameplay ont fuité hier soir.", img: "https://picsum.photos/300/200?2" },
    { title: "Elden Ring DLC", desc: "Un DLC massif arrive cet été.", img: "https://picsum.photos/300/200?3" }
];

const container = document.getElementById("news-container");

news.forEach(article => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${article.img}" style="width:100%;border-radius:8px;" />
        <h3>${article.title}</h3>
        <p>${article.desc}</p>
    `;
    container.appendChild(card);
});