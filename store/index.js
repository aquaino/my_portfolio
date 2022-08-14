import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  copyrightDate: new Date().getFullYear(),

  contacts: [
    {
      id: "location",
      name: "Udine e dintorni",
      icon: "map-pin",
      url: "",
    },
    {
      id: "email",
      name: "alanquaino@gmail.com",
      icon: "mail",
      url: "mailto:alanquaino@gmail.com",
    },
    {
      id: "phone",
      name: "346 270 9363",
      icon: "phone",
      url: "tel:+393462709363",
    },
  ],

  socialProfiles: [
    // The first profile url is used in the copyright section
    {
      id: uuidv4(),
      name: "LinkedIn",
      profile_name: "alanquaino",
      icon: "linkedin",
      url: "https://linkedin.com/in/alanquaino",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      profile_name: "alan_quaino",
      icon: "instagram",
      url: "https://instagram.com/alan_quaino",
    },
    {
      id: uuidv4(),
      name: "Facebook",
      profile_name: "alan.quaino.7",
      icon: "facebook",
      url: "https://facebook.com/alan.quaino.7",
    },
  ],

  projects: [
    {
      id: "biglietto-da-visita-fotografia",
      title: "Biglietto da visita - Fotografia",
      category: "Grafica",
      img: "images/biglietto-fotografa.jpg",
      date: "2 agosto 2022",
      tag: "biglietti-da-visita / fotografia",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un biglietto da visita con informazioni di contatto e social",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Biglietto da visita fotografia",
          img: "../images/biglietto-fotografa.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Gaurika Fratticci",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Fotografia",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Partendo dai requisiti del cliente ho progettato il biglietto da visita su Canva per poi ultimarlo su Photoshop. Il QR code rimanda direttamente al profilo Facebook per visualizzare gli album e i lavori.",
    },
    {
      id: "buono-natalizio-fotografia",
      title: "Buono natalizio - Fotografia",
      category: "Grafica",
      img: "images/buono-natale-fotografa.jpg",
      date: "2 agosto 2022",
      tag: "buoni-natalizi / fotografia",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un buono natalizio da donare digitalmente o in formato cartaceo ai clienti",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Buono natalizio in stile macchina fotografica",
          img: "../images/buono-natale-fotografa.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Gaurika Fratticci",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Fotografia",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Ho progettato il buono natalizio su Canva per poi ultimarlo su Photoshop. In particolare l'ho reso componibile con diverse fotografie fornite dal cliente, in modo che ogni buono sia unico e originale.",
    },
    {
      id: "evento-gastronomico-musicale",
      title: "Evento gastronomico e musicale",
      category: "Grafica",
      img: "images/evento-gastronomico-musicale.jpg",
      date: "2 agosto 2022",
      tag: "eventi / musica / social",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design della locandina cartacea riguardante un evento gastronomico e musicale locale",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Locandina e post evento musicale",
          img: "../images/evento-gastronomico-musicale.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Azienda Agricola Milocco",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Enogastronomia",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Ho progettato la locandina e l'immagine per il post su Canva per poi ultimarli su Photoshop. L'evento è stato sponsorizzato, con molto successo, su Facebook e Instagram.",
    },
    {
      id: "logo-fotografia",
      title: "Logo - Fotografia",
      category: "Grafica",
      img: "images/logo-fotografa.jpg",
      date: "2 agosto 2022",
      tag: "loghi / fotografia",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un logo per una fotografa professionista locale",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Logo fotografa",
          img: "../images/logo-fotografa.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Gaurika Fratticci",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Fotografia",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Adobe Illustrator"],
      description:
        "Ho progettato il logo su Illustrator a partire dall'idea del cliente. In particolare ho reso vettoriale un'immagine che ho ricavato con Photoshop da uno schizzo a matita.",
    },
    {
      id: "logo-giardinaggio",
      title: "Logo giardinaggio",
      category: "Grafica",
      img: "images/logo-giardinaggio.jpg",
      date: "2 agosto 2022",
      tag: "loghi / giardinaggio",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un logo per un'agriturismo che offre anche servizi di giardinaggio",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Logo azienda giardinaggio",
          img: "../images/logo-giardinaggio.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Azienda Agricola Milocco",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Giardinaggio",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Adobe Illustrator"],
      description:
        "Ho progettato il logo a partire da quello dell'azienda agricola, mantenendone colori e stile. Il logo è stato sviluppato vettorialmente con Illustrator.",
    },
    {
      id: "invito-matrimonio-elegante",
      title: "Invito matrimonio - Stile elegante",
      category: "Grafica",
      img: "images/matrimonio-elegante.jpg",
      date: "2 agosto 2022",
      tag: "inviti / matrimoni",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un invito per un matrimonio dallo stile semplice ma elegante",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Invito matrimonio elegante",
          img: "../images/matrimonio-elegante.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva"],
      description:
        "Il biglietto è una delle tre bozze proposte alla coppia di sposi in base alle loro richieste, dai toni chiari ed eleganti.",
    },
    {
      id: "invito-matrimonio-limoni",
      title: "Invito matrimonio - Tema limoni",
      category: "Grafica",
      img: "images/matrimonio-limoni.jpg",
      date: "2 agosto 2022",
      tag: "inviti / matrimoni",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un invito per un matrimonio dal tema estivo con decorazione limoni",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Invito matrimonio limoni",
          img: "../images/matrimonio-limoni.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva"],
      description:
        "Il biglietto è una delle tre bozze proposte alla coppia di sposi in base alle loro richieste, dallo stile estivo e in particolare a tema limoni.",
    },
    {
      id: "invito-matrimonio-porcellane",
      title: "Invito matrimonio - Tema porcellane",
      category: "Grafica",
      img: "images/matrimonio-porcellane.jpg",
      date: "2 agosto 2022",
      tag: "inviti / matrimoni",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un invito per un matrimonio dal tema porcellane del Sud Italia",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Invito matrimonio porcellane",
          img: "../images/matrimonio-porcellane.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva"],
      description:
        "Il biglietto è una delle tre bozze proposte alla coppia di sposi in base alle loro richieste, in particolare a tema porcellane del Sud Italia.",
    },
    {
      id: "portfolio-fotografia",
      title: "Portfolio - Fotografia",
      category: "Grafica",
      img: "images/portfolio-fotografa.jpg",
      date: "2 agosto 2022",
      tag: "portfolio / fotografia",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails: "Design di un portfolio digitale e cartaceo",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Portfolio fotografa",
          img: "../images/portfolio-fotografa.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Gaurika Fratticci",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Fotografia",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Adobe InDesign", "Adobe Photoshop"],
      description:
        "Ho progettato il portfolio in modo che potesse essere consultato sia digitalmente come PDF sia in formato cartaceo A5. Racchiude una selezione dei migliori scatti del cliente.",
    },
    {
      id: "post-evento-enogastronomico",
      title: "Post evento enogastronomico",
      category: "Social",
      img: "images/post-enogastronomico.jpg",
      date: "2 agosto 2022",
      tag: "post / enogastronomia",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un post per un evento enogastronomico locale",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Post social enogastronomico",
          img: "../images/post-enogastronomico.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Azienda Agricola Milocco",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Enogastronomia",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva"],
      description:
        "Ho creato il post su Canva utilizzando i loghi del cliente e dei collaboratori.",
    },
    {
      id: "volantino-agriturismo-giardinaggio",
      title: "Volantino agriturismo e giardinaggio",
      category: "Grafica",
      img: "images/volantino-agriturismo-giardinaggio.jpg",
      date: "2 agosto 2022",
      tag: "volantini / enogastronomia / giardinaggio",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Design di un volantino stampabile sui servizi offerti da una piccola azienda locale",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Volantino gastronomia e giardinaggio",
          img: "../images/volantino-agriturismo-giardinaggio.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Azienda Agricola Milocco",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Enogastronomia / Giardinaggio",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Ho creato il volantino con Canva e Photoshop racchiudendo in un formato fronte e retro i servizi enogastronomici e di giardinaggio offerti dal cliente.",
    },
    {
      id: "sito-web-azienda-agricola",
      title: "Sito web azienda agricola",
      category: "Web",
      img: "images/miloccowines/miloccowines.jpg",
      date: "2 agosto 2022",
      tag: "siti web / enogastronomia / giardinaggio",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Sviluppo di un sito web per un'azienda agricola locale",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Sito web azienda agricola",
          img: "../images/miloccowines/miloccowines.jpg",
        },
        {
          id: uuidv4(),
          title: "Preview del sito",
          img: "../images/miloccowines/website-preview.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Azienda Agricola Milocco",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Enogastronomia / Giardinaggio",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["WordPress"],
      description:
        "Il sito, creato con WordPress, è una vetrina dei vini, dei prodotti e dei servizi di giardinaggio offerti dall’azienda agricola, nonchè un catalogo aggiornato dei prodotti disponibili nello shop e per la consegna a domicilio.",
    },
    {
      id: "portale-gestione-volontari",
      title: "Portale gestione volontari",
      category: "Web",
      img: "images/pgv/pgv-website-preview.jpg",
      date: "2 agosto 2022",
      tag: "app web / volontari / protezione civile",
      clientTitle: "Cliente",
      objectivesTitle: "Obiettivo",
      objectivesDetails:
        "Sviluppo di un portale di gestione dei membri e delle attività di volontariato",
      techTitle: "Tecnologie",
      detailsTitle: "Attività",
      projectImages: [
        {
          id: uuidv4(),
          title: "Sito web azienda agricola",
          img: "../images/pgv/pgv-website-preview.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nome",
          details: "Portezione Civile Buttrio",
        },
        {
          id: uuidv4(),
          title: "Settore",
          details: "Volontariato",
        },
        {
          id: uuidv4(),
          title: "Sito web",
          details: "-",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "-",
        },
      ],
      technologies: ["Python", "Flask", "UIkit 3"],
      description:
        "Ho realizzato questa applicazione web per la Protezione Civile del mio paese. Per lo sviluppo ho utilizzato il framework Python Flask e la libreria CSS UIkit 3. Permette la gestione dei membri e delle attività di volontariato sul territorio comunale e non.",
    },
  ],

  clientsHeading: "Some of the brands I worked with",
  clients: [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ],

  aboutHeading: "Qualche parola su di me",
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Ciao, sono Alan Quaino! Lavoro come sviluppatore Web in un'azienda \
        che si occupa di ottimizzazione e gestione dei flussi logistici di \
        magazzino. Sono un grande appassionato di auto, soprattutto di \
        <i>youngtimer</i>, e nel tempo libero mi piace stare all'aperto e \
        immergermi nella natura.",
    },
  ],

  categories: [
    {
      id: uuidv4(),
      value: "graphics",
      name: "Grafica",
    },
    {
      id: uuidv4(),
      value: "social",
      name: "Social",
    },
    {
      id: uuidv4(),
      value: "web",
      name: "Web",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};
