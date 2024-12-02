 //Dynamic start
    const userInfo = {
        name: "Jewelle Vincent Atienza",
        portfolioText: "My Portfolio"
    };

    document.getElementById("greeting").textContent = `Hi, I am ${userInfo.name}`;
    document.getElementById("portfolioLink").textContent = userInfo.portfolioText;

 // Dynamic Navbar
           const navbarItems = [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skill" },
        { text: "Portfolio", href: "#portfolio" },
        { text: "Contact", href: "#contact" }
    ];

    const navbar = document.querySelector('.navbar');
    navbarItems.forEach((item, index) => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.text;
        link.style.setProperty('--i', index + 12);
        navbar.appendChild(link);
    });
    const portfolio ='Portfolio.';
    document.querySelector('.logo').textContent=portfolio;

        //Home Content
        const homeContent = {
            h3: "Hello, i am",
            h1: "Jewelle Vincent Atienza",
            p: "I am a passionate Web and App Developer, Photographer, and Videographer. Let's create something amazing together!"
        };
        document.getElementById("home-h3").textContent = homeContent.h3;
        document.getElementById("home-h1").textContent = homeContent.h1;
        document.getElementById("home-p").textContent = homeContent.p;

        document.addEventListener("DOMContentLoaded", function () {
            const downloadBtn = document.getElementById("about-btn");

            downloadBtn.textContent = "About Me"; 
            downloadBtn.href = "#about"; 
        });

        // Dynamic Social Media Links
        const socialLinks = [
            { icon: 'bx bxl-facebook', href: '#' },
            { icon: 'bx bxl-twitter', href: '#' },
            { icon: 'bx bxl-instagram-alt', href: '#' },
            { icon: 'bx bxl-linkedin', href: '#' }
        ];
        const socialMediaContainer = document.querySelector('.social-media');
        socialLinks.forEach((social, index) => {
            const link = document.createElement('a');
            link.href = social.href;
            link.style.setProperty('--i', index + 7);
            const icon = document.createElement('i');
            icon.className = social.icon;
            link.appendChild(icon);
            socialMediaContainer.appendChild(link);
        });

        // Dynamic Profession Cards
        const professions = [
            { icon: 'bx bx-code-alt', title: 'Web Developer' },
            { icon: 'bx bxl-apple', title: 'App Developer' },
            { icon: 'bx bxl-digitalocean', title: 'Digital Markiting' },
            { icon: 'bx bxs-video-recording', title: 'Videographer' }
        ];
        const professionBox = document.querySelector('.profession-box');
        professions.forEach((profession, index) => {
            const professionDiv = document.createElement('div');
            professionDiv.classList.add('profession');
            professionDiv.style.setProperty('--i', index);
            const icon = document.createElement('i');
            icon.className = profession.icon;
            const title = document.createElement('h3');
            title.textContent = profession.title;
            professionDiv.appendChild(icon);
            professionDiv.appendChild(title);
            professionBox.appendChild(professionDiv);
        });

        // Dynamic content for the 'detail' section
        const aboutMe = {
            name: "Me",
            role: "Frontend Developer",
            description: "As an Information Technology student, I am deeply passionate about technology and its potential to solve real-world problems. I am constantly learning and refining my skills in areas like web development, app development, and digital solutions. With a strong foundation in programming, systems analysis, and problem-solving, I am eager to contribute to the tech industry by creating innovative applications and improving user experiences. I strive to combine my technical knowledge with creativity to develop solutions that make a meaningful impact.",
            skillsLinkText: "Here are my skills"
        };

        document.getElementById("meSpan").textContent = aboutMe.name;
        document.getElementById("role").textContent = aboutMe.role;
        document.getElementById("description").textContent = aboutMe.description;
        document.getElementById("skillsLink").textContent = aboutMe.skillsLinkText;

        // Dynamic content of skill-list
        document.addEventListener('DOMContentLoaded', function() {
            const skills = [
        {
            icon: 'bx bxl-apple',
            title: 'Web Development',
            description: 'As an aspiring web developer, I am passionate about creating user-friendly and responsive websites. I focus on writing clean, efficient code using HTML, CSS, and JavaScript to build dynamic web applications. My goal is to ensure that websites are both visually appealing and functional, optimizing for speed and accessibility.',
        },

        {
            icon: 'bx bxl-c-plus-plus',
            title: 'C++',
            description: 'As a student, I have developed a solid foundation in C# programming. I am proficient in object-oriented programming principles, enabling me to create robust and maintainable applications. I focus on utilizing C# for desktop applications, games, and web services, honing my skills in creating scalable solutions and debugging complex issues.',
        },
        {
            icon: 'bx bxl-php',
            title: 'PHP (Hypertext Preprocessor)',
            description: 'I am gaining hands-on experience with PHP, focusing on creating dynamic and interactive web applications. As a student, I have learned to integrate PHP with databases to manage and display data effectively. I strive to write efficient, secure, and maintainable code, and am working towards becoming proficient in building full-stack applications using PHP.',
        },

        {
            icon: 'bx bxl-java',
            title: 'Java',
            description: 'With a strong grasp of Java, I am capable of creating cross-platform applications. As a student, I have worked on various Java-based projects, utilizing object-oriented concepts to write clean, efficient, and reusable code. I am continuously improving my ability to solve problems, optimize performance, and implement Java’s rich set of libraries for diverse software development tasks.',
        },
    ];


        const cardsContainer = document.getElementById('cards-container');

        //Dynamic in project

        class YBCardProject {
        constructor(id, title, description, image) {
          this.idCard = id;
          this.titre = title;
          this.description = description;
          this.image = image;
        }

        initCard() {
          this.updateDom();
          this.activateListeners();
        }

        updateDom() {
          var cardDom = document.getElementById(this.idCard);
          if (cardDom.hasChildNodes()) {
            var cardDomImage = cardDom.getElementsByClassName('card-image')[0];
            cardDomImage.src = this.image;

            var cardDomTitle = cardDom.getElementsByClassName('card-title')[0];
            cardDomTitle.innerHTML = this.titre;

            var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0];
            cardDomDesc.innerHTML = this.description;
          }
        }

        activateListeners() {
          var cardDom = document.getElementById(this.idCard);
          cardDom.addEventListener("mouseover", function (event) {
            var cardDomTitle = cardDom.getElementsByClassName('card-title')[0];
            var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0];
            var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0];
            var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
            cardDomMiddle.style.height = cardMiddleHeight + 55 + "px";
          }, false);

          cardDom.addEventListener("mouseout", function (event) {
            var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0];
            cardDomMiddle.style.height = 100 + "px";
          }, false);
        }
      }

      var card1 = new YBCardProject("card1", " Web Nature", "In this project i focused on creating a website related to climate change awareness. The description mentions topics such as environmental issues, global warming, and how these topics can be communicated through an interactive and informative platform..", "img/Climate Change Website.jpg");
      card1.initCard();

      var card2 = new YBCardProject("card2", "Advertisement Website", "In this project it involves the development of a landing page for an advertising company. It likely showcases services such as marketing strategies, digital campaigns, and advertising tools to attract clients.", "img/Data Security Company Landing Page.jpg");
      card2.initCard();

      var card3 = new YBCardProject("card3", "Airlines Website", "A website built for an airline company, designed to provide services such as flight booking, flight schedules, and customer support. The description mentions how the website integrates interactive elements to provide a seamless experience for travelers.", "Fimg/ood Website Design.jpg");
      card3.initCard();
      var card4 = new YBCardProject("card4", "NFT Collection Website", "In this project it focuses on creating a platform for displaying and trading NFT (Non-Fungible Token) collections. The website allows users to explore, buy, and sell digital collectibles, leveraging blockchain technology.", "img/NFT Platform Website Design _ Landing Design.jpg");
      card4.initCard();

      var card5 = new YBCardProject("card5", "Web Design", "A project focused on designing visually appealing and functional websites for businesses or individuals. The project emphasizes user-centered design principles, offering customized websites that reflect the client’s brand and business goals.", "img/Traveling website.jpg");
      card5.initCard();

      var card6 = new YBCardProject("card6", "Inspirational Travel", "This project showcases a website meant to inspire and promote travel, offering recommendations, tips, and resources to potential travelers. The site might include features like destination guides, itineraries, and photo galleries.", "img/Webflow platform Interactive Website.jpg");
      card6.initCard();

        // Loop through the skills and create each card dynamically
        skills.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-center">
                        <i class='${skill.icon}'></i>
                        <h3>${skill.title}</h3>
                    </div>
                    <p>${skill.description}</p>
                    <button class="btn cardSkill">Read More</button>
                </div>
            `;
            
            cardsContainer.appendChild(card);
        });

        // Add event listener for the 'Here are my Projects' button
        const projectsBtn = document.getElementById('projects-btn');
        projectsBtn.addEventListener('click', function() {
            // This could be linked to scroll to your portfolio section
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        });
    });
         

        //dynamic contact
        const contactInfo = {
            place: "Bunganay, Boac, Marinduque",
            phone: "09692063429",
            email: "jewellevincentatienza09@gmail.com"
        };

        document.getElementById("place").textContent = contactInfo.place;
        document.getElementById("phone").innerHTML = `<a href="tel:${contactInfo.phone}" title="Give me a call">${contactInfo.phone}</a>`;
        document.getElementById("gmail").innerHTML = `<a href="mailto:${contactInfo.email}" title="Send me an email">${contactInfo.email}</a>`;

       // Light/Dark Mode Toggle
        const toggleIcon = document.querySelector('.toggle-icon');
        const homeImgContainer = document.querySelector('.home-img');
        const header = document.querySelector('.header');
        const rootStyles = getComputedStyle(document.documentElement);
        const navColor = rootStyles.getPropertyValue('--main-color');
        const navLightColor = rootStyles.getPropertyValue('--navlight-color');

        // Function to set header background based on scroll position and mode
        function setHeaderBackground() {
            const aboutSection = document.getElementById('about');
            if (window.scrollY < aboutSection.offsetTop - header.offsetHeight) {
                // Stay transparent when at #home section
                header.style.backgroundColor = 'transparent';
            } else {
                // Change background color based on dark mode
                if (document.body.classList.contains('dark-mode')) {
                    header.style.backgroundColor = navLightColor; 
                } else {
                    header.style.backgroundColor = navColor; 
                }
            }
        }

        toggleIcon.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggleIcon.classList.toggle('bx-sun');
            homeImgContainer.classList.toggle('light_img_filter');
            
            setHeaderBackground();
        });

        setHeaderBackground();
        window.addEventListener('scroll', setHeaderBackground);

        // scroll function color of "Header" class
        window.addEventListener('scroll', function () {

            const header = document.querySelector('.header');
            const aboutSection = document.getElementById('about');
            const rootStyles = getComputedStyle(document.documentElement);
            const navColor = rootStyles.getPropertyValue('--main-color');
            const navLightColor = rootStyles.getPropertyValue('--navlight-color');

            if (window.scrollY >= aboutSection.offsetTop - header.offsetHeight) {

                if (document.body.classList.contains('dark-mode')) {
                } else {
                    header.style.backgroundColor = navColor;
                }
            } else {

                header.style.backgroundColor = 'transparent';
            }
        });
        // Dynamic skills-btn
        document.addEventListener("DOMContentLoaded", function () {
            const downloadBtn = document.getElementById("skills-btn");

            downloadBtn.textContent = "Here is my skills"; 
            downloadBtn.href = "#"; 
            downloadBtn.classList.add("step"); // Add your custom class
            downloadBtn.setAttribute("data-step", "2"); // Add data-step="2"
        });

        var steps = document.querySelectorAll('.step');
        var body = document.querySelector('body');
        var html = document.querySelector('html');

        for (var i=0; i < steps.length; i++) {
          var element = steps[i];
          element.onclick = function(event) {
            var number = this.dataset.step;
            var target = this.href;
            addStep(number, target);
          }
        };

        function addStep(number, target) {
          html.className += ' step' + number;

          removeVisited();

          if (target !== '') {
            var id = target.split('#')[1];
            document.getElementById(id).className = 'animate';
          }
        }