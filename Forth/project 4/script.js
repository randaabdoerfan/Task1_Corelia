const data = {
    projects: [
        {
            title: "Responsive Resume Website",
            description: "As a user, I want to see a single-page resume site that works on all devices.",
            acceptance: [
                "Includes sections: bio, skills, contact",
                "Uses Flexbox or Grid",
                "Fully responsive"
            ],
            img: "./img/project1.png",
        },
        {
            title: "Landing Page Clone",
            description: "As a developer, I want to clone a famous landing page to learn layout techniques.",
            acceptance: [
                "Looks visually similar to reference",
                "Mobile responsive",
                "Clean, organized HTML/CSS",
                "Use at least 3 Bootstrap components",
                "Page must be responsive",
                "Components must be properly aligned"
            ],
            img: "./img/project2.png",
        },
        {
            title: "Product Showcase Page",
            description: "As a user, I want to browse a page that displays products attractively so I can choose what I like.",
            acceptance: [
                "Cards with images, title, and price",
                "Add to cart or view more button",
                "Responsive layout"
            ],
            img: "./img/project3.png",
        }, 
        {
            title: "Digital Library (MERN)",
            description: "A MERN stack web app for managing and reading digital books.",
            acceptance: ["have account",
                "Read books ,borrow and buy them ",
                "Dark mode",
            ],
            img: "./img/project4.png",
        },
        {
            title: "Personal Portfolio",
            description: "Responsive personal portfolio showcasing skills and projects.",
            acceptance: ["Dynamic Portfolio",
                "projects and tasks",
                "screen shots from projects"
            ],
            img: "./img/project6.png",
        },
        {
            title: "Restaurant Webpage",
            description: "Collection of HTML, CSS, and JavaScript UI components.",
            acceptance: [ "Has nav, main content, and footer",
                "Responsive across devices",
                "Dynamic Content"],
            img: "./img/project5.png",
        }
    ],
    tasks: [
        {
            title: "Create Bootstrap Components",
            userStory: "As a frontend developer, I want to use Bootstrap components to build responsive UI so that I can develop modern web interfaces faster.",
            acceptance: [
                "Use at least 3 Bootstrap components",
                "Page must be responsive",
                "Components must be properly aligned"
            ],
            img: "./img/task1.png",
        },
        {
            title: "Build Semantic HTML Page",
            userStory: "As a beginner, I want to create a personal webpage using semantic HTML tags, so that my content is structured and accessible.",
            acceptance: [
                "Use semantic tags like header, main, footer, article, and section",
                "Include at least 3 sections",
                "Content must be meaningful"
            ],
            img: "./img/task2.png",
        },
        {
            title: "Rebuild Layout with Flexbox/Grid",
            userStory: "As a developer, I want to convert an HTML layout into a responsive layout using Flexbox or Grid.",
            acceptance: [
                "Uses Flexbox or Grid for layout",
                "Mobile responsive",
                "No overlapping content"
            ],
            img: "./img/task3.png",
        },
        {
            title: "Push Code and Deploy",
            userStory: "As a developer, I want to deploy my project using GitHub and Vercel so others can view my work live.",
            acceptance: [
                "Git repo created and committed",
                "Project deployed on Vercel",
                "Live link is shared"
            ],
            img: "./img/task4.png",
        }
    ]
};


// Render Projects
const projectList = document.getElementById("projectList");
data.projects.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");

    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${proj.img}" alt="${proj.title}" class="portfolio-img">
        </div>
        <div class="card-content">
            <h3>${proj.title}</h3>
            <p class="desc"><strong>User Story:</strong> ${proj.description}</p>
            <p><strong>Acceptance Criteria:</strong></p>
            <ul>${proj.acceptance.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
    `;
    projectList.appendChild(card);
});

// Render only web-related tasks
const taskList = document.getElementById("taskList");
const webTasks = data.tasks.filter(task => 
    task.userStory.toLowerCase().includes("web") || 
    task.title.toLowerCase().includes("html") || 
    task.title.toLowerCase().includes("bootstrap") || 
    task.title.toLowerCase().includes("flexbox") || 
    task.title.toLowerCase().includes("grid")
);

webTasks.forEach(task => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");

    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${task.img}" alt="${task.title}" class="portfolio-img">
        </div>
        <div class="card-content">
            <h3>${task.title}</h3>
            <p class="desc"><strong>User Story:</strong> ${task.userStory}</p>
            <p><strong>Acceptance Criteria:</strong></p>
            <ul>${task.acceptance.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
    `;
    taskList.appendChild(card);
});



// Style all images in projects + tasks
const portfolioImages = document.querySelectorAll('#projectList img, #taskList img');

portfolioImages.forEach(img => {
    img.style.width = "100%";
    img.style.maxWidth = "300px";
    img.style.height = "250px"
    img.style.height = "auto";
    img.style.borderRadius = "13%";
    img.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    img.style.objectFit = "cover";
    img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    img.addEventListener('mouseenter', () => {
        img.style.transform = "scale(1.05)";
        img.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = "scale(1)";
        img.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    });
});


// Select all cards
const cards = document.querySelectorAll('.card');

function revealOnScroll() {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
