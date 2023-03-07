export default {
  global: {
    componenteFormativo:
      'Ejecución de plan de emergencias de acuerdo con el evento “simulacro”',
    descripcionCurso:
      'La ejecución de los planes de emergencia se inicia antes de la entrada del público, lo cual implica, definir roles y responsabilidades para atender sucesos no planeados, verificando el cumplimiento de las normativas y la adherencia a los planes diseñados para mitigar y controlar los riesgos que se pueden materializar en cualquier espectáculo, feria o función.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Alerta y alarmas de emergencias',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fases de activación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Protocolo de activación del plan de emergencias y contingencias',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Alerta y alarmas de emergencias',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres [UNGRD] (2016). <i>Guía para la implementación de sistemas de alerta temprana.</i> UNGRD.',
      tipo: 'Guía',
      link: 'https://bit.ly/3DoqELK',
    },
    {
      tema: 'Protocolo de activación del plan de emergencias y contingencias',
      referencia:
        'Alcaldía Mayor de Bogotá-Fondo de Prevención y Atención de Emergencias [FOPAE] (2014, enero) <i>Guía Para el desarrollo de simulaciones</i>.',
      tipo: 'Guía',
      link: 'https://bit.ly/3NwZLd7',
    },
    {
      tema: 'Protocolo de activación del plan de emergencias y contingencias',
      referencia:
        'Organización Panamericana de la Salud [OPS] (2010). <i>Guía para el desarrollo de prácticas y simulacros</i>. OPS.',
      tipo: 'Guía',
      link: 'https://www.paho.org/uru/dmdocuments/ER_Simulaciones.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'Evento o interrupción repentina, no planeada, de una actividad, que da lugar a muerte, lesión o daño en las personas, así como a pérdidas y daños en propiedades, infraestructura o en el medioambiente (FOPAE, 2014).',
    },
    {
      termino: 'Activación',
      significado:
        'Despliegue efectivo de los recursos destinados a un incidente (FOPAE, 2014).',
    },
    {
      termino: 'Alarma',
      significado:
        'Señal que emiten autoridades o instituciones competentes para que se sigan instrucciones específicas, debido a la presencia real o inminente de un evento adverso. Se transmite a través de medios físicos, como sirenas, campanas, megáfono, radio, pólvora, entre otros. (UNGRD, 2011, párr. 4).',
    },
    {
      termino: 'Alerta',
      significado:
        'Estado declarado por autoridades e instituciones competentes con el fin de tomar precauciones específicas, debido a la probable y cercana ocurrencia de un evento adverso (UNGRD, 2011, párr. 3).',
    },
    {
      termino: 'Evacuación',
      significado:
        'Actividad por medio de la cual se desaloja, de manera ordenada y segura, un área o edificación que puede verse afectada por la ocurrencia de un evento peligroso.',
    },
    {
      termino: 'Plan de evacuación',
      significado:
        'Acuerdo preestablecido por todos los ocupantes de un área o edificación, para definir los sitios de reunión y las rutas más convenientes para realizar una evacuación segura en caso de emergencia.',
    },
    {
      termino: 'Punto de encuentro',
      significado:
        'Sitio seguro, definido para la llegada del personal en caso de evacuación.',
    },
    {
      termino: 'Señalización de seguridad',
      significado:
        'Transmite un mensaje de seguridad y se obtiene de la correcta combinación de colores, formas geométricas y señales luminosas o acústicas. Generalmente va acompañada de un texto o símbolo gráfico, una comunicación verbal o una señal gestual (DPAE, 2011, p. 10).',
    },
    {
      termino: 'Sistema de Alerta Temprana',
      significado:
        'Provisión de información oportuna y eficaz a través de instituciones identificadas, que permiten a individuos expuestos a una amenaza la toma de acciones para evitar o reducir su riesgo, y su preparación para una respuesta efectiva (UNGRD, 2011, párr. 3).',
    },
    {
      termino: 'Zona de impacto',
      significado:
        'Área afectada directamente por un incidente, evento o emergencia, de origen natural o antrópico, que sufre daños, fallas o deterioro en su estructura y funcionamiento normal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá-Dirección de Prevención y Atención de Emergencias [DPAE] (2011). <i>Señalización y plan de evacuación</i>. DPAE.',
      link: '',
    },
    {
      referencia:
        'Alcaldía Mayor de Bogotá-Fondo de Prevención y Atención de Emergencias [FOPAE] (2014, enero) <i>Guía para el desarrollo de simulaciones</i>.',
      link: 'https://bit.ly/3NwZLd7.',
    },
    {
      referencia:
        'Hernández, N. y Zapata, G. (2018). <i>Guía técnica para la reglamentación local de eventos con aglomeraciones de público</i>. Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD).',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/27735/Guia_aglomeraciones_publico.pdf?sequence=6&isAllowed=y',
    },
    {
      referencia:
        'Organización Panamericana de la Salud [OPS] (2010). <i>Guía para el desarrollo de prácticas y simulacros<i>. OPS.',
      link: 'https://www.paho.org/uru/dmdocuments/ER_Simulaciones.pdf',
    },
    {
      referencia:
        'Unidad para la Gestión del Riesgo de Desastres [UNGRD] (2011, 5 de diciembre). <i>Alertas y alarmas</i>. Mecanismos que salvan vidas.',
      link:
        'http://portal.gestiondelriesgo.gov.co/paginas/old_noticias/1240.aspx',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del riesgo de Desastres [UNGRD] (2016). <i>Guía para la implementación de sistemas de alerta temprana</i>. UNGRD.',
      link: 'https://bit.ly/3DoqELK.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
