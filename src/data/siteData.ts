import { ServiceItem, GalleryItem, CourseItem, FeedbackItem, StudioFeature, FaqItem, BookingNotice } from '../types';

export const siteConfig = {
  name: 'Naielly Beauty Center',
  expertName: 'Naielly Silva',
  instagramHandle: '@naielly_beauty',
  instagramUrl: 'https://www.instagram.com/naielly_beauty/',
  whatsappUrl: 'https://api.whatsapp.com/message/P27E4TQGKXOBN1?autoload=1&app_absent=0&utm_source=ig',
  // Se a Naielly informar um número direto no futuro, basta preencher aqui (ex: '14131234567')
  whatsappPhone: '',
  squareBookingUrl: 'https://naielly-beauty-center.square.site/',
  address: 'Naielly Beauty Center • 20 Florida St #A, Springfield, MA 01109-3903, United States',
  addressShort: '20 Florida St #A, Springfield, MA 01109',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=20+Florida+St+Springfield+MA+01109',
  googleMapsEmbed: 'https://www.google.com/maps?q=20+Florida+St,+Springfield,+MA+01109&output=embed',
  reelCourseUrl: 'https://www.instagram.com/reel/DW7jNKtAMvW/embed',
  reelInstagramUrl: 'https://www.instagram.com/reel/DXxlRUohN14/embed',
  heroImage: 'https://i.ibb.co/YT2xKQ53/683000192-18112063162874725-3245755450275828541-n.webp',
  aboutImage: 'https://i.ibb.co/pvvcWD9M/Save-Clip-App-708987166-18115237930874725-3738039257470691622-n-convertido-de-jpg.webp',
  courseImage: 'https://i.ibb.co/Mx5CvMKG/Save-Clip-App-731078834-18118731235874725-6313001907997240665-n-convertido-de-jpg-convertido-de-jpg.webp',
  studioLogo: 'https://i.ibb.co/8GbfHQK/Improve-photo-quality-and-center-2-K-20261027080309.webp',
  licenses: '', // Deixado opcional, exibe se preenchido
  openingHours: '', // Opcional
  parking: '', // Opcional
};

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    url: 'https://i.ibb.co/DDDGptdC/Edit-photo-removing-business-and-2-K-20261026191454.webp',
    alt: 'Extensão de cílios e olhar expressivo por Naielly Silva',
    caption: 'Extensão de cílios com volume delicado e precisão'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/sdSJTRKZ/Improve-photo-quality-2-K-20261026191445.webp',
    alt: 'Design de sobrancelhas e harmonização facial',
    caption: 'Alinhamento e definição natural das sobrancelhas'
  },
  {
    id: 3,
    url: 'https://i.ibb.co/tw4dJVTp/Edit-photo-and-remove-border-2-K-20261027072618.webp',
    alt: 'Maquiagem sofisticada e pele radiante',
    caption: 'Make social iluminada para ocasiões inesquecíveis'
  },
  {
    id: 4,
    url: 'https://i.ibb.co/twcg8sCq/Captura-de-tela-2026-10-27-074152.webp',
    alt: 'Cuidado facial e revitalização da pele',
    caption: 'Tratamentos de pele e hidratação profunda'
  },
  {
    id: 5,
    url: 'https://i.ibb.co/67gsskDJ/Captura-de-tela-2026-10-27-074408.webp',
    alt: 'Epilação delicada e acabamento impecável',
    caption: 'Técnicas de epilação com suavidade e respeito à pele'
  },
  {
    id: 6,
    url: 'https://i.ibb.co/4RhqNTHn/Captura-de-tela-2026-10-27-074313.webp',
    alt: 'Transformação do olhar com técnica brasileira',
    caption: 'Valorização da beleza única de cada cliente'
  }
];

export const studioPhotos = [
  {
    id: 1,
    url: 'https://i.ibb.co/PvBGJ0KJ/Editing-and-removing-objects-fro-2-K-20261027081239.webp',
    alt: 'Ambiente aconchegante e esterilizado do Naielly Beauty Center'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/1YPkZmMG/Save-Clip-App-517245767-18082067743874725-9086877290764900222-n.webp',
    alt: 'Maca ergonômica e estação de procedimentos de alta precisão'
  },
  {
    id: 3,
    url: 'https://i.ibb.co/kVDhtk24/Save-Clip-App-516664276-18081886651874725-4199618130209200467-n.webp',
    alt: 'Detalhes e produtos de qualidade premium no studio'
  }
];

