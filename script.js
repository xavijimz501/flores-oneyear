$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
  const carta = document.getElementById("card");
  const backFace = document.querySelector(".back-face");

  carta.addEventListener("click", (e) => {
    // If we click the back-face, let the backFace click handler take care of transition.
    // Otherwise, toggle the flip animation.
    if (!e.target.closest(".back-face")) {
      carta.classList.toggle("girar");
    }
  });

  backFace.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent card click event from toggling 'girar' back
    
    $(".container").addClass("slide-down-out");
    
    // Una vez que se mueva y desaparezca, mostrar el componente index-cara.html
    setTimeout(() => {
      $(".container").addClass("hidden");
      $(".bunny-cara-container").removeClass("hidden");
    }, 1000);
  });

  // Al aceptar, desaparece con el mismo efecto de la carta y muestra el contenido de index-run.html
  $("#btn-aceptar").on("click", function() {
    $(".bunny-cara-container").addClass("slide-down-out");
    
    setTimeout(() => {
      $(".bunny-cara-container").addClass("hidden");
      $(".bunny-run-container").removeClass("hidden");
    }, 1000);
  });

});

