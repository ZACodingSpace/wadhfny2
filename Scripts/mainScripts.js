// The Entry Animation for Elements Start
let sections_titles = document.querySelectorAll(".slide-up");
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
// The Entry Animation for Elements End



// Statistics Section Scribts Start
let elements = document.querySelectorAll(".statistics-section .stat-num");
let jobs_card = document.querySelector(".jobs");
let companies_card = document.querySelector(".companies");
let applies_card = document.querySelector(".applies");
let opportunities_card = document.querySelector(".opportunities");

jobs_card.addEventListener("mouseenter", () => {
    counter(elements[0], 2);
});


companies_card.addEventListener("mouseenter", () => {
    counter(elements[1], 20);
})

applies_card.addEventListener("mouseenter", () => {
    counter(elements[2], 10);
})

opportunities_card.addEventListener("mouseenter", () => {
    counter(elements[3], 1);
})



function counter(element, increment) {

    element.innerText = 0;
    let updateCount = () => {
        let data_goal = +element.getAttribute('data-goal');
        let num = +element.innerText;

        if (num < data_goal) {
            element.innerText = num + increment;

            setTimeout(updateCount, 50);
        } else {
            element.innerText = data_goal;
        }
    };
    updateCount();
}
// Statistics Section Scribts End