export const translations = {
  pt: {
    seo: {
      title: 'Naielly Beauty | Cílios, Sobrancelhas, Maquiagem e Epilação em Springfield, MA',
      desc: 'Extensão de cílios, sobrancelhas, maquiagem, noivas e epilação em Springfield, MA, com a Brazilian Beauty Expert Naielly Silva. Agende o seu horário.'
    },
    nav: {
      services: 'Serviços',
      gallery: 'Galeria',
      about: 'Sobre',
      instagram: 'Instagram',
      reviews: 'Avaliações',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Agendar',
      langLabel: 'Ler em português',
      skipToContent: 'Ir para o conteúdo principal'
    },
    hero: {
      eyebrow: 'LASHES • BROWS • MAKEUP • BRIDALS • SPRINGFIELD, MA 🇧🇷🇺🇸',
      titlePart1: 'Realce a beleza que já é sua, com a ',
      titleHighlight: 'assinatura de uma Brazilian Beauty Expert',
      subtitle: 'Cílios, sobrancelhas, maquiagem, noivas e epilação em Springfield, MA, com mais de 10 anos de experiência e um olhar feito para valorizar o natural.',
      ctaPrimary: 'Agendar meu horário',
      ctaSecondary: 'Ver serviços',
      card1: 'Springfield, MA: 20 Florida St #A',
      card1Sub: 'Abrir no Google Maps',
      card2: 'Brazilian Beauty Expert',
      card2Sub: '+10 anos realçando a beleza natural',
      card3: 'Noivas e eventos',
      card3Sub: 'Teste prévio e dia da noiva exclusivo'
    },
    services: {
      title: 'Um cuidado para cada detalhe da sua beleza',
      subtitle: 'Do olhar à pele, escolha o serviço ideal com uma profissional que valoriza o seu natural.',
      categories: {
        cilios: 'Cílios',
        sobrancelhas: 'Sobrancelhas',
        maquiagem: 'Maquiagem e Noivas',
        pele: 'Pele e Lábios',
        epilacao: 'Epilação'
      },
      bookButton: 'Agendar',
      bookOnlineButton: 'Agendar Online',
      sectionCta: 'Agendar meu horário',
      disclaimer: 'Valores em USD, sujeitos a alteração. Avaliação e teste de alergia (quando indicado) fazem parte do processo. Resultados e duração variam de pessoa para pessoa.',
      timeLabel: 'Duração aprox.:',
      items: [
        // Cílios
        {
          id: 'lash-ext',
          name: 'Extensão de cílios',
          description: 'Escolha o estilo: Fox Eyes, Brazilian Volume, Wispy, Brown Lashes ou Volume Médio. Manutenção: 15 dias $75, 20 dias $85; a partir de 23 dias, nova colocação.',
          price: 'A partir de $75',
          duration: '1 h 40+',
          group: 'cilios',
          image: galleryImages[0].url
        },
        {
          id: 'lash-lift',
          name: 'Lash Lift',
          description: 'Cílios naturais curvados e destacados, sem extensões.',
          price: '$80',
          duration: '1 h 20',
          group: 'cilios',
          image: galleryImages[0].url
        },
        {
          id: 'lash-remove',
          name: 'Remoção de cílios',
          description: 'Remoção cuidadosa e segura das extensões preservando os fios naturais.',
          price: '$20',
          duration: '30 min',
          group: 'cilios',
          image: galleryImages[0].url
        },
        // Sobrancelhas
        {
          id: 'brow-design',
          name: 'Design de sobrancelhas',
          description: 'Mapeamento e alinhamento para realçar o formato natural do seu rosto.',
          price: 'Valor sob consulta',
          duration: '45 min',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-henna',
          name: 'Design com henna',
          description: 'Design com henna para preencher falhas e definir o desenho com suavidade.',
          price: 'Valor sob consulta',
          duration: '50 min',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-flow-up',
          name: 'Flow Up (Brow Lamination)',
          description: 'Fios alinhados e volumosos, com efeito natural. Pacote de 4 sessões por $200.',
          price: '$60',
          duration: '1 h 30',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-grow-up',
          name: 'Grow Up',
          description: 'Procedimento para apoiar o crescimento saudável das sobrancelhas, com retornos. Pacote de 4 retornos por $250. Resultados variam.',
          price: '$50',
          duration: '1 h 15',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-nano',
          name: 'Nano fios',
          description: 'Técnica de pigmentação fio a fio para um acabamento delicado e hiper-realista.',
          price: '$280',
          duration: '1 h 30',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-shadow',
          name: 'Micropigmentação Shadow',
          description: 'Pigmentação com efeito sombreado suave, garantindo aspecto preenchido e sofisticado.',
          price: 'Valor sob consulta',
          duration: '3 h 25',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-touchup',
          name: 'Retoque de micropigmentação',
          description: 'Retoque de manutenção para preservar a nitidez do desenho e a intensidade da cor.',
          price: '$150',
          duration: '1 h 40',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        // Maquiagem e Noivas
        {
          id: 'make-express',
          name: 'Maquiagem express',
          description: 'Make rápida e elegante para o dia a dia, reuniões ou um compromisso especial.',
          price: '$85',
          duration: '45 min',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-social',
          name: 'Make up social',
          description: 'Maquiagem completa e personalizada para eventos, formaturas e ocasiões especiais (exceto noivas).',
          price: '$100',
          duration: '1 h 30',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-babyliss',
          name: 'Babyliss',
          description: 'Cachos soltos ou ondas sofisticadas para completar o seu look com glamour.',
          price: '$35',
          duration: '30 min',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-bridal',
          name: 'Dia da noiva',
          description: 'Maquiagem do grande dia com teste pré-casamento. O espaço é disponibilizado com exclusividade para o seu dia ser leve e inesquecível. Cabeleireira parceira não inclusa.',
          price: 'Valor sob consulta',
          duration: 'Horário reservado',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-travel',
          name: 'Atendimento externo (Travel fee)',
          description: 'Taxa de deslocamento para atendimentos de noivas e eventos fora do studio.',
          price: 'A partir de $40',
          duration: 'Sob agendamento',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        // Pele e Lábios
        {
          id: 'skin-mini-facial',
          name: 'Mini facial',
          description: 'Limpeza e cuidado rápido para renovar e refrescar a textura da pele.',
          price: '$30',
          duration: '45 min',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-full-facial',
          name: 'Full facial',
          description: 'Facial completo para higienizar profundamente, hidratar e restaurar a luminosidade cutânea.',
          price: '$120',
          duration: '1 h 30',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-pump-lips',
          name: 'Pump Lips (Hidragloss)',
          description: 'Tratamento labial regenerador que hidrata profundamente e realça o viço natural dos lábios.',
          price: 'Valor sob consulta',
          duration: '1 h 15',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-dermaplaning',
          name: 'Dermaplaning',
          description: 'Esfoliação física suave que remove células mortas e pelos finos, deixando a pele incrivelmente lisa.',
          price: 'Valor sob consulta',
          duration: '45 min',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-microneedling',
          name: 'Microneedling',
          description: 'Estimulação de colágeno para apoiar a textura uniforme da pele, suavizar linhas finas e cicatrizes de acne.',
          price: 'Valor sob consulta',
          duration: '1 h',
          group: 'pele',
          image: galleryImages[3].url
        },
        // Epilação
        {
          id: 'wax-brazilian',
          name: 'Virilha completa (Brazilian wax)',
          description: 'Epilação íntima completa com cera morna de alta qualidade e técnica confortável.',
          price: '$60',
          duration: '45 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-full-leg',
          name: 'Perna inteira',
          description: 'Epilação das pernas completas com pele macia e duradoura.',
          price: '$45',
          duration: '40 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-half-leg',
          name: 'Meia perna',
          description: 'Epilação precisa da meia perna (panturrilhas e joelhos).',
          price: '$25',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-underarm',
          name: 'Axila',
          description: 'Epilação rápida e delicada das axilas com redução progressiva de pelos.',
          price: '$20',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-upper-lip',
          name: 'Buço',
          description: 'Epilação rápida e eficiente do buço com cera suave.',
          price: '$8',
          duration: '15 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-upper-lip-choice',
          name: 'Epilação de buço (linha ou wax)',
          description: 'Você escolhe a sua técnica preferida: linha egípcia ou cera morna.',
          price: '$10',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-threading-face',
          name: 'Epilação com linha (rosto)',
          description: 'Epilação facial completa com linha (threading), sem agredir a barreira da pele.',
          price: '$26',
          duration: '40 min',
          group: 'epilacao',
          image: galleryImages[4].url
        }
      ] as ServiceItem[]
    },
    gallery: {
      title: 'Detalhes que fazem toda a diferença',
      subtitle: 'Olhares, sobrancelhas e makes feitos com precisão e delicadeza.',
      cta: 'Quero um resultado assim',
      disclaimer: 'Resultados individuais podem variar.',
      closeLightbox: 'Fechar',
      prev: 'Anterior',
      next: 'Próxima'
    },
    about: {
      title: 'Conheça a Naielly Silva',
      subtitle: 'Uma brasileira em Springfield que transforma o cuidado com a beleza em confiança.',
      quote: '“Beleza não é esconder quem você é: é realçar o que já existe de mais bonito em você.”',
      quoteAuthor: 'Naielly Silva',
      p1: 'Para a Naielly, cada atendimento é um momento de acolhimento. Brasileira vivendo nos Estados Unidos, ela sabe o valor de ser bem recebida, ouvida e cuidada. Por isso, recebe cada cliente com carinho e atenção, para que você saia se sentindo mais bonita, mais segura e com a autoestima renovada.',
      p2: 'Brazilian Beauty Expert com mais de 10 anos de experiência, a Naielly é especialista em cílios, sobrancelhas, maquiagem, noivas, epilação e cuidados faciais, incluindo técnicas de micropigmentação. Com protocolos de higiene, olhar técnico e foco no resultado natural, também compartilha o seu conhecimento em cursos VIP.',
      stats: [
        { label: '+10 anos de experiência', desc: 'Dedicados ao realce natural' },
        { label: 'Brazilian Beauty Expert', desc: 'Técnica e acolhimento' },
        { label: 'Noivas e eventos', desc: 'Momentos especiais' },
        { label: 'Cursos VIP', desc: 'Capacitação prática' }
      ],
      licensesLabel: 'Licenças / Certificações:',
      cta: 'Agendar com a Naielly'
    },
    courses: {
      eyebrow: 'CURSOS VIP • FORMAÇÃO',
      title: 'Aprenda com quem vive a beleza todos os dias',
      subtitle: 'Cursos VIP para você dominar a técnica e se destacar, com acompanhamento próximo e o olhar de uma profissional experiente.',
      cta: 'Quero saber do curso VIP',
      defaultMsg: 'Olá, Naielly! 💛 Vi o seu site e tenho interesse nos cursos VIP. Gostaria de saber datas, conteúdo e como funciona.',
      items: [
        {
          id: 'course-brow',
          title: 'Curso de Design de Sobrancelhas',
          duration: '12h30 de carga horária',
          price: '$700',
          description: 'Aprenda mapeamento geométrico, simetria facial, aplicação correta de henna e técnicas para iniciar ou elevar sua carreira no mercado estético com excelência.'
        },
        {
          id: 'course-self-makeup',
          title: 'Curso de Automaquiagem',
          duration: '3h30 de prática direcionada',
          price: '$180',
          description: 'Descubra os produtos certos para o seu tipo de pele, prepare um visual impecável para o dia a dia e aprenda truques sofisticados para eventos e noites especiais.'
        }
      ] as CourseItem[]
    },
    instagram: {
      title: 'Acompanhe a Naielly por dentro do studio',
      subtitle: 'Transformações, bastidores e dicas de cuidado, todos os dias no Instagram.',
      followButton: 'Seguir no Instagram',
      bookButton: 'Agendar'
    },
    feedbacks: {
      title: 'Quem passa por aqui, volta',
      subtitle: 'Palavras de clientes que confiaram o seu olhar e a sua pele à Naielly.',
      cta: 'Quero viver essa experiência',
      disclaimer: 'Depoimentos de exemplo para demonstração de layout.',
      pauseAuto: 'Pausar',
      resumeAuto: 'Reproduzir',
      items: [
        {
          id: 1,
          name: 'Camila R.',
          service: 'Extensão de cílios',
          quote: 'Ficaram leves, naturais e lindos. A Naielly é cuidadosa em cada detalhe.',
          rating: 5
        },
        {
          id: 2,
          name: 'Sophie M.',
          service: 'Brow Lamination',
          quote: 'My brows look so polished and natural. A gentle, professional experience.',
          rating: 5
        },
        {
          id: 3,
          name: 'Fernanda L.',
          service: 'Dia da noiva',
          quote: 'Fez o meu grande dia leve e tranquilo. A make durou o dia inteiro.',
          rating: 5
        },
        {
          id: 4,
          name: 'Juliana P.',
          service: 'Epilação',
          quote: 'Atendimento rápido e delicado. Me senti super à vontade.',
          rating: 5
        },
        {
          id: 5,
          name: 'Emma T.',
          service: 'Maquiagem social',
          quote: 'Elegant makeup that looked like me, only better. Highly recommend!',
          rating: 5
        },
        {
          id: 6,
          name: 'Mariana S.',
          service: 'Curso VIP',
          quote: 'Aprendi com muita clareza e carinho. Saí confiante para aplicar.',
          rating: 5
        }
      ] as FeedbackItem[]
    },
    studio: {
      title: 'Um espaço criado para você relaxar e se renovar',
      subtitle: 'Higiene, conforto e tecnologia em Springfield, MA, em um ambiente acolhedor e reservado.',
      features: [
        { id: 'hygiene', title: 'Higiene rigorosa', description: 'Materiais esterilizados, descartáveis e ambiente impecável para sua segurança.' },
        { id: 'comfort', title: 'Conforto absoluto', description: 'Maca confortável, música ambiente suave e espaço climatizado para relaxar.' },
        { id: 'tech', title: 'Tecnologia & qualidade', description: 'Equipamentos modernos e cosméticos de grau profissional dermatológico.' },
        { id: 'privacy', title: 'Privacidade total', description: 'Atendimento individual e reservado para você se sentir inteiramente à vontade.' },
        { id: 'security', title: 'Segurança & protocolo', description: 'Avaliação detalhada prévia e protocolos alinhados aos padrões norte-americanos.' },
        { id: 'access', title: 'Fácil localização', description: 'Localizado na Florida St em Springfield, com acesso prático para toda a região.' }
      ] as StudioFeature[],
      addressCardTitle: 'Naielly Beauty Center',
      ctaDirections: 'Como chegar (Google Maps)',
      ctaBook: 'Agendar minha visita',
      pauseSlider: 'Pausar fotos',
      resumeSlider: 'Continuar fotos'
    },
    booking: {
      title: 'Seu momento de se cuidar começa aqui',
      subtitle: 'Escolha o serviço, veja a mensagem pronta e envie direto para a Naielly no WhatsApp.',
      guidelinesTitle: 'Orientações antes de agendar',
      notices: [
        {
          id: 'delay',
          iconName: 'clock',
          title: 'Atrasos & pontualidade',
          description: 'Chegue no horário marcado. Atrasos acima de 10 minutos podem reduzir o tempo do procedimento ou exigir reagendamento para respeitar as próximas clientes.'
        },
        {
          id: 'reschedule',
          iconName: 'calendar',
          title: 'Remarcação e cancelamento',
          description: 'Caso precise alterar a data ou cancelar seu horário, pedimos aviso prévio com pelo menos 24 horas de antecedência.'
        },
        {
          id: 'lashes-prep',
          iconName: 'eye',
          title: 'Cuidados para cílios',
          description: 'Compareça sem maquiagem ou rímel na região dos olhos. Informe com antecedência histórico de alergias ou sensibilidade ocular.'
        },
        {
          id: 'wax-prep',
          iconName: 'sparkles',
          title: 'Cuidados para epilação',
          description: 'Informe se estiver gestante, fazendo uso de ácidos ou tratamentos dermatológicos na área a ser epilada.'
        },
        {
          id: 'reference',
          iconName: 'camera',
          title: 'Foto de referência',
          description: 'Se você possui fotos do resultado ou estilo que deseja (cílios, formato de sobrancelhas ou maquiagem), envie no chat do WhatsApp.'
        },
        {
          id: 'privacy-room',
          iconName: 'heart',
          title: 'Atendimento reservado',
          description: 'Nosso espaço é preparado para tranquilidade e concentração. Sempre que possível, solicitamos vir desacompanhada.'
        }
      ] as BookingNotice[],
      formTitle: 'Montar solicitação de agendamento',
      nameLabel: 'Como gostaria de ser chamada(o)?',
      namePlaceholder: 'Seu nome completo',
      serviceLabel: 'Qual serviço deseja agendar?',
      serviceSelectPlaceholder: 'Selecione um serviço...',
      customOptions: {
        vipCourse: 'Curso VIP (Design ou Automaquiagem)',
        bridal: 'Dia da Noiva / Noivas e Eventos',
        undecided: 'Ainda não sei (gostaria de uma avaliação)'
      },
      dateLabel: 'Melhor data de preferência:',
      timeLabel: 'Melhor horário ou período:',
      timePlaceholder: 'Ex: Manhã (10h), Tarde (14h) ou Noite',
      firstTimeLabel: 'Primeira vez conosco?',
      firstTimeYes: 'Sim, primeira vez',
      firstTimeNo: 'Não, já sou cliente',
      referenceLabel: 'Tem foto de referência?',
      referenceYes: 'Sim, vou enviar na conversa',
      referenceNo: 'Não tenho foto no momento',
      notesLabel: 'Alergias ou algo que devemos saber? (opcional)',
      notesPlaceholder: 'Sensibilidade a produtos, lentes de contato, gravidez...',
      previewTitle: 'Mensagem pronta para o WhatsApp',
      copyButton: 'Copiar mensagem',
      openButton: 'Abrir o WhatsApp',
      copiedToast: 'Mensagem copiada! Cole na conversa.',
      helpText: 'O botão copia automaticamente o texto e abre o WhatsApp da Naielly. Basta colar na conversa e anexar a foto de referência!',
      defaultGreeting: 'Olá, Naielly! 💛 Vi o seu site e gostaria de agendar um horário.'
    },
    faq: {
      title: 'Perguntas frequentes',
      subtitle: 'Tudo o que você precisa saber antes de agendar.',
      cta: 'Agendar meu horário',
      items: [
        {
          id: 1,
          question: 'Como faço para agendar?',
          answer: 'Pelo WhatsApp oficial: preencha o mini formulário no site para montar sua mensagem ou clique diretamente no botão de agendamento. A Naielly confere a agenda e confirma o horário com você.'
        },
        {
          id: 2,
          question: 'Quais estilos de extensão de cílios existem?',
          answer: 'Fox Eyes, Brazilian Volume, Wispy, Brown Lashes e Volume Médio. Durante a sua consulta inicial, a Naielly avalia o formato dos seus olhos e a saúde dos fios naturais para indicar o modelo ideal.'
        },
        {
          id: 3,
          question: 'Quando devo fazer a manutenção dos cílios?',
          answer: 'A manutenção é recomendada aos 15 ou 20 dias, com pelo menos 50% dos fios presentes. A partir de 23 dias de aplicação, é considerada uma nova colocação completa.'
        },
        {
          id: 4,
          question: 'O que é o Flow Up (Brow Lamination)?',
          answer: 'Técnica de alinhamento e direcionamento dos fios das sobrancelhas para criar um visual mais volumoso, encorpado e definido, preservando a textura natural. Disponibilizamos pacote de 4 sessões por $200.'
        },
        {
          id: 5,
          question: 'O que é o procedimento Grow Up?',
          answer: 'Protocolo de tratamento capilar para sobrancelhas desenvolvido para estimular o crescimento saudável dos fios em áreas com falhas, acompanhado de retornos periódicos. Pacote de 4 retornos por $250. Os resultados variam de pessoa para pessoa.'
        },
        {
          id: 6,
          question: 'O que são Nano fios e Micropigmentação Shadow?',
          answer: 'São técnicas avançadas de pigmentação semipermanente nas sobrancelhas. Nano fios utiliza traços delicados que imitam fios reais, enquanto Shadow cria um sombreado sutil similar à maquiagem em pó. O plano ideal é definido na avaliação facial.'
        },
        {
          id: 7,
          question: 'Como funciona o Dia da Noiva?',
          answer: 'Inclui maquiagem personalizada para o grande dia e teste pré-casamento completo. O espaço do studio é disponibilizado com exclusividade para proporcionar momentos serenos e relaxantes à noiva. A cabeleireira parceira não está inclusa no pacote.'
        },
        {
          id: 8,
          question: 'Você atende fora do studio?',
          answer: 'Sim, realizamos atendimentos externos para eventos, noivas e produções especiais na região de Massachusetts, com taxa de deslocamento (travel fee) a partir de $40.'
        },
        {
          id: 9,
          question: 'O que é o Pump Lips (Hidragloss)?',
          answer: 'Tratamento de hidratação labial profunda com ativos regeneradores e ácido hialurônico, devolvendo brilho, maciez e vitalidade aos lábios sem alterar o volume estrutural.'
        },
        {
          id: 10,
          question: 'O que é o Microneedling?',
          answer: 'Procedimento estético que estimula a produção natural de colágeno através de microagulhamento, auxiliando a uniformizar a textura cutânea, suavizar linhas de expressão e atenuar cicatrizes de acne. Os resultados variam individualmente.'
        },
        {
          id: 11,
          question: 'Quais cursos VIP estão disponíveis?',
          answer: 'Oferecemos o Curso de Design de Sobrancelhas (carga horária de 12h30, $700) e o Curso de Automaquiagem (3h30 de duração, $180). Ambos incluem mentoria presencial direta com a Naielly.'
        },
        {
          id: 12,
          question: 'E se eu precisar remarcar ou cancelar meu horário?',
          answer: 'Pedimos que você avise com no mínimo 24 horas de antecedência pelo WhatsApp para podermos reorganizar a agenda e atender outra cliente que esteja na lista de espera.'
        },
        {
          id: 13,
          question: 'Onde fica o studio Naielly Beauty Center?',
          answer: 'Estamos localizados na 20 Florida St #A, Springfield, MA 01109-3903, United States. Fácil acesso para Springfield, Chicopee, Holyoke, Longmeadow e cidades vizinhas de Western MA.'
        }
      ] as FaqItem[]
    },
    atAGlance: {
      title: 'Em resumo • At a glance',
      content: 'Naielly Beauty Center é um studio de beleza em Springfield, Massachusetts, fundado pela Brazilian Beauty Expert Naielly Silva (+10 anos de experiência). Especializado em extensão de cílios (Lashes), sobrancelhas (Brow Lamination, Nano fios, micropigmentação), maquiagem social e Dia da Noiva, epilação facial e corporal (Brazilian wax e linha), tratamentos de pele (facials, microneedling), e cursos VIP de capacitação profissional em estética. Atendendo Springfield, Chicopee, Holyoke, West Springfield, Longmeadow, Agawam, Ludlow, Wilbraham, East Longmeadow e Western Massachusetts.'
    },
    floating: {
      label: 'Agendar'
    }
  },

  en: {
    seo: {
      title: 'Naielly Beauty | Lashes, Brows, Makeup & Brazilian Wax in Springfield, MA',
      desc: 'Eyelash extensions, brows, bridal makeup and waxing in Springfield, MA, by Brazilian Beauty Expert Naielly Silva. Book your appointment.'
    },
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      instagram: 'Instagram',
      reviews: 'Reviews',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Book Now',
      langLabel: 'Read in English',
      skipToContent: 'Skip to content'
    },
    hero: {
      eyebrow: 'LASHES • BROWS • MAKEUP • BRIDALS • SPRINGFIELD, MA 🇧🇷🇺🇸',
      titlePart1: 'Enhance the beauty that is already yours, with the ',
      titleHighlight: 'signature of a Brazilian Beauty Expert',
      subtitle: 'Lashes, brows, makeup, bridal and waxing in Springfield, MA, with over 10 years of experience and an eye for enhancing natural beauty.',
      ctaPrimary: 'Book My Appointment',
      ctaSecondary: 'View Services',
      card1: 'Springfield, MA: 20 Florida St #A',
      card1Sub: 'Open in Google Maps',
      card2: 'Brazilian Beauty Expert',
      card2Sub: '10+ years celebrating natural beauty',
      card3: 'Bridal & special occasions',
      card3Sub: 'Trial session & exclusive bridal day'
    },
    services: {
      title: 'Care for every detail of your beauty',
      subtitle: 'From eyes to skin, choose the ideal service with a professional who celebrates your natural beauty.',
      categories: {
        cilios: 'Lashes',
        sobrancelhas: 'Brows',
        maquiagem: 'Makeup & Bridal',
        pele: 'Skin & Lips',
        epilacao: 'Waxing'
      },
      bookButton: 'Book',
      bookOnlineButton: 'Book Online',
      sectionCta: 'Book My Appointment',
      disclaimer: 'Prices in USD, subject to change. Assessment and patch tests (when indicated) are part of the process. Individual results and retention vary.',
      timeLabel: 'Approx. duration:',
      items: [
        // Lashes
        {
          id: 'lash-ext',
          name: 'Lash extensions',
          description: 'Choose your preferred style: Fox Eyes, Brazilian Volume, Wispy, Brown Lashes, or Medium Volume. Refill: 15 days $75, 20 days $85; after 23 days, full set required.',
          price: 'From $75',
          duration: '1 h 40+',
          group: 'cilios',
          image: galleryImages[0].url
        },
        {
          id: 'lash-lift',
          name: 'Lash Lift',
          description: 'Naturally curled, lifted, and tinted lashes without extensions.',
          price: '$80',
          duration: '1 h 20',
          group: 'cilios',
          image: galleryImages[0].url
        },
        {
          id: 'lash-remove',
          name: 'Lash removal',
          description: 'Gentle and safe removal of lash extensions preserving natural lash health.',
          price: '$20',
          duration: '30 min',
          group: 'cilios',
          image: galleryImages[0].url
        },
        // Brows
        {
          id: 'brow-design',
          name: 'Eyebrow design',
          description: 'Facial mapping and precision shaping to enhance your unique facial contours.',
          price: 'Price on request',
          duration: '45 min',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-henna',
          name: 'Eyebrow design with henna',
          description: 'Precision shaping with gentle henna tinting to fill gaps and define clean brow lines.',
          price: 'Price on request',
          duration: '50 min',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-flow-up',
          name: 'Flow Up (Brow Lamination)',
          description: 'Sleek, feathered, fuller brows with a natural effect. 4-session package available for $200.',
          price: '$60',
          duration: '1 h 30',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-grow-up',
          name: 'Grow Up',
          description: 'Targeted procedure to encourage healthy brow regrowth with return checkups. 4-return package for $250. Results vary.',
          price: '$50',
          duration: '1 h 15',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-nano',
          name: 'Nano hair strokes',
          description: 'Delicate hair-by-hair pigmenting technique for a soft, ultra-realistic finish.',
          price: '$280',
          duration: '1 h 30',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-shadow',
          name: 'Shadow Micropigmentation',
          description: 'Soft powder ombre shading for beautifully filled and structured eyebrows.',
          price: 'Price on request',
          duration: '3 h 25',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-touchup',
          name: 'Micropigmentation Touch-up',
          description: 'Color and stroke enhancement touch-up to maintain vibrancy and definition.',
          price: '$150',
          duration: '1 h 40',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        // Makeup & Bridal
        {
          id: 'make-express',
          name: 'Express makeup',
          description: 'Quick, refined makeup ideal for meetings, daytime events, or everyday glow.',
          price: '$85',
          duration: '45 min',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-social',
          name: 'Social makeup',
          description: 'Full custom makeup for special events, celebrations, and formal evenings (excluding bridal).',
          price: '$100',
          duration: '1 h 30',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-babyliss',
          name: 'Babyliss styling',
          description: 'Loose curls and glamorous waves to complement your makeup look.',
          price: '$35',
          duration: '30 min',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-bridal',
          name: 'Bridal day',
          description: 'Flawless wedding makeup including a pre-wedding trial session. Studio space reserved exclusively for your serenity. Hair stylist partner not included.',
          price: 'Price on request',
          duration: 'Reserved',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-travel',
          name: 'Travel fee (On-location)',
          description: 'Travel fee for on-site makeup services outside the studio.',
          price: 'From $40',
          duration: 'By booking',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        // Skin & Lips
        {
          id: 'skin-mini-facial',
          name: 'Mini facial',
          description: 'Quick cleansing, exfoliation, and hydration to refresh skin texture.',
          price: '$30',
          duration: '45 min',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-full-facial',
          name: 'Full facial',
          description: 'Comprehensive facial treatment to deeply cleanse, hydrate, and revitalize your complexion.',
          price: '$120',
          duration: '1 h 30',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-pump-lips',
          name: 'Pump Lips (Hydragloss)',
          description: 'Nourishing lip hydration treatment that restores fullness, softness, and natural sheen.',
          price: 'Price on request',
          duration: '1 h 15',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-dermaplaning',
          name: 'Dermaplaning',
          description: 'Gentle physical exfoliation removing peach fuzz and dead cells for smooth, glowing skin.',
          price: 'Price on request',
          duration: '45 min',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-microneedling',
          name: 'Microneedling',
          description: 'Collagen induction treatment supporting skin texture, evening out scars, and smoothing fine lines.',
          price: 'Price on request',
          duration: '1 h',
          group: 'pele',
          image: galleryImages[3].url
        },
        // Waxing
        {
          id: 'wax-brazilian',
          name: 'Brazilian wax (Full bikini)',
          description: 'Complete bikini waxing using premium warm wax and gentle Brazilian technique.',
          price: '$60',
          duration: '45 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-full-leg',
          name: 'Full leg wax',
          description: 'Complete leg waxing for silky smooth, touchable skin.',
          price: '$45',
          duration: '40 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-half-leg',
          name: 'Half leg wax',
          description: 'Lower or upper leg waxing with long-lasting smoothness.',
          price: '$25',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-underarm',
          name: 'Underarm wax',
          description: 'Gentle, swift underarm waxing to progressively soften and reduce hair growth.',
          price: '$20',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-upper-lip',
          name: 'Upper lip wax',
          description: 'Quick, delicate upper lip waxing with sensitive-skin wax.',
          price: '$8',
          duration: '15 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-upper-lip-choice',
          name: 'Upper lip (Threading or Wax)',
          description: 'Choose your technique: Egyptian threading or warm wax.',
          price: '$10',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-threading-face',
          name: 'Face threading',
          description: 'Precise full face threading without chemical irritants.',
          price: '$26',
          duration: '40 min',
          group: 'epilacao',
          image: galleryImages[4].url
        }
      ] as ServiceItem[]
    },
    gallery: {
      title: 'Details that make all the difference',
      subtitle: 'Eyes, brows and makeup made with precision and delicacy.',
      cta: 'I Want a Look Like This',
      disclaimer: 'Individual results may vary.',
      closeLightbox: 'Close',
      prev: 'Previous',
      next: 'Next'
    },
    about: {
      title: 'Meet Naielly Silva',
      subtitle: 'A Brazilian in Springfield who turns beauty care into confidence.',
      quote: '“Beauty is not about hiding who you are: it is about enhancing the finest traits you already possess.”',
      quoteAuthor: 'Naielly Silva',
      p1: 'For Naielly, every appointment is a welcoming experience. As a Brazilian living in the United States, she knows how valuable it is to be warmly welcomed, truly heard, and meticulously cared for. She attends to each client with empathy and dedication, ensuring you leave feeling confident and renewed.',
      p2: 'A Brazilian Beauty Expert with over 10 years of experience, Naielly specializes in lashes, eyebrows, bridal makeup, waxing, and facial skincare, including micropigmentation. Following strict hygiene protocols with an artistic technical eye, she also shares her expertise in exclusive VIP training courses.',
      stats: [
        { label: '10+ Years Experience', desc: 'Dedicated to natural enhancement' },
        { label: 'Brazilian Beauty Expert', desc: 'Precision & warmth' },
        { label: 'Bridal & Events', desc: 'Memorable milestones' },
        { label: 'VIP Training', desc: 'Hands-on masterclasses' }
      ],
      licensesLabel: 'Licenses / Certifications:',
      cta: 'Book with Naielly'
    },
    courses: {
      eyebrow: 'VIP COURSES • CERTIFICATION',
      title: 'Learn from someone who lives beauty every day',
      subtitle: 'VIP courses to master the technique and stand out, with close guidance and the eye of an experienced professional.',
      cta: 'I want to know about the VIP course',
      defaultMsg: 'Hello Naielly! 💛 I saw your website and I am interested in your VIP training courses. I would love to know more about upcoming dates, syllabus, and enrollment.',
      items: [
        {
          id: 'course-brow',
          title: 'Eyebrow Design VIP Course',
          duration: '12h30 course load',
          price: '$700',
          description: 'Master facial symmetry, architectural brow mapping, correct henna application, and practical client management to launch or elevate your beauty career.'
        },
        {
          id: 'course-self-makeup',
          title: 'Self-Makeup VIP Course',
          duration: '3h30 hands-on coaching',
          price: '$180',
          description: 'Discover the ideal products for your skin tone, learn daily glowing techniques, and master smoky glam transitions for evening occasions.'
        }
      ] as CourseItem[]
    },
    instagram: {
      title: 'Follow Naielly inside the studio',
      subtitle: 'Transformations, behind the scenes and care tips, every day on Instagram.',
      followButton: 'Follow on Instagram',
      bookButton: 'Book'
    },
    feedbacks: {
      title: 'Those who visit return',
      subtitle: 'Words from clients who trusted Naielly with their look and skin.',
      cta: 'Experience this for yourself',
      disclaimer: 'Example testimonials displayed for visual review.',
      pauseAuto: 'Pause',
      resumeAuto: 'Play',
      items: [
        {
          id: 1,
          name: 'Camila R.',
          service: 'Lash extensions',
          quote: 'They felt weightless, natural, and gorgeous. Naielly is meticulous with every detail.',
          rating: 5
        },
        {
          id: 2,
          name: 'Sophie M.',
          service: 'Brow Lamination',
          quote: 'My brows look so polished and natural. A gentle, professional experience.',
          rating: 5
        },
        {
          id: 3,
          name: 'Fernanda L.',
          service: 'Bridal day',
          quote: 'She made my wedding morning peaceful and serene. Makeup lasted flawlessly all day.',
          rating: 5
        },
        {
          id: 4,
          name: 'Juliana P.',
          service: 'Waxing',
          quote: 'Fast, delicate, and virtually painless. I felt completely at ease from minute one.',
          rating: 5
        },
        {
          id: 5,
          name: 'Emma T.',
          service: 'Social makeup',
          quote: 'Elegant makeup that looked like me, only better. Highly recommend!',
          rating: 5
        },
        {
          id: 6,
          name: 'Mariana S.',
          service: 'VIP Course',
          quote: 'Learned with immense clarity and personal care. Walked out confident to start practicing.',
          rating: 5
        }
      ] as FeedbackItem[]
    },
    studio: {
      title: 'A space created for you to relax and renew',
      subtitle: 'Hygiene, comfort and technology in Springfield, MA, in a welcoming, private setting.',
      features: [
        { id: 'hygiene', title: 'Clinical hygiene', description: 'Autoclave-sterilized tools, disposable supplies, and pristine surfaces for total safety.' },
        { id: 'comfort', title: 'Complete comfort', description: 'Ergonomic treatment bed, soothing ambient music, and quiet climate-controlled space.' },
        { id: 'tech', title: 'Tech & quality', description: 'Top-tier dermatological skincare products and high-grade aesthetic equipment.' },
        { id: 'privacy', title: 'Private sanctuary', description: 'Dedicated one-on-one appointments without bustling crowds or waiting room chaos.' },
        { id: 'security', title: 'Safety protocols', description: 'Detailed health questionnaires and adherence to Massachusetts safety standards.' },
        { id: 'access', title: 'Prime access', description: 'Convenient Florida St location with easy connections throughout Western MA.' }
      ] as StudioFeature[],
      addressCardTitle: 'Naielly Beauty Center',
      ctaDirections: 'Get directions (Google Maps)',
      ctaBook: 'Book my visit',
      pauseSlider: 'Pause photos',
      resumeSlider: 'Resume photos'
    },
    booking: {
      title: 'Your moment of self-care starts here',
      subtitle: 'Choose your service, see the ready-made message and send it straight to Naielly on WhatsApp.',
      guidelinesTitle: 'Guidelines before booking',
      notices: [
        {
          id: 'delay',
          iconName: 'clock',
          title: 'Punctuality & delays',
          description: 'Please arrive on time. Delays over 10 minutes may shorten your treatment duration or require rescheduling out of respect for subsequent clients.'
        },
        {
          id: 'reschedule',
          iconName: 'calendar',
          title: 'Rescheduling & cancellations',
          description: 'If you need to reschedule or cancel your appointment, please provide at least 24 hours advance notice.'
        },
        {
          id: 'lashes-prep',
          iconName: 'eye',
          title: 'Lash appointment prep',
          description: 'Arrive with completely clean eyes free of mascara or eyeliner. Notify us in advance of any contact lenses or eye allergies.'
        },
        {
          id: 'wax-prep',
          iconName: 'sparkles',
          title: 'Waxing preparation',
          description: 'Inform us if you are pregnant or currently taking retinoids, Accutane, or skin-thinning prescription topicals.'
        },
        {
          id: 'reference',
          iconName: 'camera',
          title: 'Reference photos',
          description: 'If you have an inspiration photo of the brows, lashes, or makeup look you desire, feel free to send it in the WhatsApp chat.'
        },
        {
          id: 'privacy-room',
          iconName: 'heart',
          title: 'Quiet private suite',
          description: 'To maintain an intimate, calming environment, we kindly request clients attend appointments unaccompanied whenever possible.'
        }
      ] as BookingNotice[],
      formTitle: 'Compose Booking Request',
      nameLabel: 'What is your preferred name?',
      namePlaceholder: 'Your full name',
      serviceLabel: 'Which service would you like to book?',
      serviceSelectPlaceholder: 'Select a service...',
      customOptions: {
        vipCourse: 'VIP Course (Brow Design or Self-Makeup)',
        bridal: 'Bridal Day / Wedding Occasions',
        undecided: 'Not sure yet (I would like a consultation)'
      },
      dateLabel: 'Preferred appointment date:',
      timeLabel: 'Preferred time or period:',
      timePlaceholder: 'e.g., Morning (10am), Afternoon (2pm) or Evening',
      firstTimeLabel: 'Is this your first time with us?',
      firstTimeYes: 'Yes, first visit',
      firstTimeNo: 'No, returning client',
      referenceLabel: 'Do you have an inspiration photo?',
      referenceYes: 'Yes, I will send it in chat',
      referenceNo: 'No reference photo right now',
      notesLabel: 'Allergies or important medical notes? (optional)',
      notesPlaceholder: 'Sensitivities, contact lenses, pregnancy...',
      previewTitle: 'Live WhatsApp Message Preview',
      copyButton: 'Copy Message',
      openButton: 'Open WhatsApp',
      copiedToast: 'Message copied! Paste it in the chat.',
      helpText: 'The button automatically copies this message and opens WhatsApp. Simply paste it into the conversation and attach your reference photo!',
      defaultGreeting: 'Hello Naielly! 💛 I saw your website and would love to schedule an appointment.'
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know before booking.',
      cta: 'Book My Appointment',
      items: [
        {
          id: 1,
          question: 'How do I book an appointment?',
          answer: 'Through our official WhatsApp: complete the quick form on this page to prepare your message or tap any booking button. Naielly will check her availability and confirm your slot.'
        },
        {
          id: 2,
          question: 'What lash extension styles are available?',
          answer: 'Fox Eyes, Brazilian Volume, Wispy, Brown Lashes, and Medium Volume. During your initial consultation, Naielly evaluates your eye anatomy and natural lash strength to suggest the best set.'
        },
        {
          id: 3,
          question: 'When should I schedule my lash refills?',
          answer: 'Refills are recommended at 15 to 20 days with at least 50% of the extensions remaining. After 23 days, a new full set appointment is required.'
        },
        {
          id: 4,
          question: 'What is Flow Up (Brow Lamination)?',
          answer: 'A brow relaxer and directional styling treatment that makes brows appear fuller, neatly groomed, and fluffy while preserving natural texture. A 4-session package is available for $200.'
        },
        {
          id: 5,
          question: 'What is the Grow Up brow treatment?',
          answer: 'A stimulating scalp-and-brow regimen designed to encourage healthy regrowth in sparse areas, paired with periodic maintenance sessions. Package of 4 checkups for $250. Results vary.'
        },
        {
          id: 6,
          question: 'What are Nano hair strokes and Shadow Micropigmentation?',
          answer: 'These are advanced cosmetic tattooing procedures. Nano strokes mimic fine individual brow hairs, while Shadow delivers a subtle powder gradient effect. The appropriate technique is established during your consultation.'
        },
        {
          id: 7,
          question: 'How does the Bridal Day experience work?',
          answer: 'Includes bespoke bridal makeup and a full pre-wedding trial session. Our studio is dedicated to the bride for a tranquil, unhurried morning. Hair styling partner is not included in this package.'
        },
        {
          id: 8,
          question: 'Do you offer on-location services?',
          answer: 'Yes, on-site services are available for weddings and private events throughout Western Massachusetts, with a travel fee starting from $40.'
        },
        {
          id: 9,
          question: 'What is Pump Lips (Hydragloss)?',
          answer: 'A deeply hydrating, regenerative lip care treatment using hyaluronic acid and nourishing serums to revive texture, softness, and natural gloss without structural fillers.'
        },
        {
          id: 10,
          question: 'What is Microneedling?',
          answer: 'A minimally invasive cosmetic treatment that encourages natural collagen production, helping smooth skin texture, soften fine lines, and reduce acne scarring. Individual results vary.'
        },
        {
          id: 11,
          question: 'Which VIP training courses do you teach?',
          answer: 'We offer the Eyebrow Design Certification (12h30, $700) and the Self-Makeup Masterclass (3h30, $180). Both feature one-on-one private instruction with Naielly.'
        },
        {
          id: 12,
          question: 'What happens if I need to cancel or reschedule?',
          answer: 'Please provide at least 24 hours notice via WhatsApp so we can offer the appointment opening to clients on our waitlist.'
        },
        {
          id: 13,
          question: 'Where is Naielly Beauty Center located?',
          answer: '20 Florida St #A, Springfield, MA 01109-3903, United States. Easily accessible from Springfield, Chicopee, Holyoke, Longmeadow, and surrounding Western MA communities.'
        }
      ] as FaqItem[]
    },
    atAGlance: {
      title: 'At a glance • Summary',
      content: 'Naielly Beauty Center is an upscale beauty studio in Springfield, Massachusetts, founded by Brazilian Beauty Expert Naielly Silva (10+ years experience). Specializing in lash extensions and lash lifts, brow artistry (Brow Lamination, Nano strokes, micropigmentation), social & bridal makeup, full body waxing (Brazilian wax & threading), rejuvenating skin facials, and private VIP beauty certification courses. Serving Springfield, Chicopee, Holyoke, West Springfield, Longmeadow, Agawam, Ludlow, Wilbraham, East Longmeadow, and Western Massachusetts.'
    },
    floating: {
      label: 'Book Now'
    }
  },

  es: {
    seo: {
      title: 'Naielly Beauty | Pestañas, Cejas, Maquillaje y Depilación en Springfield, MA',
      desc: 'Extensión de pestañas, cejas, maquillaje de novias y depilación en Springfield, MA, con la Brazilian Beauty Expert Naielly Silva. Reserva tu cita.'
    },
    nav: {
      services: 'Servicios',
      gallery: 'Galería',
      about: 'Sobre',
      instagram: 'Instagram',
      reviews: 'Opiniones',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Reservar',
      langLabel: 'Leer en español',
      skipToContent: 'Saltar al contenido'
    },
    hero: {
      eyebrow: 'LASHES • BROWS • MAKEUP • BRIDALS • SPRINGFIELD, MA 🇧🇷🇺🇸',
      titlePart1: 'Realza la belleza que ya es tuya, con la ',
      titleHighlight: 'firma de una Brazilian Beauty Expert',
      subtitle: 'Pestañas, cejas, maquillaje, novias y depilación en Springfield, MA, con más de 10 años de experiencia y una mirada dedicada a valorar lo natural.',
      ctaPrimary: 'Agendar mi horario',
      ctaSecondary: 'Ver servicios',
      card1: 'Springfield, MA: 20 Florida St #A',
      card1Sub: 'Abrir en Google Maps',
      card2: 'Brazilian Beauty Expert',
      card2Sub: '+10 años realzando la belleza natural',
      card3: 'Novias y ocasiones especiales',
      card3Sub: 'Prueba previa y día de la novia exclusivo'
    },
    services: {
      title: 'Un cuidado para cada detalle de tu belleza',
      subtitle: 'De la mirada a la piel, elige el servicio ideal con una profesional que valora tu belleza natural.',
      categories: {
        cilios: 'Pestañas',
        sobrancelhas: 'Cejas',
        maquiagem: 'Maquillaje y Novias',
        pele: 'Piel y Labios',
        epilacao: 'Depilación'
      },
      bookButton: 'Agendar',
      bookOnlineButton: 'Reservar Online',
      sectionCta: 'Agendar mi horario',
      disclaimer: 'Precios en USD, sujetos a cambios. La evaluación y prueba de sensibilidad forman parte del proceso. Los resultados varían según la persona.',
      timeLabel: 'Duración aprox.:',
      items: [
        // Pestañas
        {
          id: 'lash-ext',
          name: 'Extensión de pestañas',
          description: 'Elige tu estilo: Fox Eyes, Brazilian Volume, Wispy, Brown Lashes o Volumen Medio. Mantenimiento: 15 días $75, 20 días $85; a partir de 23 días, nueva colocación.',
          price: 'A partir de $75',
          duration: '1 h 40+',
          group: 'cilios',
          image: galleryImages[0].url
        },
        {
          id: 'lash-lift',
          name: 'Lash Lift',
          description: 'Pestañas naturales curvadas, elevadas y destacadas, sin extensiones.',
          price: '$80',
          duration: '1 h 20',
          group: 'cilios',
          image: galleryImages[0].url
        },
        {
          id: 'lash-remove',
          name: 'Retiro de pestañas',
          description: 'Remoción delicada y segura preservando la salud de las pestañas naturales.',
          price: '$20',
          duration: '30 min',
          group: 'cilios',
          image: galleryImages[0].url
        },
        // Cejas
        {
          id: 'brow-design',
          name: 'Diseño de cejas',
          description: 'Mapeo facial y alineación para realzar el formato natural de tu rostro.',
          price: 'Valor bajo consulta',
          duration: '45 min',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-henna',
          name: 'Diseño con henna',
          description: 'Diseño con henna para rellenar zonas despobladas y definir con naturalidad.',
          price: 'Valor bajo consulta',
          duration: '50 min',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-flow-up',
          name: 'Flow Up (Brow Lamination)',
          description: 'Vellos disciplinados y con volumen de efecto natural. Paquete de 4 sesiones por $200.',
          price: '$60',
          duration: '1 h 30',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-grow-up',
          name: 'Grow Up',
          description: 'Procedimiento para favorecer el crecimiento saludable de las cejas con seguimiento. Paquete de 4 retornos por $250. Resultados variables.',
          price: '$50',
          duration: '1 h 15',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-nano',
          name: 'Nano hilos',
          description: 'Técnica de pigmentación pelo a pelo para un acabado delicado e hiperrealista.',
          price: '$280',
          duration: '1 h 30',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-shadow',
          name: 'Micropigmentación Shadow',
          description: 'Pigmentación con efecto sombreado suave para unas cejas perfectamente estructuradas.',
          price: 'Valor bajo consulta',
          duration: '3 h 25',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        {
          id: 'brow-touchup',
          name: 'Retoque de micropigmentación',
          description: 'Retoque para mantener la nitidez y el tono impecable del diseño.',
          price: '$150',
          duration: '1 h 40',
          group: 'sobrancelhas',
          image: galleryImages[1].url
        },
        // Maquillaje y Novias
        {
          id: 'make-express',
          name: 'Maquillaje express',
          description: 'Look rápido y elegante para el día a día, reuniones o compromisos.',
          price: '$85',
          duration: '45 min',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-social',
          name: 'Make up social',
          description: 'Maquillaje completo y personalizado para fiestas y eventos especiales (excepto novias).',
          price: '$100',
          duration: '1 h 30',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-babyliss',
          name: 'Babyliss',
          description: 'Ondas u ondas con textura para complementar tu estilo.',
          price: '$35',
          duration: '30 min',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-bridal',
          name: 'Día de la novia',
          description: 'Maquillaje nupcial con prueba previa. El studio se reserva exclusivamente para tu día. Peluquería no incluida.',
          price: 'Valor bajo consulta',
          duration: 'Reservado',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        {
          id: 'make-travel',
          name: 'Servicio a domicilio (Travel fee)',
          description: 'Tasa de traslado para servicios de maquillaje en eventos fuera del studio.',
          price: 'A partir de $40',
          duration: 'Con cita',
          group: 'maquiagem',
          image: galleryImages[2].url
        },
        // Piel y Labios
        {
          id: 'skin-mini-facial',
          name: 'Mini facial',
          description: 'Limpieza y cuidado rápido para renovar e iluminar el rostro.',
          price: '$30',
          duration: '45 min',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-full-facial',
          name: 'Full facial',
          description: 'Facial completo para limpiar profundamente, hidratar y restaurar la vitalidad.',
          price: '$120',
          duration: '1 h 30',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-pump-lips',
          name: 'Pump Lips (Hidragloss)',
          description: 'Tratamiento labial nutritivo que hidrata y aporta luminosidad natural sin relleno.',
          price: 'Valor bajo consulta',
          duration: '1 h 15',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-dermaplaning',
          name: 'Dermaplaning',
          description: 'Exfoliación física suave que retira células muertas y vello fino dejando la piel aterciopelada.',
          price: 'Valor bajo consulta',
          duration: '45 min',
          group: 'pele',
          image: galleryImages[3].url
        },
        {
          id: 'skin-microneedling',
          name: 'Microneedling',
          description: 'Estimulación de colágeno para mejorar textura, suavizar líneas de expresión y marcas de acné.',
          price: 'Valor bajo consulta',
          duration: '1 h',
          group: 'pele',
          image: galleryImages[3].url
        },
        // Depilación
        {
          id: 'wax-brazilian',
          name: 'Depilación brasileña (Bikini completo)',
          description: 'Depilación completa con cera tibia de máxima calidad y técnica confortable.',
          price: '$60',
          duration: '45 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-full-leg',
          name: 'Pierna entera',
          description: 'Depilación completa de piernas con suavidad duradera.',
          price: '$45',
          duration: '40 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-half-leg',
          name: 'Media pierna',
          description: 'Depilación precisa de media pierna.',
          price: '$25',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-underarm',
          name: 'Axila',
          description: 'Depilación rápida y cuidadosa de axilas con debilitamiento progresivo.',
          price: '$20',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-upper-lip',
          name: 'Bozo / Bigote',
          description: 'Depilación rápida del bozo con cera delicada.',
          price: '$8',
          duration: '15 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-upper-lip-choice',
          name: 'Bozo (Hilo o cera)',
          description: 'Elige tu técnica favorita: hilo egipcio o cera tibia.',
          price: '$10',
          duration: '30 min',
          group: 'epilacao',
          image: galleryImages[4].url
        },
        {
          id: 'wax-threading-face',
          name: 'Depilación con hilo (Rostro)',
          description: 'Depilación facial completa con hilo sin irritaciones químicas.',
          price: '$26',
          duration: '40 min',
          group: 'epilacao',
          image: galleryImages[4].url
        }
      ] as ServiceItem[]
    },
    gallery: {
      title: 'Detalles que marcan toda la diferencia',
      subtitle: 'Miradas, cejas y maquillajes realizados con precisión y delicadeza.',
      cta: 'Quiero un resultado así',
      disclaimer: 'Los resultados individuales pueden variar.',
      closeLightbox: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente'
    },
    about: {
      title: 'Conoce a Naielly Silva',
      subtitle: 'Una brasileña en Springfield que transforma el cuidado estético en confianza.',
      quote: '“La belleza no es esconder quién eres: es realzar lo más hermoso que ya existe en ti.”',
      quoteAuthor: 'Naielly Silva',
      p1: 'Para Naielly, cada cita es un momento de acogida y bienestar. Como brasileña viviendo en Estados Unidos, comprende el inmenso valor de ser bien recibida, escuchada y cuidada con esmero. Atiende a cada clienta con cariño y dedicación para que te sientas segura y renovada.',
      p2: 'Brazilian Beauty Expert con más de 10 años de experiencia, Naielly es especialista en pestañas, cejas, novias, depilación y cuidado facial, incluyendo micropigmentación. Respaldada por protocolos de higiene rigurosos y buen criterio estético, imparte además sus conocimientos en cursos VIP.',
      stats: [
        { label: '+10 años de experiencia', desc: 'Dedicados al realce natural' },
        { label: 'Brazilian Beauty Expert', desc: 'Técnica y calidez' },
        { label: 'Novias y eventos', desc: 'Momentos inolvidables' },
        { label: 'Cursos VIP', desc: 'Formación profesional' }
      ],
      licensesLabel: 'Licencias / Certificaciones:',
      cta: 'Agendar con Naielly'
    },
    courses: {
      eyebrow: 'CURSOS VIP • FORMACIÓN',
      title: 'Aprende con quien vive la belleza todos los días',
      subtitle: 'Cursos VIP para dominar la técnica y destacar, con acompañamiento cercano y la mirada de una profesional experiente.',
      cta: 'Quiero saber del curso VIP',
      defaultMsg: '¡Hola, Naielly! 💛 Vi tu sitio web y tengo mucho interés en los cursos VIP. Me gustaría conocer fechas disponibles, contenido y detalles.',
      items: [
        {
          id: 'course-brow',
          title: 'Curso de Diseño de Cejas',
          duration: '12h30 de carga horaria',
          price: '$700',
          description: 'Aprende mapeo geométrico, simetría facial, aplicación experta de henna y gestión de clientas para impulsar tu carrera en la estética con distinción.'
        },
        {
          id: 'course-self-makeup',
          title: 'Curso de Automaquillaje',
          duration: '3h30 de práctica guiada',
          price: '$180',
          description: 'Conoce los productos adecuados para tu tipo de piel, técnicas para un acabado luminoso diario y secretos para eventos elegantes.'
        }
      ] as CourseItem[]
    },
    instagram: {
      title: 'Acompaña a Naielly dentro del studio',
      subtitle: 'Transformaciones, bastidores y consejos de belleza, todos los días en Instagram.',
      followButton: 'Seguir en Instagram',
      bookButton: 'Agendar'
    },
    feedbacks: {
      title: 'Quien nos visita, regresa',
      subtitle: 'Testimonios de clientas que confiaron su mirada y su piel a Naielly.',
      cta: 'Quiero vivir esta experiencia',
      disclaimer: 'Testimonios de ejemplo para fines demostrativos.',
      pauseAuto: 'Pausar',
      resumeAuto: 'Reproducir',
      items: [
        {
          id: 1,
          name: 'Camila R.',
          service: 'Extensión de pestañas',
          quote: 'Quedaron livianas, naturales y preciosas. Naielly cuida minuciosamente cada detalle.',
          rating: 5
        },
        {
          id: 2,
          name: 'Sophie M.',
          service: 'Brow Lamination',
          quote: 'My brows look so polished and natural. A gentle, professional experience.',
          rating: 5
        },
        {
          id: 3,
          name: 'Fernanda L.',
          service: 'Día de la novia',
          quote: 'Hizo que la mañana de mi boda fuera tranquila y hermosa. El maquillaje duró intacto.',
          rating: 5
        },
        {
          id: 4,
          name: 'Juliana P.',
          service: 'Depilación',
          quote: 'Atención rápida, higiénica y delicada. Me sentí completamente cómoda.',
          rating: 5
        },
        {
          id: 5,
          name: 'Emma T.',
          service: 'Maquillaje social',
          quote: 'Elegant makeup that looked like me, only better. Highly recommend!',
          rating: 5
        },
        {
          id: 6,
          name: 'Mariana S.',
          service: 'Curso VIP',
          quote: 'Aprendí con muchísima claridad y cariño. Salí totalmente lista para aplicar.',
          rating: 5
        }
      ] as FeedbackItem[]
    },
    studio: {
      title: 'Un espacio creado para relajarte y renovarte',
      subtitle: 'Higiene, confort y tecnología en Springfield, MA, en un ambiente acogedor y reservado.',
      features: [
        { id: 'hygiene', title: 'Higiene estricta', description: 'Instrumentos esterilizados, descartables e higiene impecable para tu tranquilidad.' },
        { id: 'comfort', title: 'Confort total', description: 'Camilla ergonómica, música relajante y espacio climatizado para descansar.' },
        { id: 'tech', title: 'Tecnología y calidad', description: 'Aparatología moderna y cosméticos dermatológicos de máxima categoría.' },
        { id: 'privacy', title: 'Privacidad absoluta', description: 'Atención personalizada y exclusiva sin ruidos ni interrupciones.' },
        { id: 'security', title: 'Seguridad certificada', description: 'Evaluación previa exhaustiva según los estándares de Massachusetts.' },
        { id: 'access', title: 'Ubicación conveniente', description: 'Ubicado en Florida St en Springfield, accesible desde toda la región.' }
      ] as StudioFeature[],
      addressCardTitle: 'Naielly Beauty Center',
      ctaDirections: 'Cómo llegar (Google Maps)',
      ctaBook: 'Agendar mi visita',
      pauseSlider: 'Pausar fotos',
      resumeSlider: 'Continuar fotos'
    },
    booking: {
      title: 'Tu momento de cuidarte comienza aquí',
      subtitle: 'Elige tu servicio, visualiza el mensaje listo y envíalo directo a Naielly por WhatsApp.',
      guidelinesTitle: 'Recomendaciones antes de agendar',
      notices: [
        {
          id: 'delay',
          iconName: 'clock',
          title: 'Puntualidad y retrasos',
          description: 'Llega en el horario acordado. Retrasos mayores a 10 minutos pueden recortar la duración o requerir reagendar para respetar a las siguientes clientas.'
        },
        {
          id: 'reschedule',
          iconName: 'calendar',
          title: 'Cambios y cancelaciones',
          description: 'Si necesitas reprogramar o cancelar tu turno, te agradecemos avisar con al menos 24 horas de antelación.'
        },
        {
          id: 'lashes-prep',
          iconName: 'eye',
          title: 'Preparación para pestañas',
          description: 'Ven con los ojos totalmente limpios, sin máscara ni sombras. Infórmanos si usas lentes de contacto o tienes alergias oculares.'
        },
        {
          id: 'wax-prep',
          iconName: 'sparkles',
          title: 'Preparación para depilación',
          description: 'Indícanos si estás embarazada o utilizando medicamentos dermatológicos o ácidos en la zona a tratar.'
        },
        {
          id: 'reference',
          iconName: 'camera',
          title: 'Fotos de referencia',
          description: 'Si tienes fotos del estilo o resultado deseado (cejas, pestañas o maquillaje), compártelas en el chat de WhatsApp.'
        },
        {
          id: 'privacy-room',
          iconName: 'heart',
          title: 'Espacio íntimo y tranquilo',
          description: 'Para garantizar serenidad y máxima concentración, solicitamos acudir sin acompañantes siempre que sea posible.'
        }
      ] as BookingNotice[],
      formTitle: 'Preparar mensaje de reserva',
      nameLabel: '¿Cómo te gustaría ser llamada(o)?',
      namePlaceholder: 'Tu nombre completo',
      serviceLabel: '¿Qué servicio deseas agendar?',
      serviceSelectPlaceholder: 'Selecciona un servicio...',
      customOptions: {
        vipCourse: 'Curso VIP (Diseño o Automaquillaje)',
        bridal: 'Día de la Novia / Bodas y Eventos',
        undecided: 'Aún no lo sé (me gustaría una valoración)'
      },
      dateLabel: 'Fecha preferida:',
      timeLabel: 'Horario o período preferido:',
      timePlaceholder: 'Ej: Mañana (10h), Tarde (14h) o Noche',
      firstTimeLabel: '¿Primera vez con nosotros?',
      firstTimeYes: 'Sí, primera visita',
      firstTimeNo: 'No, ya soy clienta',
      referenceLabel: '¿Tienes foto de referencia?',
      referenceYes: 'Sí, la enviaré en el chat',
      referenceNo: 'No tengo foto por el momento',
      notesLabel: '¿Alergias o detalles que debamos saber? (opcional)',
      notesPlaceholder: 'Sensibilidad en la piel, lentes, embarazo...',
      previewTitle: 'Mensaje listo para WhatsApp',
      copyButton: 'Copiar mensaje',
      openButton: 'Abrir WhatsApp',
      copiedToast: '¡Mensaje copiado! Pégalo en el chat.',
      helpText: 'El botón copia automáticamente el texto y abre el WhatsApp de Naielly. ¡Solo tienes que pegarlo en la conversación y adjuntar tu foto!',
      defaultGreeting: '¡Hola, Naielly! 💛 Vi tu sitio web y me gustaría reservar una cita.'
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de agendar.',
      cta: 'Agendar mi horario',
      items: [
        {
          id: 1,
          question: '¿Cómo hago para agendar?',
          answer: 'A través de nuestro WhatsApp oficial: completa el formulario de esta página para armar tu mensaje o haz clic en cualquier botón de reserva. Naielly confirmará tu cita.'
        },
        {
          id: 2,
          question: '¿Qué estilos de extensión de pestañas existen?',
          answer: 'Fox Eyes, Brazilian Volume, Wispy, Brown Lashes y Volumen Medio. Durante la consulta inicial, Naielly evalúa la forma de tus ojos y la resistencia natural de tus pestañas.'
        },
        {
          id: 3,
          question: '¿Cuándo debo hacer el mantenimiento de las pestañas?',
          answer: 'El retoque se aconseja a los 15 o 20 días conservando al menos el 50% de las extensiones. A partir del día 23, se considera una colocación completa nueva.'
        },
        {
          id: 4,
          question: '¿Qué es el Flow Up (Brow Lamination)?',
          answer: 'Tratamiento de alineación y fijación del vello para dar a las cejas mayor densidad, definición y peinado perfecto con acabado natural. Paquete de 4 sesiones disponible por $200.'
        },
        {
          id: 5,
          question: '¿Qué es el tratamiento Grow Up?',
          answer: 'Protocolo revitalizante diseñado para estimular el crecimiento natural del vello en zonas con calvitas o debilitadas, con sesiones de control. Paquete de 4 sesiones por $250. Los resultados varían.'
        },
        {
          id: 6,
          question: '¿Qué son los Nano hilos y la Micropigmentación Shadow?',
          answer: 'Son procedimientos estéticos semipermanentes. Nano hilos recrea finos pelitos hiperrealistas, mientras que Shadow produce un sombreado en polvo difuminado muy elegante.'
        },
        {
          id: 7,
          question: '¿Cómo funciona el Día de la Novia?',
          answer: 'Incluye maquillaje para la boda y prueba previa exhaustiva. El studio queda a disposición exclusiva de la novia para una experiencia de serenidad total. La estilista capilar no está incluida.'
        },
        {
          id: 8,
          question: '¿Atienden a domicilio?',
          answer: 'Sí, ofrecemos atención en locación para novias y eventos especiales en la zona de Massachusetts, con una tasa de desplazamiento a partir de $40.'
        },
        {
          id: 9,
          question: '¿Qué es el Pump Lips (Hidragloss)?',
          answer: 'Tratamiento intensivo con ácido hialurónico y activos nutritivos que regenera y aporta brillo natural a los labios sin modificar su volumen anatómico.'
        },
        {
          id: 10,
          question: '¿Qué es el Microneedling?',
          answer: 'Técnica de microagujas que estimula la producción de colágeno propio, ayudando a suavizar poros, marcas de acné y líneas de expresión. Los resultados son graduales y varían individualmente.'
        },
        {
          id: 11,
          question: '¿Qué cursos VIP están disponibles?',
          answer: 'Impartimos el Curso de Diseño de Cejas (12h30, $700) y el Curso de Automaquillaje (3h30, $180). Ambos con formación personalizada y directa con Naielly.'
        },
        {
          id: 12,
          question: '¿Qué sucede si necesito cancelar o reprogramar?',
          answer: 'Por favor avísanos con al menos 24 horas de anticipación por WhatsApp para poder reorganizar los turnos y atender a otra clienta.'
        },
        {
          id: 13,
          question: '¿Dónde está ubicado el studio?',
          answer: '20 Florida St #A, Springfield, MA 01109-3903, United States. Fácil conexión desde Springfield, Chicopee, Holyoke, Longmeadow y condados cercanos de Western MA.'
        }
      ] as FaqItem[]
    },
    atAGlance: {
      title: 'En resumen • At a glance',
      content: 'Naielly Beauty Center es un studio de belleza en Springfield, Massachusetts, dirigido por la Brazilian Beauty Expert Naielly Silva (+10 años de trayectoria). Especializado en extensiones de pestañas (Lashes), diseño y laminado de cejas (Brow Lamination, Nano hilos, micropigmentación), maquillaje social y de novias, depilación facial y corporal con cera e hilo, tratamientos estéticos de la piel y cursos VIP de capacitación. Sirviendo a Springfield, Chicopee, Holyoke, West Springfield, Longmeadow, Agawam, Ludlow, Wilbraham, East Longmeadow y Western Massachusetts.'
    },
    floating: {
      label: 'Reservar'
    }
  }
};

// Legal modal texts in English (as mandated by PRD section 6.10 and section 4)
export const legalTextsEn = {
  privacyPolicy: {
    title: 'Privacy Policy',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Who We Are',
        body: 'Naielly Beauty Center ("we", "our", or "us"), operated by Naielly Silva, is an esthetics and beauty practice located at 20 Florida St #A, Springfield, MA 01109-3903. This Privacy Policy informs you about how we handle personal information gathered when you visit our website, submit booking requests, or contact us through WhatsApp or social channels.'
      },
      {
        heading: '2. Information We Collect',
        body: 'We collect information that you voluntarily provide to us, including: your name, contact phone number, preferred appointment date and time, service of interest, allergy disclosures, skin sensitivities, medical considerations relevant to esthetic safety (e.g., pregnancy, dermatological prescriptions), and voluntary reference photos you provide. We do not sell or monetize personal data.'
      },
      {
        heading: '3. Purpose of Processing',
        body: 'Your information is used solely for scheduling and confirming beauty appointments, tailoring treatments safely to your health disclosures, maintaining internal client service records, providing client support, and communicating details regarding VIP training courses.'
      },
      {
        heading: '4. Third-Party Services and Embeds',
        body: 'Our website incorporates third-party embeds and links, notably WhatsApp (Meta Platforms), Instagram embeds (Meta Platforms), and Google Maps (Google LLC). When you interact with these external services, their respective privacy policies and terms govern their data collection practices.'
      },
      {
        heading: '5. Security, Retention & Your Rights',
        body: 'We apply reasonable administrative and technical measures to protect your information. Records are retained only as long as necessary to provide services and fulfill legal accounting requirements. You may request access to, correction of, or deletion of your client contact data at any time by contacting us directly.'
      },
      {
        heading: '6. Children’s Privacy',
        body: 'Our services and website are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.'
      },
      {
        heading: '7. Contact Us',
        body: 'For questions regarding this policy or your personal data, please contact Naielly Beauty Center at 20 Florida St #A, Springfield, MA 01109 or message our official WhatsApp channel.'
      }
    ]
  },
  termsOfService: {
    title: 'Terms of Service',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Acceptance & General Information',
        body: 'By accessing this website and utilizing our booking services, you acknowledge and agree to these Terms of Service. The informational content provided on this website is for general aesthetic and beauty educational purposes only and does not constitute medical advice or diagnosis.'
      },
      {
        heading: '2. Health Disclosures & Suitability Assessments',
        body: 'Clients are required to truthfully disclose all known allergies, eye sensitivities, dermatological conditions, cosmetic surgeries, pregnancy, and active topical or oral medications (such as Accutane, retinoids, or AHAs) prior to receiving services. All procedures are subject to an in-person professional assessment, and Naielly Beauty Center reserves the right to decline or postpone treatment if deemed unsafe.'
      },
      {
        heading: '3. Punctuality, Rescheduling & Cancellation Policy',
        body: 'We strive to provide attentive, unhurried care. Clients are asked to arrive promptly at their scheduled appointment time. Arrivals exceeding 10 minutes past the scheduled time may result in shortened appointment duration or the need to reschedule. Cancellations or reschedule requests must be communicated at least 24 hours in advance.'
      },
      {
        heading: '4. Pricing, Currency & Results Disclaimer',
        body: 'All fees are stated in United States Dollars (USD) and are subject to adjustment. Individual results, lash retention periods, and skin responses naturally vary from person to person based on biological factors, lifestyle, and post-treatment home care compliance. No guarantee of permanence or specific medical outcomes is made.'
      },
      {
        heading: '5. VIP Course Terms',
        body: 'VIP training courses provide private hands-on aesthetic guidance and informational instruction. Enrollment policies, course schedules, and deposit requirements will be confirmed directly upon registration.'
      },
      {
        heading: '6. Limitation of Liability & Governing Law',
        body: 'To the fullest extent permissible by applicable law, Naielly Beauty Center and its practitioners shall not be held liable for indirect, incidental, or consequential damages resulting from the use of this website or non-disclosure of health conditions. These terms are governed by the laws of the Commonwealth of Massachusetts, United States.'
      },
      {
        heading: '7. Accessibility Statement (WCAG 2.1 AA)',
        body: 'We are committed to digital accessibility and continually test our user interface against WCAG 2.1 Level AA and ADA standards, providing scalable typography, keyboard focus navigation, semantic markup, and sufficient color contrast.'
      }
    ]
  }
};
