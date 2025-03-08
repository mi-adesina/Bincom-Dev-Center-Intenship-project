
const projects = [
    {
        "title": "Blog Mastery - React App",
        "description": "A modern, multi-page website for promoting the 'Blog Mastery' ebook. Features include a responsive design, dynamic content sections, testimonials, and a call-to-action for downloading the ebook. Built with React, TypeScript, Bootstrap, and Sass for optimal performance and user experience.",
        "tech": ["React", "TypeScript", "Bootstrap", "Sass", "React Router", "Responsive Design"],
        "link": "https://blog-mastery-react-app.vercel.app/"
    },
    {
        "title": "Michael Adesina - Portfolio",
        "description": "A professional portfolio website showcasing my skills as a Front-End Web Developer. Features include an about section, project showcases, a contact form, and a responsive design. Built with modern web technologies to highlight my expertise in HTML, CSS, JavaScript, and React.",
        "tech": ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
        "link": "https://michael-adesina-portfolio.vercel.app/"
    },
    {
        title: "Cash Register App",
        description: "Interactive cash register simulation with change calculation functionality.",
        tech: ["HTML", "CSS", "JavaScript", "Git"],
        link: "https://free-code-camp-certification-projects.vercel.app/"
    }, {
        title: "Interactive Pokémon Searcher",
        description: "A dynamic web application for searching and exploring detailed information about Pokémon using the PokéAPI. Features include real-time search by name or ID, comprehensive stats display, and captivating Pokémon images.",
        tech: ["HTML", "CSS", "JavaScript", "REST APIs", "DOM Manipulation", "Git"],
        link: "https://free-code-camp-certification-projects-1eeb.vercel.app/"
    }, {
        title: "Palindrome Checker",
        description: "A web application that determines if a given word or phrase is a palindrome. Handles various input formats, including spaces, punctuation, and capitalization, and provides clear feedback to the user.",
        tech: ["HTML", "CSS", "JavaScript", "Git"],
        link: "#"
    }, {
        "title": "Roman Numeral Converter",
        "description": "An interactive tool that converts Arabic numerals (1-3999) to Roman numerals. Features input validation, error handling, and accurate conversion logic.",
        "tech": ["HTML", "CSS", "JavaScript", "Git"],
        "link": "#"
    }, {
        "title": "US Telephone Number Validator",
        "description": "A web application that validates US phone numbers. Supports multiple formats, checks for area codes, and provides clear feedback for valid and invalid inputs.",
        "tech": ["HTML", "CSS", "JavaScript", "Git"],
        "link": "#"
    }

];

function loadProjects() {
    const grid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <hr />
            <hr />
            <div class="tech-tags">${project.tech.map(t => `<span>${t}</span>`).join(' || ')}</div>
            <hr />
            <hr />
            <a href="${project.link}" target="_blank" class="btn">View Project</a>
        `;
        grid.appendChild(card);
    });
}

// Form Handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Work never finish
    alert('Thank you for your message! I will respond shortly.');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// load project 
window.onload = loadProjects;