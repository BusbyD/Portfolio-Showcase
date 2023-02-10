AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/c-sharp.png",
    langName: "C#",
    langDesc: "<li>C# is a modern, object-oriented programming language used for developing a range of applications, including desktop, mobile, web, and gaming.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/sql.png",
    langName: "Microsoft SQL-Server",
    langDesc: "<li>Microsoft SQL Server is a relational database management system used for storing and retrieving data for software applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
    {
        langImage: "assets/images/techstack-page/html.png",
        langName: "HyperText Markup Language",
        langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
    },
    {
        langImage: "assets/images/techstack-page/css.png",
        langName: "Cascading Style Sheets",
        langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
    },
    {
        langImage: "assets/images/techstack-page/javascript.png",
        langName: "JavaScript",
        langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
    },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
