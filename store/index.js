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
      name: "Azienda Agricola milocco",
      sector: "foodAndWine",
      website: "https://miloccowines.com",
    },
    giardinaggioMilocco: {
      name: "Azienda Agricola milocco",
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
      id: "biglietto-da-visita-fotografia",
      title: "Biglietto da visita - Fotografia",
      categories: ["graphics"],
      img: "/images/biglietto-fotografa.jpg",
      date: "2022/08/02",
      /* tag: "biglietti-da-visita / fotografia", */
      targetDetails:
        "Design di un biglietto da visita con informazioni di contatto e social",
      projectImages: [
        {
          title: "Biglietto da visita fotografia",
          img: "/images/biglietto-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Partendo dai requisiti del cliente ho progettato il biglietto da visita su Canva per poi ultimarlo su Photoshop. Il QR code rimanda direttamente al profilo Facebook per visualizzare gli album e i lavori.",
    },
    {
      id: "buono-natalizio-fotografia",
      title: "Buono natalizio - Fotografia",
      categories: ["graphics"],
      img: "/images/buono-natale-fotografa.jpg",
      date: "2022/08/02",
      /* tag: "buoni-natalizi / fotografia", */
      targetDetails:
        "Design di un buono natalizio da donare digitalmente o in formato cartaceo ai clienti",
      projectImages: [
        {
          title: "Buono natalizio in stile macchina fotografica",
          img: "/images/buono-natale-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Ho progettato il buono natalizio su Canva per poi ultimarlo su Photoshop. In particolare l'ho reso componibile con diverse fotografie fornite dal cliente, in modo che ogni buono sia unico e originale.",
    },
    {
      id: "evento-gastronomico-musicale",
      title: "Evento gastronomico e musicale",
      categories: ["graphics", "social"],
      img: "/images/evento-gastronomico-musicale.jpg",
      date: "2022/08/02",
      /* tag: "eventi / musica / social", */
      targetDetails:
        "Design della locandina cartacea riguardante un evento gastronomico e musicale locale",
      projectImages: [
        {
          title: "Locandina e post evento musicale",
          img: "/images/evento-gastronomico-musicale.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Ho progettato la locandina e l'immagine per il post su Canva per poi ultimarli su Photoshop. L'evento è stato sponsorizzato, con molto successo, su Facebook e Instagram.",
    },
    {
      id: "logo-fotografia",
      title: "Logo - Fotografia",
      categories: ["graphics"],
      img: "/images/logo-fotografa.jpg",
      date: "2022/08/02",
      /* tag: "loghi / fotografia", */
      targetDetails:
        "Design di un logo per una fotografa professionista locale",
      projectImages: [
        {
          title: "Logo fotografa",
          img: "/images/logo-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Adobe Illustrator"],
      description:
        "Ho progettato il logo su Illustrator a partire dall'idea del cliente. In particolare ho reso vettoriale un'immagine che ho ricavato con Photoshop da uno schizzo a matita.",
    },
    {
      id: "logo-giardinaggio",
      title: "Logo giardinaggio",
      categories: ["graphics"],
      img: "/images/logo-giardinaggio.jpg",
      date: "2022/08/02",
      /* tag: "loghi / giardinaggio", */
      targetDetails:
        "Design di un logo per un'agriturismo che offre anche servizi di giardinaggio",
      projectImages: [
        {
          title: "Logo azienda giardinaggio",
          img: "/images/logo-giardinaggio.jpg",
        },
      ],
      customer: "giardinaggioMilocco",
      technologies: ["Adobe Illustrator"],
      description:
        "Ho progettato il logo a partire da quello dell'azienda agricola, mantenendone colori e stile. Il logo è stato sviluppato vettorialmente con Illustrator.",
    },
    {
      id: "invito-matrimonio-elegante",
      title: "Invito matrimonio - Stile elegante",
      categories: ["graphics"],
      img: "/images/matrimonio-elegante.jpg",
      date: "2022/08/02",
      /* tag: "inviti / matrimoni", */
      targetDetails:
        "Design di un invito per un matrimonio dallo stile semplice ma elegante",
      projectImages: [
        {
          title: "Invito matrimonio elegante",
          img: "/images/matrimonio-elegante.jpg",
        },
      ],
      customer: "empty",
      technologies: ["Canva"],
      description:
        "Il biglietto è una delle tre bozze proposte alla coppia di sposi in base alle loro richieste, dai toni chiari ed eleganti.",
    },
    {
      id: "invito-matrimonio-limoni",
      title: "Invito matrimonio - Tema limoni",
      categories: ["graphics"],
      img: "/images/matrimonio-limoni.jpg",
      date: "2022/08/02",
      /* tag: "inviti / matrimoni", */
      targetDetails:
        "Design di un invito per un matrimonio dal tema estivo con decorazione limoni",
      projectImages: [
        {
          title: "Invito matrimonio limoni",
          img: "/images/matrimonio-limoni.jpg",
        },
      ],
      customer: "empty",
      technologies: ["Canva"],
      description:
        "Il biglietto è una delle tre bozze proposte alla coppia di sposi in base alle loro richieste, dallo stile estivo e in particolare a tema limoni.",
    },
    {
      id: "invito-matrimonio-porcellane",
      title: "Invito matrimonio - Tema porcellane",
      categories: ["graphics"],
      img: "/images/matrimonio-porcellane.jpg",
      date: "2022/08/02",
      /* tag: "inviti / matrimoni", */
      targetDetails:
        "Design di un invito per un matrimonio dal tema porcellane del Sud Italia",
      projectImages: [
        {
          title: "Invito matrimonio porcellane",
          img: "/images/matrimonio-porcellane.jpg",
        },
      ],
      customer: "empty",
      technologies: ["Canva"],
      description:
        "Il biglietto è una delle tre bozze proposte alla coppia di sposi in base alle loro richieste, in particolare a tema porcellane del Sud Italia.",
    },
    {
      id: "portfolio-fotografia",
      title: "Portfolio - Fotografia",
      categories: ["graphics"],
      img: "/images/portfolio-fotografa.jpg",
      date: "2022/08/02",
      /* tag: "portfolio / fotografia", */
      targetDetails: "Design di un portfolio digitale e cartaceo",
      projectImages: [
        {
          title: "Portfolio fotografa",
          img: "/images/portfolio-fotografa.jpg",
        },
      ],
      customer: "gaurika",
      technologies: ["Adobe InDesign", "Adobe Photoshop"],
      description:
        "Ho progettato il portfolio in modo che potesse essere consultato sia digitalmente come PDF sia in formato cartaceo A5. Racchiude una selezione dei migliori scatti del cliente.",
    },
    {
      id: "post-evento-enogastronomico",
      title: "Post evento enogastronomico",
      categories: ["social"],
      img: "/images/post-enogastronomico.jpg",
      date: "2022/08/02",
      /* tag: "post / enogastronomia", */
      targetDetails: "Design di un post per un evento enogastronomico locale",
      projectImages: [
        {
          title: "Post social enogastronomico",
          img: "/images/post-enogastronomico.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["Canva"],
      description:
        "Ho creato il post su Canva utilizzando i loghi del cliente e dei collaboratori.",
    },
    {
      id: "volantino-agriturismo-giardinaggio",
      title: "Volantino agriturismo e giardinaggio",
      categories: ["graphics"],
      img: "/images/volantino-agriturismo-giardinaggio.jpg",
      date: "2022/08/02",
      /* tag: "volantini / enogastronomia / giardinaggio", */
      targetDetails:
        "Design di un volantino stampabile sui servizi offerti da una piccola azienda locale",
      projectImages: [
        {
          title: "Volantino gastronomia e giardinaggio",
          img: "/images/volantino-agriturismo-giardinaggio.jpg",
        },
      ],
      customer: "agriturismoMilocco",
      technologies: ["Canva", "Adobe Photoshop"],
      description:
        "Ho creato il volantino con Canva e Photoshop racchiudendo in un formato fronte e retro i servizi enogastronomici e di giardinaggio offerti dal cliente.",
    },
    {
      id: "sito-web-azienda-agricola",
      title: "Sito web azienda agricola",
      categories: ["web"],
      img: "/images/miloccowines/miloccowines.jpg",
      date: "2022/08/02",
      /* tag: "siti web / enogastronomia / giardinaggio", */
      targetDetails: "Sviluppo di un sito web per un'azienda agricola locale",
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
      description:
        "Il sito, creato con WordPress, è una vetrina dei vini, dei prodotti e dei servizi di giardinaggio offerti dall’azienda agricola, nonchè un catalogo aggiornato dei prodotti disponibili nello shop e per la consegna a domicilio.",
    },
    {
      id: "portale-gestione-volontari",
      title: "Portale gestione volontari",
      categories: ["web"],
      img: "/images/pgv/pgv-website-preview.jpg",
      date: "2022/08/02",
      /* tag: "app web / volontari / protezione civile", */
      targetDetails:
        "Sviluppo di un portale di gestione dei membri e delle attività di volontariato",
      projectImages: [
        {
          title: "Sito web azienda agricola",
          img: "/images/pgv/pgv-website-preview.jpg",
        },
      ],
      customer: "protezioneCivileButtrio",
      technologies: ["Python", "Flask", "UIkit 3"],
      description:
        "Ho realizzato questa applicazione web per la Protezione Civile del mio paese. Per lo sviluppo ho utilizzato il framework Python Flask e la libreria CSS UIkit 3. Permette la gestione dei membri e delle attività di volontariato sul territorio comunale e non.",
    },
    {
      id: "sito-web-azienda-pulizie",
      title: "Sito web azienda di pulizie",
      categories: ["web"],
      img: "/images/lindasrl/lindasrl-website-preview.jpg",
      date: "2022/10/05",
      /* tag: "siti web / pulizie ", */
      targetDetails: "Restyling del sito web di un'azienda di pulizie locale",
      projectImages: [
        {
          title: "Sito web azienda di pulizie",
          img: "/images/lindasrl/lindasrl-website-preview.jpg",
        },
      ],
      customer: "lindaSrl",
      technologies: ["WordPress"],
      description:
        "Il sito, creato con WordPress, illustra le caratteristiche e peculiarità dell'azienda nonchè i servizi di pulizia offerti. Vengono mostrati, inoltre, anche i prodotti in vendita, acquistabili direttamente in negozio.",
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
