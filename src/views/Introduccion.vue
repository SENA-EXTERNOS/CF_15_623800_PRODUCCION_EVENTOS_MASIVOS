<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down") Estimado aprendiz, en esta unidad va a conocer las fases que contempla una emergencia desde que se emite una alerta, cómo se activan los protocolos de emergencia conforme al riesgo que se esté materializando y, la diferencia entre alerta y alarma, entre otros conceptos fundamentales en un plan de emergencias. Así mismo, se revisarán las fases de activación de los planes de emergencia, la relevancia de organizar y planear con anticipación, las simulaciones y simulacros y la importancia de la apropiación de los protocolos de intervención, con el fin de disminuir los efectos negativos de un suceso y salvar vidas. 
          h5(data-aos="fade-down").mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/zGe3nWpg1BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
