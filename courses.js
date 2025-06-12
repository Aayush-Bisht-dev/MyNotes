document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const categoryDropdown = document.getElementById('categoryDropdown');
    const courseCards = document.querySelectorAll('.course-card');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const initialVisibleCount = 3;
    let visibleCount = initialVisibleCount;
    let currentFilter = 'all';

    // Function to show/hide courses based on filter and visible count
    function updateCourses() {
        let visibleCards = 0;
        
        courseCards.forEach((card, index) => {
            const cardCategories = card.dataset.categories.split(' ');
            
            // Check if card matches current filter
            const matchesFilter = currentFilter === 'all' || cardCategories.includes(currentFilter);
            
            if (matchesFilter) {
                // Show only the first 'visibleCount' cards that match the filter
                if (visibleCards < visibleCount) {
                    card.style.display = 'block';
                    visibleCards++;
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide load more button
        const totalMatchingCards = Array.from(courseCards).filter(card => {
            const cardCategories = card.dataset.categories.split(' ');
            return currentFilter === 'all' || cardCategories.includes(currentFilter);
        }).length;

        if (visibleCards >= totalMatchingCards || currentFilter !== 'all') {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    // Filter courses based on selected category
    function filterCourses() {
        currentFilter = categoryDropdown.value;
        visibleCount = initialVisibleCount; // Reset visible count when filter changes
        updateCourses();
    }

    // Load more courses
    function loadMoreCourses() {
        visibleCount += 3; // Increase visible count by 3
        updateCourses();
    }

    // Initialize the page
    function init() {
        // Set up event listeners
        categoryDropdown.addEventListener('change', filterCourses);
        loadMoreBtn.addEventListener('click', loadMoreCourses);
        
        // Initialize courses display
        updateCourses();
    }

    // Call the initialization function
    init();
});