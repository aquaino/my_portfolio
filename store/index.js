export const state = () => ({
  copyrightDate: new Date().getFullYear(),

  /* Contact info */
  contacts: {
    place: {
      // Translated from lang files
      value: null,
      icon: "map-pin",
      url: "",
    },
    email: {
      value: "alanquaino@gmail.com",
      icon: "mail",
      url: "mailto:alanquaino@gmail.com",
    },
    phone: {
      value: "346 270 9363",
      icon: "phone",
      url: "tel:+393462709363",
    },
  },

  /* Social profiles */
  socialProfiles: [
    // The first profile url is used in the copyright section
    {
      name: "LinkedIn",
      profile_name: "alanquaino",
      icon: "linkedin",
      url: "https://linkedin.com/in/alanquaino",
    },
    {
      name: "Instagram",
      profile_name: "alan_quaino",
      icon: "instagram",
      url: "https://instagram.com/alan_quaino",
    },
    {
      name: "Facebook",
      profile_name: "alan.quaino.7",
      icon: "facebook",
      url: "https://facebook.com/alan.quaino.7",
    },
  ],

  /* Customers */
  customers: {
    empty: {
      name: null,
      sector: null,
      website: null,
    },
    gaurika: {
      name: "Gaurika Fratticci",
      sector: "photography",
      website: null,
    },
    agriturismoMilocco: {
      name: "Azienda Agricola Milocco",
      sector: "foodAndWine",
      website: "https://miloccowines.com",
    },
    giardinaggioMilocco: {
      name: "Azienda Agricola Milocco",
      sector: "gardening",
      website: null,
    },
    protezioneCivileButtrio: {
      name: "Protezione Civile Buttrio",
      sector: "volunteering",
      website: "https://pgv-buttrio.herokuapp.com",
    },
    lindaSrl: {
      name: "Linda srl",
      sector: "cleaning",
      website: "https://lindasrl.it",
    },
  },

  /* Sectors */
  sectors: [
    "photography",
    "foodAndWine",
    "gardening",
    "volunteering",
    "cleaning",
  ],

  /* Projects */
  projects: [
    {
      id: "sito-web-azienda-pulizie",
      highlight: true,
      categories: ["web"],
      img: "/images/lindasrl/lindasrl-website-preview.jpg",
      date: "2022/10/05",
      projectImages: [
        {
          title: "Sito web azienda di pulizie",
          img: "/images/lindasrl/lindasrl-website-preview.jpg",
        },
      ],
      customer: "lindaSrl",
      technologies: ["WordPress"],
    },
    {
      id: "portale-gestione-volontari",
      highlight: false,
      categories: ["web"],
      img: "/images/pgv/pgv-website-preview.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Sito web azienda agricola",
          img: "/images/pgv/pgv-website-preview.jpg",
        },
      ],
      customer: "protezioneCivileButtrio",
      technologies: ["Python", "Flask", "UIkit 3"],
    },
    {
      id: "portfolio-fotografia",
      highlight: false,
      categories: ["graphics"],
      img: "/images/portfolio-fotografa.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Portfolio fotografa",
          img: "/images/portfolio-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Adobe InDesign", "Adobe Photoshop"],
    },
    {
      id: "post-evento-enogastronomico",
      highlight: false,
      categories: ["social"],
      img: "/images/post-enogastronomico.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Post social enogastronomico",
          img: "/images/post-enogastronomico.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["Canva"],
    },
    {
      id: "volantino-agriturismo-giardinaggio",
      highlight: false,
      categories: ["graphics"],
      img: "/images/volantino-agriturismo-giardinaggio.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Volantino gastronomia e giardinaggio",
          img: "/images/volantino-agriturismo-giardinaggio.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["Canva", "Adobe Photoshop"],
    },
    {
      id: "sito-web-azienda-agricola",
      highlight: false,
      categories: ["web"],
      img: "/images/miloccowines/miloccowines.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Sito web azienda agricola",
          img: "/images/miloccowines/miloccowines.jpg",
        },
        {
          title: "Preview del sito",
          img: "/images/miloccowines/website-preview.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["WordPress"],
    },
    {
      id: "biglietto-da-visita-fotografia",
      highlight: false,
      categories: ["graphics"],
      img: "/images/biglietto-fotografa.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Biglietto da visita fotografia",
          img: "/images/biglietto-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Canva", "Adobe Photoshop"],
    },
    {
      id: "buono-natalizio-fotografia",
      highlight: false,
      categories: ["graphics"],
      img: "/images/buono-natale-fotografa.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Buono natalizio in stile macchina fotografica",
          img: "/images/buono-natale-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Canva", "Adobe Photoshop"],
    },
    {
      id: "evento-gastronomico-musicale",
      highlight: false,
      categories: ["graphics", "social"],
      img: "/images/evento-gastronomico-musicale.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Locandina e post evento musicale",
          img: "/images/evento-gastronomico-musicale.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["Canva", "Adobe Photoshop"],
    },
    {
      id: "logo-fotografia",
      highlight: false,
      categories: ["graphics"],
      img: "/images/logo-fotografa.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Logo fotografa",
          img: "/images/logo-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Adobe Illustrator"],
    },
    {
      id: "logo-giardinaggio",
      highlight: false,
      categories: ["graphics"],
      img: "/images/logo-giardinaggio.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Logo azienda giardinaggio",
          img: "/images/logo-giardinaggio.jpg",
        },
      ],
      customer: "giardinaggioMilocco",
      technologies: ["Adobe Illustrator"],
    },
    {
      id: "invito-matrimonio-elegante",
      highlight: false,
      categories: ["graphics"],
      img: "/images/matrimonio-elegante.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Invito matrimonio elegante",
          img: "/images/matrimonio-elegante.jpg",
        },
      ],
      customer: "empty",
      technologies: ["Canva"],
    },
    {
      id: "invito-matrimonio-limoni",
      highlight: false,
      categories: ["graphics"],
      img: "/images/matrimonio-limoni.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Invito matrimonio limoni",
          img: "/images/matrimonio-limoni.jpg",
        },
      ],
      customer: "empty",
      technologies: ["Canva"],
    },
    {
      id: "invito-matrimonio-porcellane",
      highlight: false,
      categories: ["graphics"],
      img: "/images/matrimonio-porcellane.jpg",
      date: "2022/08/02",
      projectImages: [
        {
          title: "Invito matrimonio porcellane",
          img: "/images/matrimonio-porcellane.jpg",
        },
      ],
      customer: "empty",
      technologies: ["Canva"],
    },
  ],

  /* Project categories */
  categories: ["graphics", "social", "web"],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};
