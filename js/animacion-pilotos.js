document.addEventListener('DOMContentLoaded', function() {
  const seccionesInfo = document.querySelectorAll('.info-piloto-scroll');

  const fondoEvaShinji = document.getElementById('eva-shinji');
  const fondoEvaAsuka = document.getElementById('eva-asuka');
  const fondoEvaRei = document.getElementById('eva-rei');

  const imgShinji = document.querySelector('.foto-piloto[alt="Shinji Ikari"]');
  const imgAsuka = document.querySelector('.foto-piloto[alt="Asuka Langley"]');
  const imgRei = document.querySelector('.foto-piloto[alt="Rei Ayanami"]');

  function manejarScroll() {
    const centroVentana = window.innerHeight / 2;

    seccionesInfo.forEach(function(seccion) {
      const rect = seccion.getBoundingClientRect();
      const nombrePiloto = seccion.dataset.piloto;

      if (rect.top <= centroVentana && rect.bottom >= centroVentana) {
        fondoEvaShinji.style.opacity = 0;
        fondoEvaAsuka.style.opacity = 0;
        fondoEvaRei.style.opacity = 0;
        if (nombrePiloto === 'shinji') {
          fondoEvaShinji.style.opacity = 1;
        } else if (nombrePiloto === 'asuka') {
          fondoEvaAsuka.style.opacity = 1;
        } else if (nombrePiloto === 'rei') {
          fondoEvaRei.style.opacity = 1;
        }
        imgShinji.style.opacity = 0;
        imgAsuka.style.opacity = 0;
        imgRei.style.opacity = 0;

        let imgActiva;
        if (nombrePiloto === 'shinji') {
          imgActiva = imgShinji;
        } else if (nombrePiloto === 'asuka') {
          imgActiva = imgAsuka;
        } else if (nombrePiloto === 'rei') {
          imgActiva = imgRei;
        }

        imgActiva.style.opacity = 1;

        const progreso = (centroVentana - rect.top) / rect.height;
        const moverCantidad = (progreso - 0.5) * 100;
        imgActiva.style.transform = 'translateY(' + moverCantidad + 'px)';
      }
    });
  }
  window.addEventListener('scroll', manejarScroll);
  manejarScroll();
});