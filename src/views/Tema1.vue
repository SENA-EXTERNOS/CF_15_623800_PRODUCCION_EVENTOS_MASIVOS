<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alerta y alarmas de emergencias
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')                
      .col-lg-9.my-3
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Alerta y alarma son dos palabras íntimamente relacionadas, pero es importante tener claro su significado. Una #[b alerta] es un estado de aviso previo a una situación, en tanto que una #[b alarma] es la emisión de señales acústicas o luminosas dispuestas para comunicar la necesidad inmediata de actuar y, por lo general, implican la necesidad de evacuar lo más pronto posible un lugar hacia un punto seguro. 
      
        .bloque-texto-a.color-acento-contenido.p-4(data-aos="flip-down")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-12
              .bloque-texto-a__texto.p-4
                p Para comprender sobre el tema relacionado con las alertas y alarmas de emergencia, es importante tener en cuenta las definiciones que brinda la Guía técnica para la reglamentación local de eventos con aglomeraciones en público (Hernández y Zapata, 2018) de la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD).

    p(data-aos="fade-down").mb-5 Algunos conceptos claves que se deben tener en cuenta respecto a las alertas y alarmas de emergencia son:

    .row.justify-content-center.mb-5.text-center
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Alerta
            p.mb-0 Estado que se declara con anterioridad a la manifestación de un evento peligroso, con base en el monitoreo del comportamiento del respectivo fenómeno, con el fin de que las entidades y la población involucrada activen procedimientos de acción previamente establecidos. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/3.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Alarma
            p.mb-0 Aviso o señal que se da para que se sigan instrucciones específicas de emergencia, debido a la presencia real o inminente de un evento peligroso.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Estado de precaución
            p.mb-0 Es aquel donde aún no se ha presentado la materialización de la emergencia, pero que por las características del lugar o condiciones medioambientales se puede llegar a materializar y pasar de precaución a un estado de alerta.                         

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .cajon.color-secundario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Es primordial saber que las alertas, comunican a través de los mecanismos disponibles a los brigadistas, al Puesto de Mando Unificado (PMU) y a organizadores en general sobre cualquier suceso que se pueda materializar y que se deba vigilar para evitar un estado de alarma generalizado. De esa manera es posible tomar medidas preventivas y de intervención oportuna. 

    .row.justify-content-center.align-items-stretch.mb-5           
      .col-lg-8.p-0.cajon.color-acento-contenido.p-4(data-aos="flip-down") 
        .p-2
          p(data-aos="fade-down").mb-5 Las alertas son un mecanismo de anticipación y comunicación efectiva entre los responsables de la atención de emergencias, y deben estar codificadas con el fin de no crear pánico entre el público. Es de suma importancia que los integrantes del comité de emergencia las conozcan y se apropien de estas. Un ejemplo de codificación de alertas es el establecido por la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGDR) (2011, https://bit.ly/2PSfWUk), como se muestra en este enlace.
          a.anexo.mb-4.mb-lg-0(href="http://portal.gestiondelriesgo.gov.co/paginas/old_noticias/1240.aspx" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[b Enlace web.] Un ejemplo de codificación de alertas es el establecido por la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGDR) (2011), como se muestra a continuación.                 
      .col-lg-3.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')                
    p(data-aos="fade-down").mb-5 La clasificación por niveles de las alertas y alarmas de emergencia se presenta en los siguientes colores:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-9.position-relative
        
        .avatar
          figure
            img(src="@/assets/curso/temas/7.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-1
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/8.svg", alt="alt").img100
            .col
              h5 VERDE
              p Prevención, mitigación, rehabilitación y reconstrucción.
        .crd.crd--avatarHorizontal.crd--med.py-1
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/9.svg", alt="alt").img100
            .col
              h5 AMARILLO 
              p Preparación.
        .crd.crd--avatarHorizontal.py-1
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/10.svg", alt="alt").img100
            .col
              h5 NARANJA 
              p Alistamiento.    
        .crd.crd--avatarHorizontal.crd--last.py-1
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/11.svg", alt="alt").img100
            .col
              h5 ROJO
              p Respuesta.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Esta clasificación y códigos son solo ejemplos que, a criterio del comité de emergencias o de quien diseñe los planes, se podrán usar; aunque cabe la posibilidad de utilizar nombres de animales u otro sistema que se considere de fácil aplicabilidad para el evento y el contexto en el que este se desarrollará.     

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las alarmas son sistemas de aviso de que algo está ocurriendo y deben tener unas características puntuales, como ser audibles en todas las áreas del recinto, visibles (garantizando que puedan ser identificadas por personas sordas o con dificultades auditivas) y fáciles de entender para el personal en general al que van dirigidas, con instrucciones claras. Por ello, en cualquier evento con aglomeración de público se debe contar con sistemas que garanticen alternativas en caso de problemas en el suministro de energía como megáfonos, pitos, linternas u otras estrategias que permitan guiar a las personas de manera segura durante la evacuación del lugar, con medidas de protección colectiva.

    .color-fondo-text.bg-color(data-aos="fade-down")
      .color-fondo-text__texto.p-2
        p Es importante que el sistema de alarma no se active hasta tener completamente despejadas las vías de evacuación y las salidas de emergencia. En eventos que se desarrollen en escenarios con escaleras, se sugiere hacer una evacuación parcial por áreas, evitando estampidas y caídas de los asistentes desde alguna altura. Teniendo en cuenta que estos sistemas de alerta y alarma son obligatorios en cualquier plan de emergencias y contingencias de aglomeraciones de público, temporales o permanentes, se deberá dejar documentado cuáles serán los códigos para utilizar y cómo se activará el sistema de alarma.        
    p(data-aos="fade-down").mt-3 Si bien es cierto que los sistemas de alarma son importantes, lo es aún más saber cómo se activan y el momento oportuno de hacerlo, porque por instinto de supervivencia los asistentes, ante el sonido de sirenas, pitos y demás, podrían entrar en caos colectivo dificultando las labores de evacuación del lugar. En situaciones como estas cobra relevancia el tipo de público, la edad y la actividad que se está desarrollando. Por eso se reitera la importancia de que cada plan de emergencia esté realmente diseñado según las condiciones del lugar y el tipo de público.
    p(data-aos="fade-down").mb-5 A continuación, se muestra un ejemplo sobre cómo emplear un sistema o clasificación de alerta y alarmas de emergencia. 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4(data-aos="flip-down")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-12
              .bloque-texto-a__texto.p-4
                p Se va a desarrollar una feria de artesanías: la fase de precaución se activa desde que se planean y designan los recursos y la logística a seguir, hasta que se asignan los responsables o coordinadores por cada plan operativo normalizado. El sistema de alerta quedará codificado de la siguiente manera:  

    .row.justify-content-center.align-items-stretch.mb-5.text-center           
      .col-lg-4(data-aos="fade-left")
        .bg1.h-100.p-4
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')
          h5.mb-4 Alerta liebre
          p Se debe iniciar el proceso de evacuación de todo el personal. 

      .col-lg-4(data-aos="fade-down")
        .bg1.h-100.p-4
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')
          h5.mb-4 Alerta dragón
          p Se puede presentar un conato de incendio.  

      .col-lg-4(data-aos="fade-left")
        .bg1.h-100.p-4
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')
          h5.mb-4 Alerta mapache
          p Persona que requiere atención de primeros auxilios.  

    p(data-aos="fade-down") Para llevar a cabo una adecuada codificación de un sistema de alarma, es necesario tener en cuenta una serie de aspectos y características que se deben cumplir.
    p(data-aos="fade-down").mb-5 La codificación del sistema de alarma debe tener los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")           
      .col-lg-8
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 1")
            p Interrumpir el sonido de ambientación durante diez segundos.   
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 2")
            p Activar la sirena durante diez segundos.  
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 3")
            p Proceder a indicar la evacuación de la siguiente manera: “Por favor, se pide a los asistentes salir del lugar sin correr, haciendo uso de las tres puertas asignadas para la salida del evento y atendiendo las indicaciones de los brigadistas”.  
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 4")
            p Hacer sonar la alarma de manera ininterrumpida. Si se llegara a presentar fallas en el sistema de alarma, se deberán utilizar megáfonos acompañados de luces de linternas rojas para activar la evacuación de los asistentes.   
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Esto quedará expresado de manera escrita, y la codificación deberá darse a conocer en todos los niveles del comité de emergencias. Así mismo, se harán entrenamientos con prácticas y simulacros. Adicionalmente, debe contemplarse que durante el desarrollo del evento se emitirán mensajes a todos los asistentes sobre las medidas básicas de seguridad, por ejemplo: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 En caso de la ocurrencia de una emergencia, mantenga la calma, siga las indicaciones de los brigadistas y llegue a nuestro punto seguro, ubicado en el costado derecho del recinto
            i.fas.fa-quote-right 

    .row.justify-content-center.align-items-center.mb-5.bg2.p-3           
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')
      .col
        p(data-aos="fade-down").mb-0 Revisados los conceptos anteriores, podemos ver que alertas y alarmas son requisitos definidos para anticiparnos a la respuesta ante un riesgo inminente.                       
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
