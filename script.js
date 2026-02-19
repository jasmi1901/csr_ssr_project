const posts = [
  {title:"🇫🇷 Paris", text:"Visited Eiffel Tower and enjoyed amazing French cuisine."},
  {title:"🇯🇵 Tokyo", text:"Explored technology, anime culture and delicious sushi."},
  {title:"🇸🇪 Stockholm", text:"Beautiful islands, clean streets and peaceful atmosphere."}
];

const app = document.getElementById("app");

// simulate loading
setTimeout(() => {

let html = `<h2>Recent Adventures</h2>`;

posts.forEach(p=>{
  html += `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `;
});

app.innerHTML = html;

},1200);
