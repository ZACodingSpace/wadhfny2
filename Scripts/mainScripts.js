// The Entry Animation for Elements Start
let sections_titles = document.querySelectorAll(".slide-up");
let contents_elements = document.querySelectorAll(".slide-in");
let appearing_way = {
    // threshhold: 1,
    rootMargin: "0px 0px -100px 0px"
};
let appear_on_scroll = new IntersectionObserver(function (elements, appear_on_scroll) {

    elements.forEach(element => {
        if (!element.isIntersecting) {
            return;
        } else {
            element.target.classList.add("appear");
            appear_on_scroll.unobserve(element.target);
        }
    })
}, appearing_way);

sections_titles.forEach(title => {
    appear_on_scroll.observe(title);
})
contents_elements.forEach(content_el => {
    appear_on_scroll.observe(content_el);
})
// The Entry Animation for Elements End



// Statistics Section Scribts Start
let elements = document.querySelectorAll(".statistics-section .stat-num");
let jobs_card = document.querySelector(".jobs");
let companies_card = document.querySelector(".companies");
let applies_card = document.querySelector(".applies");
let opportunities_card = document.querySelector(".opportunities");

window.onscroll = function () {

    if (window.scrollY >= (jobs_card.offsetTop - 350)) {
        counter(elements[0], 2);
    }
    if (window.scrollY >= (companies_card.offsetTop - 350)) {
        counter(elements[1], 20);

    }
    if (window.scrollY >= (applies_card.offsetTop - 350)) {
        counter(elements[2], 10);

    }
    if (window.scrollY >= (opportunities_card.offsetTop - 350)) {
        counter(elements[3], 1);
    }
};

function counter(element, increment) {

    let updateCount = () => {
        let data_goal = +element.getAttribute('data-goal');
        let num = +element.innerText;

        if (num < data_goal) {
            element.innerText = num + increment;

            setTimeout(updateCount, 100);
        } else {
            element.innerText = data_goal;
        }
    };

    updateCount();
}
// Statistics Section Scribts End
