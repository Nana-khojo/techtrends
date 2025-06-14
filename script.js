const username = localStorage.getItem("username");
const display = document.getElementById("displayUsername");

const posts = [
    {
        title: "AI Tools Every Developer Should Know",
        image: "https://via.placehoder.com/300x180?text=AI+Tools",
        summary: "Explore top AI-powered developer tools transofrming the coding landscape in 2025.",
        link: "#"
    },
    {
        title: "AI Tools Every Developer Should Know",
        image: "https://via.placehoder.com/300x180?text=AI+Tools",
        summary: "Explore top AI-powered developer tools transofrming the coding landscape in 2025.",
        link: "#"
    },
    {
        title: "AI Tools Every Developer Should Know",
        image: "https://via.placehoder.com/300x180?text=AI+Tools",
        summary: "Explore top AI-powered developer tools transofrming the coding landscape in 2025.",
        link: "#"
    }
];

const container = document.getElementById("postContainer");
posts.forEach(post => {
    const postHTML = `
    <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
            img src="${post.image}" class="card-img-top" alt="Post Image">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.summary}</p>
                    <a href=${post.link}" class="btn btn-primary mt-auto">Read More</a>
                </div>
        </div>
    </div>
    `;
    container.innerHTML += postHTML;
});

if (username) {
    display.textContent = username;
}else{
    window.location.href = "login.html"
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    if (username) {
        localStorage.setItem("username", username);
        window.location.href = "blog.html";
    }
}