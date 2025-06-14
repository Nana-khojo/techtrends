localStorage.clear();

const display = document.getElementById("displayUsername");

const posts = [
    {
        title: "All the news about the transparent tech renaissance",
        image: "/images/game.jpeg",
        summary: "Gadgets, much like fashion, can make style comebacks. For tech: we’ve lived through the ’80s beige keyboards, transitioned to the ’90s with gray and black plastic video game systems plus bright colors for Sony’s Walkman and Nintendo’s Game....",
        link: "https://www.youtube.com/channel/UCRw_I5JWlrgGza9Gvy1dAyA",
        category: "AI"
    },
    {
        title: "WWDC 2025 Recap With iOS 26, macOS Tahoe, and More",
        image: "/images/wwdc2.jpeg",
        summary: "Apple's annual developer conference has come to a close for 2025, and WWDC was packed with announcements right from the start of Monday's keynote. As expected, we got a unified numbering scheme across Apple's platforms, as well as a redesign...",
        link: "https://www.youtube.com/channel/UCRw_I5JWlrgGza9Gvy1dAyA",
        category: "Apple Inc"
    },
    {
        title: "Top 100 Best Budget Buys: Affordable, Tested Tech That's Actually Worth It",
        image: "/images/cheap.jpeg",
        summary: "We're on the precipice of a protracted global trade war, which could reverse a trend most of us have long taken for granted: That, over time, mainstream tech gear tends to get cheaper. Could upend the steady price decreases of everything from jumbo OLED TVs to Wi-Fi 7 routers...",
        link: "https://www.youtube.com/channel/UCRw_I5JWlrgGza9Gvy1dAyA",
        category: "Cheapest Gadgets"
    }
];

const container = document.getElementById("postContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function renderPosts(filteredPosts) {
    container.innerHTML = "";
    filteredPosts.forEach(post => {
        const postHTML = `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${post.image}" class="card-img-top" alt="Post Image">
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
}

renderPosts(posts);

function filterAndRender() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    const filtered = posts.filter(post => {
        const matchText = post.title.toLowerCase().includes(query) || post.summary.toLowerCase().includes(query);
        const matchCategory = selectedCategory === "all" || post.category === selectedCategory;
        return matchText && matchCategory;
    });
    renderPosts(filtered);
}

searchInput.addEventListener("input", () => {
    filterAndRender()
});

categorySelect.addEventListener("change", () => {
    filterAndRender();
});

const userForm = document.getElementById("userLoginForm");
userForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("userUsername").value;
    localStorage.setItem("username", username);
    window.location.href = "index.html";
});

if (username) {
    display.textContent = username;
}else{
    window.location.href = "login.html"
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

const adminForm = document.getElementById("adminLoginForm");
adminForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const adminUser = document.getElementById("adminUsername").value;
    const adminPass = document.getElementById("adminPassword").value;

    if (adminUser === "admin" && adminPass === "admin123"){
        window.location.href = "admin.html";
    }else{
        alert("Invalid Admin Credentials")
    }
});

const form = document.getElementById("adminForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newPost = {
        title: document.getElementById("postTitle").value,
        summary: document.getElementById("postSummary").value,
        image: document.getElementById("postImage").value,
        link: document.getElementById("postLink").value,
        category: document.getElementById("postCategory").value
    };

    let stored = JSON.parse(localStorage.getItem("blogPosts")) || [];
    stored.unshift(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(stored));

    alert("Post submitted successfully");
    form.reset();
});