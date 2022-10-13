export default {
  pages: {
    index: {
      title: "Chi sono",
      aboutMeTitle: "Qualche parola su di me",
      aboutMeDescr:
        "Ciao, sono Alan Quaino! Lavoro come sviluppatore web in un'azienda che si occupa di ottimizzazione e gestione dei flussi logistici di magazzino. Sono un grande appassionato di auto, soprattutto di <i>youngtimer</i>, e nel tempo libero mi piace stare all'aperto e immergermi nella natura. Se vuoi saperne di più, consulta il mio <a class='italic' href='/CV Alan Quaino 20210811.pdf' target='_blank' >curriculum vitae</a> o i miei profili social.",
      infoPills: {
        age: { key: "Età", value: null },
        place: { key: "Luogo", value: "Udine e dintorni" },
        interests: {
          key: "Interessi",
          value: "Auto, Natura, Sport, Storia, Tecnologia, Viaggi",
        },
        education: { key: "Istruzione", value: "Liceo Scientifico" },
        qualification: {
          key: "Titolo di studio",
          value: "Laurea breve in Informatica",
        },
        email: { key: "Email", value: null },
        phone: { key: "Telefono", value: null },
      },
      igButton: "Altro",
    },
    services: {
      title: "Servizi",
      servicesGridTitle: "Cosa mi piace fare",
      servicesGrid: {
        development: {
          title: "Sviluppo web",
          descr:
            "Progettazione, sviluppo e messa in produzione di siti e applicazioni online",
        },
        websites: {
          title: "Gestione siti",
          descr:
            "Gestione, aggiornamento e manutenzione di siti web già esistenti",
        },
        graphics: {
          title: "Grafica 2D",
          descr:
            "Design e creazione di loghi, locandine, banner e biglietti da visita",
        },
      },
      toolsTitle: "Con quali strumenti",
      toolsDescr:
        "Creo siti web con WordPress e WooCommerce, ma so sviluppare le mie applicazioni con framework frontend e backend come VueJS e Flask. Mi trovo a mio agio anche con strumenti di editing grafico e video, come Photoshop, Illustrator e Premiere.",
    },
    projects: {
      title: "Progetti",
      projectsGridTitle: "Alcuni dei miei progetti",
      projectsGridDescr: "Una breve lista dei miei lavori più recenti",
      searchPlaceholder: "Cerca tra i progetti",
      filterAll: "Tutti",
    },
    contact: {
      title: "Contatti",
      contactFormTitle: "Scrivimi",
      contactFormDescr:
        "Qualche idea? Scrivimi una email compilando il form sottostante",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "La tua email",
      subjectPlaceholder: "La tua richiesta",
      messagePlaceholder: "Il tuo messaggio",
      sendButton: "Invia",
      feedbackSuccess:
        "Grazie per avermi contattato! Risponderò al più presto.",
      feedbackError: "Si è verificato un errore. Riprova più tardi.",
      contactsTitle: "Contattami",
    },
    project: {
      client: "Cliente",
      name: "Nome",
      sector: "Settore",
      website: "Sito web",
      target: "Obiettivo",
      technologies: "Tecnologie",
      activities: "Attività",
      relatedProjects: "Progetti correlati",
      noRelProjects: "Nessun progetto correlato",
    },
  },
  components: {
    AppFooter: {
      title: "Seguimi",
    },
    FooterCopyright: {
      madeWith: "Sviluppato con",
      cookieNotice:
        "Questo sito non fa uso di cookie e non raccoglie dati sensibili di alcun tipo",
    },
  },
  store: {
    contacts: {
      place: "Udine e dintorni",
    },
    sectors: {
      photography: "Fotografia",
      foodAndWine: "Enogastronomia",
      gardening: "Giardinaggio",
      volunteering: "Volontariato",
      cleaning: "Pulizie",
    },
    categories: {
      graphics: "Grafica",
      social: "Social",
      web: "Web",
    },
  },
};
