<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protocolo de activación del plan de emergencias y contingencias
    .row.justify-content-center.align-items-start.mb-4         
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')
      .col-lg-7.my-3
        p(data-aos="fade-down") Los planes de emergencia se deben activar teniendo en cuenta el orden jerárquico establecido en la organización del evento, es decir, la manera como se va a orientar la comunicación para la toma de decisiones. Por lo general, se designa esta responsabilidad al puesto de mando unificado, ya que allí estará la máxima autoridad del evento; por lo tanto, este grupo deberá garantizar que las acciones y la activación de cada uno de los planes sean las adecuadas para la situación que se presenta y que, por consiguiente, permita el control oportuno, con el fin de que no pase de un conato de emergencia (una emergencia que puede prevenirse) a una emergencia general. 

    .bloque-texto-a.color-acento-contenido.p-4(data-aos="flip-down")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p Si bien es cierto que el instinto de supervivencia en una situación inesperada hace que como humanos adoptemos comportamientos que pueden agravar la situación inicial, también es cierto que es posible actuar de forma positiva si vemos la situación controlada y manejada de manera correcta, porque eso proporciona una sensación de tranquilidad y contribuye a evitar estampidas y pánico generalizado. Ahí es donde se evidencia la importancia de activar el estado de precaución: todos y cada uno de los encargados del comité de emergencia, desde antes de iniciar el evento, deben apropiarse de su rol y conocer claramente cada uno de los planes a los que pertenece y debe apoyar. 

    p(data-aos="fade-down").my-5 Teniendo en cuenta lo anterior, cada uno de los planes anexos al plan de emergencia se evalúa previamente con el desarrollo de las prácticas de simulacros, por ello, desde que se organiza un evento con asistencia de público, es responsabilidad del organizador establecer el protocolo para activar cada uno de los planes con su respectivo responsable y las guías de actuación definidas.
    p(data-aos="fade-down").my-5 Un plan general de emergencias se compone por:


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/31.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="24%" y="99%" numero="1")
        h5.mb-3 Plan de comunicación
        p.mb-0 Designar la información que se va a comunicar de interés público, y que solo podrá ser manejada por el responsable de este plan.  
      .tarjeta.color-acento-botones.p-3(x="29.5%" y="64%" numero="2")
        h5.mb-3 Plan de primeros auxilios
        p.mb-0 Recursos para la atención prehospitalaria. 
      .tarjeta.color-acento-botones.p-3(x="41.5%" y="64%" numero="3")
        h5.mb-3 Plan de seguridad
        p.mb-0 Medidas de control de aforo e ingreso de elementos peligrosos o prohibidos - Apoyado por la Policía Nacional. 
      .tarjeta.color-acento-botones.p-3(x="50.5%" y="95%" numero="4")
        h5.mb-3 Plan de manejo de incendios
        p.mb-0 Disponer de medios detectores de humo, mecanismos de extinción y apoyo del cuerpo de bomberos.  
      .tarjeta.color-acento-botones.p-3(x="75%" y="93%" numero="5")
        h5.mb-3 Plan de atención a personas con discapacidad, adultos mayores y niños
        p.mb-0 Lugar seguro que debe estar alejado del sitio del evento, y que deber ser fácilmente identificable. 
      .tarjeta.color-acento-botones.p-3(x="90%" y="96%" numero="6")
        h5.mb-3 Plan de manejo de tránsito
        p.mb-0 Cuando el evento puede llegar a entorpecer el flujo vial de un lugar se coordina con el organismo de tránsito encargado. 
      .tarjeta.color-acento-botones.p-3(x="80%" y="33.4%" numero="7")
        h5.mb-3 Plan de evacuación
        p.mb-0 Se debe garantizar la señalización, vías de evacuación despejadas y puertas o salidas de emergencia libres.  


    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Activar cada plan de emergencia dependerá del tipo de situación que se presente; por eso siempre se recomienda distribuir de manera uniforme el personal de apoyo de los diferentes planes, para que cada uno de sus miembros pueda cumplir con las funciones y responsabilidades asignadas a cada rol.
    
    .titulo-tercero.mb-5(data-aos="fade-right")
      h3 Coordinación entre entidades
    
    p(data-aos="fade-down").mb-5 Se debe gestionar de manera oportuna la comunicación entre el PMU y los coordinadores de cada plan para estar alerta ante cualquier situación.

    .row.justify-content-center.align-items-center.mb-5.bg5.p-3           
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')
      .col
        p(data-aos="fade-down").mb-0 Se presenta a continuación cuáles serían los pasos para gestionar una adecuada comunicación entre los entes y sus planes de emergencia.

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='')


    .row.justify-content-center.align-items-center.mb-5.bg2.p-4
      .col
        p(data-aos="fade-down").mb-4 En la activación de los planes de emergencia debe tener prioridad:
        ul.lista-ul.mb-0
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 La integridad de los asistentes. 
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 La evacuación segura y la priorización de las personas según su condición (embarazadas, niños, adultos mayores y personas en condición de discapacidad).
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 Mitigar el daño ocasionado por la materialización del riesgo.         
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')            

    .titulo-tercero.mb-5(data-aos="fade-right")
      h3 Evacuación

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .cajon.color-secundario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La activación del plan de emergencias tendrá como paso inicial la evacuación, que de acuerdo con la Dirección de Prevención y Atención de Emergencias (DPAE), es el desalojo “de manera ordenada y segura [de] un área o edificación que puede verse afectada por la ocurrencia de un evento peligroso a una zona segura” (2011, p. 1). 

    p(data-aos="fade-down").mb-5 En el siguiente esquema se muestran los tipos de evacuación:  
  

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/33.svg', alt='')
          figcaption Fuente: elaboración propia con base en DPAE (2011, p. 2).


      .tarjeta.color-secundario.p-3(x="18%" y="39%" numero="1")
        h5.mb-3 Preventiva:  
        p.mb-0 Se efectúa ante factores considerados como generadores de un posible evento de emergencia, que es potencialmente peligroso para la vida de las personas.  
      .tarjeta.color-secundario.p-3(x="36.5%" y="5.8%" numero="2")
        h5.mb-3 Emergencia:  
        p.mb-0 Cuando un evento afecta directa o indirectamente a las personas y si no se ejecuta un plan para la prevención de desastres, la pérdida de vidas es inevitable.
      .tarjeta.color-secundario.p-3(x="63%" y="5.8%" numero="3")
        h5.mb-3 Parcial:  
        p.mb-0 Cuando el riesgo afecta un área definida, por lo que solo es necesario evacuar una parte de la población sin afectación de las otras.  
      .tarjeta.color-secundario.p-3(x="81%" y="39%" numero="4")
        h5.mb-3 Total:  
        p.mb-0 Cuando hay que movilizar a todas las personas de una zona definida por la amenaza de un evento, como parte de una medida de contingencia.  

    .row.justify-content-center.align-items-center.mb-5.bg2.p-4
      .col
        p(data-aos="fade-down").mb-0 Es importante recordar que la evacuación debe contemplarse en el plan de emergencias, por lo tanto, antes de comenzar el evento deben establecerse suficientes vías de evacuación de acuerdo con la cantidad de asistentes al evento; señalizarlas, mantenerlas libres de obstáculos todo el tiempo, tener alarmas sonoras y disponer de sistemas de iluminación alternos para evitar accidentes por estampidas o por situaciones que se puedan salir de control.        
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')  

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/34.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Durante el proceso, los organizadores y su equipo de brigadistas deben contar con el apoyo de los organismos externos, como la Policía Nacional, Bomberos, Defensa Civil y Cruz Roja. Siempre se deben usar frases de orientación, evitar los gritos o incitar a correr, ya que esto altera el comportamiento de las personas, provocando situaciones peligrosas.

    .titulo-tercero.mb-5(data-aos="fade-right")
      h3 Simulaciones y simulacros

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para entender este procedimiento de la activación de planes de emergencia y contingencia, se deben ejecutar simulaciones y simulacros.
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-6.my-3
        p(data-aos="fade-down") Las simulaciones son ejercicios de salón que no requieren mayor número de recursos; se hacen a partir de la toma de decisiones con situaciones creadas por la narrativa de un guion, donde se expresa de manera ordenada cuáles serían las medidas de actuación, siempre teniendo como referente el plan de emergencias y contingencias de cada evento. En este tipo de ejercicios deben participar los organizadores, el comité de emergencia y los organismos externos que apoyan el desarrollo de la actividad.      
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')  

    .bloque-texto-a.color-acento-contenido.p-4(data-aos="flip-down")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p Por otra parte, el simulacro es una actividad práctica, en la que se representan acciones de respuesta y protección ante amenazas, que se ha planeado en un escenario específico, con base en la identificación y evaluación de riesgos y amenazas. Sirve para evaluar la capacidad de recursos y respuestas ante una situación amenazante. 

    p(data-aos="fade-down").my-5 Se deben tener en cuenta diversas variables, como las siguientes: 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')                         
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="El tipo de simulacro")
            .col-10
              p Si es avisado o sin avisar.   
          .row.justify-content-center(titulo="Tipo de emergencia")
            .col-10
              p De acuerdo con el tipo de emergencia que se quiere evaluar, si es parcial o total. 
          .row.justify-content-center(titulo="Recursos que se van a utilizar")
            .col-10
              p Si solo se va a evaluar la capacidad de respuesta del comité de emergencias, o si se evalúa la capacidad de respuesta del comité y de los organismos de ayuda externa. 

    p(data-aos="fade-down").mb-5 Para el desarrollo de cualquiera de los dos ejercicios, planes de emergencia y contingencia, se deben tener en cuenta las etapas explicadas en el siguiente video:

    .row.justify-content-center.align-items-center          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5OhekcN_Qxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
</template>

<script>
export default {
  name: 'Tema3',
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
