export default {
  pages: {
    index: {
      title: "About me",
      aboutMeTitle: "A few words about me",
      aboutMeDescr:
        "Hi, I'm Alan Quaino! I work as a web developer in a company that deals with optimization and management of warehouse logistics flows. I am a great car enthusiast, especially of <i>youngtimers</i>, and in my spare time I like to go outdoor and immerse myself in nature. If you want to know more, view my <a class='italic' href='/CV Alan Quaino 20210811.pdf' target='_blank' >curriculum vitae</a> or visit my social profiles.",
      infoPills: {
        age: { key: "Age", value: null },
        place: { key: "Place", value: null },
        interests: {
          key: "Interests",
          value: "Cars, Nature, Sports, History, Technology, Travels",
        },
        education: { key: "Education", value: "Scientific High School" },
        qualification: {
          key: "Qualification",
          value: "Undergraduate degree in Computer Science",
        },
        email: { key: "Email", value: null },
        phone: { key: "Phone", value: null },
      },
      igButton: "More",
    },
    services: {
      title: "Services",
      servicesGridTitle: "What I like to do",
      servicesGrid: {
        development: {
          title: "Web development",
          descr:
            "Design, development and deployment of websites and web applications",
        },
        websites: {
          title: "Websites",
          descr: "Management, update and maintenance of existing websites",
        },
        graphics: {
          title: "Graphics",
          descr: "Design of logos, posters, banners and business cards",
        },
      },
      toolsTitle: "Tools I use",
      toolsDescr:
        "I create websites with WordPress and WooCommerce, but I know how to develop my applications with frontend and backend frameworks like VueJS and Flask. I am also comfortable with graphics and video editing tools, such as Photoshop, Illustrator and Premiere.",
    },
    projects: {
      title: "Projects",
      projectsGridTitle: "Some of my projects",
      projectsGridDescr: "A brief list of my most recent works",
      searchPlaceholder: "Search projects",
      filterAll: "All",
    },
    contact: {
      title: "Contact",
      contactFormTitle: "Write me",
      contactFormDescr:
        "Any idea? Send me an email by filling out the form below",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      subjectPlaceholder: "Your request",
      messagePlaceholder: "Your message",
      sendButton: "Send",
      feedbackSuccess:
        "Thank you for contacting me! I'll reply as soon as possible.",
      feedbackError: "There was an error sending the message. Try again later.",
      contactsTitle: "Contact me",
    },
    project: {
      client: "Client",
      name: "Name",
      sector: "Sector",
      website: "Website",
      target: "Target",
      technologies: "Technologies",
      activities: "Activities",
      relatedProjects: "Related projects",
      noRelProjects: "No related projects",
    },
  },
  components: {
    AppFooter: {
      title: "Follow me",
    },
    FooterCopyright: {
      madeWith: "Developed with",
      cookieNotice:
        "This website does not use cookies and does not collect sensitive data of any kind",
    },
  },
  store: {
    contacts: {
      place: "Udine and surroundings",
    },
    sectors: {
      photography: "Photography",
      foodAndWine: "Food and wine",
      gardening: "Gardening",
      volunteering: "Volunteering",
      cleaning: "Cleaning services",
    },
    categories: {
      graphics: "Graphics",
      social: "Social",
      web: "Web",
    },
  },
};
