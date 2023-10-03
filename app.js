// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  //step 1 slect items
  const img = document.getElementById("person-img")
  const author = document.getElementById("author")
  const job = document.getElementById("job")
  const info = document.getElementById("info")

  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn= document.querySelector(".next-btn")
  const randomBtn = document.querySelector(".random-btn")

  // set starting item
let currentItem = 2; //keep it from 0 to 3 only , since index

// load initial item when page loads
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});  //this function only runs when the page laods or relaods , not when current Irem values changes

function changeContent() {
    const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
prevBtn.addEventListener('click',function() {
    if(currentItem === 0) {
        currentItem = reviews.length;
        
    }
    if(currentItem >= 1 ) {
        currentItem--;
        changeContent();
        console.log(currentItem);

    }
})

nextBtn.addEventListener('click',function() {
    if(currentItem === reviews.length-1) {
        currentItem = 0;
        
    }
    if(currentItem <= reviews.length) {
        currentItem++;
        changeContent();
        console.log(currentItem);

    }
})

randomBtn.addEventListener('click',function() {
    let randomNo = Math.floor(Math.random() * reviews.length)
    console.log(randomNo);
    currentItem = randomNo
    changeContent();
})







 