let header = document.querySelector('#header');
let title = document.querySelector('#title');
let excerpt = document.querySelector('#excerpt');
let profile_img = document.querySelector('#profile_img');
let name = document.querySelector('#name');
let date = document.querySelector('#date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""></img>';
    title.innerHTML = 'Lorem, ipsum dolor.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, delectus!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Aug, 12 2021';

    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    });

    animatedBgText.forEach(bg => {
        bg.classList.remove('animated-bg-text');
    });
}