// Course data - would typically come from a database in a real application
const courses = {
    'computer-science': {
        title: 'School of Computing',
        description: 'Our Computer Science program offers comprehensive resources covering programming fundamentals, algorithms, data structures, artificial intelligence, and more. Designed to support students at all levels, from beginners to advanced learners.',
        icon: 'fas fa-laptop-code',
        semesters: {
            'Semester 1': [
                { name: 'Introduction to Programming', type: 'Notes', format: 'PDF' },
                { name: 'Discrete Mathematics', type: 'Syllabus', format: 'PDF' },
                { name: 'Computer Fundamentals', type: 'Past Papers', format: 'ZIP' },
                { name: 'Digital Logic Design', type: 'Lecture Slides', format: 'PPT' }
            ],
            'Semester 2': [
                { name: 'Data Structures', type: 'Notes', format: 'PDF' },
                { name: 'Object-Oriented Programming', type: 'Lab Manuals', format: 'PDF' },
                { name: 'Computer Architecture', type: 'Past Papers', format: 'ZIP' },
                { name: 'Database Systems', type: 'Project Guidelines', format: 'DOC' }
            ],
            'Semester 3': [
                { name: 'Algorithms', type: 'Notes', format: 'PDF' },
                { name: 'Operating Systems', type: 'Lab Exercises', format: 'PDF' },
                { name: 'Computer Networks', type: 'Past Papers', format: 'ZIP' },
                { name: 'Software Engineering', type: 'Case Studies', format: 'PDF' }
            ],
            'Semester 4': [
                { name: 'Artificial Intelligence', type: 'Notes', format: 'PDF' },
                { name: 'Machine Learning', type: 'Code Samples', format: 'ZIP' },
                { name: 'Cloud Computing', type: 'Lecture Slides', format: 'PPT' },
                { name: 'Cybersecurity', type: 'Practice Problems', format: 'PDF' }
            ],
            'Semester 5': [
                { name: 'Data Science', type: 'Notes', format: 'PDF' },
                { name: 'Big Data Analytics', type: 'Case Studies', format: 'PDF' },
                { name: 'Blockchain Technology', type: 'Research Papers', format: 'PDF' },
                { name: 'Internet of Things', type: 'Project Templates', format: 'DOC' }
            ],
            'Semester 6': [
                { name: 'Advanced Algorithms', type: 'Notes', format: 'PDF' },
                { name: 'Distributed Systems', type: 'Research Papers', format: 'PDF' },
                { name: 'Natural Language Processing', type: 'Code Samples', format: 'ZIP' },
                { name: 'Capstone Project Guidelines', type: 'Templates', format: 'DOC' }
            ]
        },
        faculty: 'Dr. Alan Turing, Prof. Grace Hopper, Dr. Donald Knuth',
        duration: '4 Years',
        credits: '120 Credit Hours'
    },
    'business': {
        title: 'Business and Management',
        description: 'The Business and Management program provides resources on economics, marketing, finance, organizational behavior, and strategic management. Ideal for students pursuing careers in business administration and entrepreneurship.',
        icon: 'fas fa-business-time',
        semesters: {
            'Semester 1': [
                { name: 'Principles of Management', type: 'Notes', format: 'PDF' },
                { name: 'Microeconomics', type: 'Case Studies', format: 'PDF' },
                { name: 'Business Mathematics', type: 'Practice Problems', format: 'PDF' },
                { name: 'Financial Accounting', type: 'Past Papers', format: 'ZIP' }
            ],
            'Semester 2': [
                { name: 'Macroeconomics', type: 'Lecture Notes', format: 'PDF' },
                { name: 'Business Statistics', type: 'Worksheets', format: 'PDF' },
                { name: 'Marketing Principles', type: 'Project Templates', format: 'DOC' },
                { name: 'Organizational Behavior', type: 'Case Studies', format: 'PDF' }
            ],
            'Semester 3': [
                { name: 'Financial Management', type: 'Notes', format: 'PDF' },
                { name: 'Business Law', type: 'Case Studies', format: 'PDF' },
                { name: 'Operations Management', type: 'Practice Problems', format: 'PDF' },
                { name: 'Consumer Behavior', type: 'Research Papers', format: 'PDF' }
            ],
            'Semester 4': [
                { name: 'Strategic Management', type: 'Notes', format: 'PDF' },
                { name: 'International Business', type: 'Case Studies', format: 'PDF' },
                { name: 'Entrepreneurship', type: 'Business Plan Templates', format: 'DOC' },
                { name: 'Business Analytics', type: 'Data Sets', format: 'ZIP' }
            ],
            'Semester 5': [
                { name: 'Digital Marketing', type: 'Notes', format: 'PDF' },
                { name: 'Corporate Finance', type: 'Case Studies', format: 'PDF' },
                { name: 'Supply Chain Management', type: 'Practice Problems', format: 'PDF' },
                { name: 'Leadership Skills', type: 'Self-Assessment Tools', format: 'DOC' }
            ],
            'Semester 6': [
                { name: 'Business Ethics', type: 'Case Studies', format: 'PDF' },
                { name: 'Project Management', type: 'Templates', format: 'DOC' },
                { name: 'International Marketing', type: 'Market Research', format: 'PDF' },
                { name: 'Capstone Project Guidelines', type: 'Templates', format: 'DOC' }
            ]
        },
        faculty: 'Prof. Peter Drucker, Dr. Michael Porter, Prof. Philip Kotler',
        duration: '3 Years',
        credits: '90 Credit Hours'
    },
    'engineering': {
        title: 'Computer Science Engineering',
        description: 'Our Engineering program covers core engineering principles across various disciplines including mechanical, electrical, civil, and chemical engineering. Resources include practical lab manuals, design projects, and technical references.',
        icon: 'fas fa-robot',
        semesters: {
            'Semester 1': [
                { name: 'Engineering Mathematics', type: 'Notes', format: 'PDF' },
                { name: 'Basic Electronics', type: 'Lab Manuals', format: 'PDF' },
                { name: 'Engineering Drawing', type: 'Templates', format: 'DWG' },
                { name: 'Programming for Engineers', type: 'Code Samples', format: 'ZIP' }
            ],
            'Semester 2': [
                { name: 'Data Structures and Algorithms', type: 'Notes', format: 'PDF' },
                { name: 'Computer Organization', type: 'Lab Exercises', format: 'PDF' },
                { name: 'Discrete Mathematics', type: 'Practice Problems', format: 'PDF' },
                { name: 'Digital Logic Design', type: 'Circuit Diagrams', format: 'PDF' }
            ],
            'Semester 3': [
                { name: 'Operating Systems', type: 'Notes', format: 'PDF' },
                { name: 'Database Management Systems', type: 'Lab Exercises', format: 'PDF' },
                { name: 'Computer Networks', type: 'Network Diagrams', format: 'PDF' },
                { name: 'Theory of Computation', type: 'Practice Problems', format: 'PDF' }
            ],
            'Semester 4': [
                { name: 'Software Engineering', type: 'Notes', format: 'PDF' },
                { name: 'Compiler Design', type: 'Lab Exercises', format: 'PDF' },
                { name: 'Artificial Intelligence', type: 'Code Samples', format: 'ZIP' },
                { name: 'Computer Graphics', type: 'Project Files', format: 'ZIP' }
            ],
            'Semester 5': [
                { name: 'Machine Learning', type: 'Notes', format: 'PDF' },
                { name: 'Cloud Computing', type: 'Lab Exercises', format: 'PDF' },
                { name: 'Big Data Analytics', type: 'Data Sets', format: 'ZIP' },
                { name: 'Internet of Things', type: 'Project Guidelines', format: 'DOC' }
            ],
            'Semester 6': [
                { name: 'Cybersecurity', type: 'Notes', format: 'PDF' },
                { name: 'Blockchain Technology', type: 'Case Studies', format: 'PDF' },
                { name: 'Distributed Systems', type: 'Research Papers', format: 'PDF' },
                { name: 'Capstone Project Guidelines', type: 'Templates', format: 'DOC' }
            ],
            'Semester 7': [
                { name: 'Advanced Algorithms', type: 'Notes', format: 'PDF' },
                { name: 'Natural Language Processing', type: 'Code Samples', format: 'ZIP' },
                { name: 'Computer Vision', type: 'Image Datasets', format: 'ZIP' },
                { name: 'Research Methodology', type: 'Templates', format: 'DOC' }
            ],
            'Semester 8': [
                { name: 'Project Management', type: 'Notes', format: 'PDF' },
                { name: 'Technical Writing', type: 'Templates', format: 'DOC' },
                { name: 'Industry Case Studies', type: 'PDF', format: 'PDF' },
                { name: 'Final Project Submission', type: 'Guidelines', format: 'DOC' }
            ]
        },
        faculty: 'Prof. Nikola Tesla, Dr. Ada Lovelace, Prof. Steve Wozniak',
        duration: '4 Years',
        credits: '140 Credit Hours'
    }
};

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality
function openCourseModal(courseId) {
    const course = courses[courseId];
    const modal = document.getElementById('courseModal');
    const modalContent = document.getElementById('courseModalContent');
    
    // Generate tab buttons for all semesters
    let tabButtons = '';
    Object.keys(course.semesters).forEach((semester, index) => {
        const tabId = `semester${index + 1}`;
        const activeClass = index === 0 ? 'active' : '';
        tabButtons += `<div class="tab-btn ${activeClass}" onclick="switchTab(event, '${tabId}')">${semester}</div>`;
    });
    
    // Generate tab content for all semesters
    let tabContents = '';
    Object.entries(course.semesters).forEach(([semester, resources], index) => {
        const tabId = `semester${index + 1}`;
        const activeClass = index === 0 ? 'active' : '';
        tabContents += `
            <div id="${tabId}" class="tab-content ${activeClass}">
                <h3>${semester} Resources</h3>
                <div class="semester-resources-list">
                    ${generateResourceList(resources)}
                </div>
            </div>
        `;
    });
    
    // Generate modal content
    let content = `
        <div class="course-details-header">
            <div class="course-details-img">
                <i class="${course.icon}" style="font-size: 3rem;"></i>
            </div>
            <div class="course-details-info">
                <h2>${course.title}</h2>
                <p>${course.description}</p>
                <p><strong>Faculty:</strong> ${course.faculty}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p><strong>Credits:</strong> ${course.credits}</p>
            </div>
        </div>
        
        <div class="course-details-tabs">
            ${tabButtons}
            <div class="tab-btn" onclick="switchTab(event, 'details')">Course Details</div>
        </div>
        
        ${tabContents}
        
        <div id="details" class="tab-content">
            <h3>Course Details</h3>
            <p><strong>Program Overview:</strong> This course provides comprehensive training in ${course.title.toLowerCase()} with a focus on both theoretical foundations and practical applications.</p>
            <p><strong>Learning Outcomes:</strong> Upon completion, students will have mastered the core concepts and developed practical skills applicable in real-world scenarios.</p>
            <p><strong>Assessment Methods:</strong> Combination of exams, projects, and continuous assessments.</p>
            <p><strong>Career Opportunities:</strong> Graduates can pursue careers in various fields including software development, data analysis, system architecture, and more.</p>
        </div>
    `;
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateResourceList(resources) {
    return resources.map(resource => `
        <div class="resource-item">
            <div>
                <div class="resource-name">${resource.name}</div>
                <small>${resource.type} • ${resource.format}</small>
            </div>
            <a href="#" class="download-btn">Download</a>
        </div>
    `).join('');
}

function switchTab(event, tabId) {
    // Remove active class from all tabs and contents
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('courseModal')) {
        closeModal();
    }
});

// Handle download button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('download-btn')) {
        e.preventDefault();
        // In a real application, this would initiate a file download
        alert('Download functionality would be implemented here. This is just a demo.');
    }
});

// Form submission handlers
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality would be implemented here. Redirecting to dashboard...');
    // window.location.href = 'dashboard.html';
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration functionality would be implemented here. Redirecting to login...');
    // window.location.href = 'login.html';
});

// This would be handled by a server-side router in a real application
function showPage(pageId) {
    document.querySelectorAll('[id$="-page"]').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Check URL hash to show appropriate page
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash === 'login') showPage('login-page');
    else if (hash === 'register') showPage('register-page');
    else if (hash === 'resources') showPage('resources-page');
    else if (hash === 'contact') showPage('contact-page');
    else if (hash === 'dashboard') showPage('dashboard-page');
});

document.querySelector('.profile-btn').addEventListener('click', function() {
    document.querySelector('.profile-dropdown').classList.toggle('open');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.profile-dropdown');
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});