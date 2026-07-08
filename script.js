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

  carta.addEventListener("click", () => {
    carta.classList.toggle("girar");
  });

});

