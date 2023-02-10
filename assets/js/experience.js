AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Application Support Analyst",
    cardImage: "assets/images/experience-page/FoodCity.jpg",
    place: "Kvat Food Stores Inc",
    time: "(May, 2021 - present)",
        desp: "<li>Responsible for providing technical support for software applications, ensuring that they are functioning properly and meeting the needs of users.</li> <li>Involves troubleshooting and resolving issues, as well as working with developers and stakeholders to find solutions to complex problems.</li><li>Also developed REST APIs, SSIS Projects, and SSRS Reports.</li>",
    },
  {
    title: "Order Selector",
    cardImage: "assets/images/experience-page/FoodCity.jpg",
    place: "Kvat Food Stores Inc",
    time: "(May, 2020 - present)",
    desp: "<li>As an Order Selector, I was responsible for accurately picking and packing orders for over 70 grocery store locations, using equipment such as motorized pallet jacks, and forklifts.</li> <li>I helped train new associates, and also filled in other roles when the warehouse whas short on hand.</li> <li>Learned how to be become a part of a team, time management skills, and leadership skills.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Speedway Children's Charities",
    cardImage: "assets/images/experience-page/Speedway-Charity.jpg",
    description:
      "A non-profit organization that was established in 1982. Its mission is to improve the quality of life for children in need by providing financial and volunteer support to selected organizations.",
  },
  {
    title: "State of Ohio's Special Olympics",
    cardImage: "assets/images/experience-page/Special-Olympics.jpg",
    description:
      "A non-profit organization that provides year-round sports training and athletic competition for individuals with intellectual disabilities.",
  },
  {
    title: "Bristol TN/VA Rythm & Roots Festival",
    cardImage: "assets/images/experience-page/Rythmn-Roots.jpg",
    description:
      "An annual multi-day music festival showcasing diverse musical acts and celebrating the musical heritage of Bristol, Tennessee and Virginia.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


