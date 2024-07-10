// JavaScript code to handle navigation and content display
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all navigation items
        document.querySelectorAll('.nav a').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked navigation item
        this.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content').forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected content section
        let target = this.getAttribute('href').substring(1); // Remove '#'
        document.getElementById(target).classList.add('active');
    });
});
