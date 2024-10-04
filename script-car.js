$(document).ready(function () {
  // Initialiser le carrousel
  $('.carousel').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.modal-prev'),
    nextArrow: $('.modal-next'),
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      }
    }
    ]
  });
  // Ouvrir le modal 1
  $("#openModalImg1").on("click", function () {
    $("#imageCarouselModal1").addClass("show");
    $(".image-carousel", "#imageCarouselModal1").slick({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: "#prevBtn1",
      nextArrow: "#nextBtn1",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },],
      adaptiveHeight: true, // Activer l'adaptation de la hauteur
    });
    // Ajuster la taille du modal en fonction de l'image
    adjustModalSize("#imageCarouselModal1");
    // Écouter l'événement afterChange du carousel pour ajuster la taille du modal
    $(".image-carousel", "#imageCarouselModal1").on("afterChange", function () {
      adjustModalSize("#imageCarouselModal1");
    });
  });
  // Ouvrir le modal 2
  $("#openModalImg2").on("click", function () {
    $("#imageCarouselModal2").addClass("show");
    $(".image-carousel", "#imageCarouselModal2").slick({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: "#prevBtn2",
      nextArrow: "#nextBtn2",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },],
      adaptiveHeight: true, // Activer l'adaptation de la hauteur
    });
    // Ajuster la taille du modal en fonction de l'image
    adjustModalSize("#imageCarouselModal2");
    // Écouter l'événement afterChange du carousel pour ajuster la taille du modal
    $(".image-carousel", "#imageCarouselModal2").on("afterChange", function () {
      adjustModalSize("#imageCarouselModal2");
    });
  });
  // Ouvrir le modal 3
  $("#openModalImg3").on("click", function () {
    $("#imageCarouselModal3").addClass("show");
    $(".image-carousel", "#imageCarouselModal3").slick({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: "#prevBtn3",
      nextArrow: "#nextBtn3",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },],
      adaptiveHeight: true, // Activer l'adaptation de la hauteur
    });
    // Ajuster la taille du modal en fonction de l'image
    adjustModalSize("#imageCarouselModal3");
    // Écouter l'événement afterChange du carousel pour ajuster la taille du modal
    $(".image-carousel", "#imageCarouselModal3").on("afterChange", function () {
      adjustModalSize("#imageCarouselModal3");
    });
  });
  // Ouvrir le modal 4
  $("#openModalImg4").on("click", function () {
    $("#imageCarouselModal4").addClass("show");
    $(".image-carousel", "#imageCarouselModal4").slick({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: "#prevBtn4",
      nextArrow: "#nextBtn4",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },],
      adaptiveHeight: true, // Activer l'adaptation de la hauteur
    });
    // Ajuster la taille du modal en fonction de l'image
    adjustModalSize("#imageCarouselModal4");
    // Écouter l'événement afterChange du carousel pour ajuster la taille du modal
    $(".image-carousel", "#imageCarouselModal4").on("afterChange", function () {
      adjustModalSize("#imageCarouselModal4");
    });
  });
  // Ouvrir le modal 5
  $("#openModalImg5").on("click", function () {
    $("#imageCarouselModal5").addClass("show");
    $(".image-carousel", "#imageCarouselModal5").slick({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: "#prevBtn5",
      nextArrow: "#nextBtn5",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },],
      adaptiveHeight: true, // Activer l'adaptation de la hauteur
    });
    // Ajuster la taille du modal en fonction de l'image
    adjustModalSize("#imageCarouselModal5");
    // Écouter l'événement afterChange du carousel pour ajuster la taille du modal
    $(".image-carousel", "#imageCarouselModal5").on("afterChange", function () {
      adjustModalSize("#imageCarouselModal5");
    });
  });
  // Fermer le modal
  $(".modal-close, .modal-wrapper").on("click", function (e) {
    if (e.target === this || $(e.target).hasClass("modal-close")) {
      $(this).removeClass("show");
      $(".image-carousel").slick("unslick");
    }
  });

  // A faire àméliorer
  //Overlay
  $(document).ready(function () {
    $('.overlay').click(function () {
      var target = $(this).data('target');
      $(target).modal('show');
    });
  });
  // Fonction pour ajuster la taille du modal en fonction de l'image
  function adjustModalSize(modalId) {
    const currentSlide = $(".image-carousel .slick-current .modal-img", modalId);
    const imgWidth = currentSlide[0].naturalWidth;
    const imgHeight = currentSlide[0].naturalHeight;
    $(".modal-img-container", modalId).css({
      width: imgWidth,
      height: imgHeight,
    });
  }
});