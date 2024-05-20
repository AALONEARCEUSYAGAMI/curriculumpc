
//priemr carrucel
document.addEventListener('DOMContentLoaded', function () {
  const mainSlides = document.querySelectorAll(".carousel-slide");
  const thumbnailSlides = document.querySelectorAll(".thumbnail");
  const carouselItems = document.querySelectorAll('.carousel-slide');
  let currentIndex = 0;

  const updateCarousel = () => {
      mainSlides.forEach((slide, index) => {
          const altText = slide.querySelector('img').getAttribute('alt');
          let h1Title = slide.querySelector('h1');

          if (!h1Title) {
              h1Title = document.createElement('h1');
              h1Title.textContent = altText;
              slide.insertBefore(h1Title, slide.firstChild);
          } else {
              h1Title.textContent = altText;
          }

          // Establecer un tamaño de fuente más grande para la etiqueta h1
          h1Title.style.fontSize = "2em";

          slide.style.display = index === currentIndex ? "block" : "none";
      });

      thumbnailSlides.forEach((thumbnail, index) => {
          thumbnail.classList.toggle("active-thumbnail", index === currentIndex);
      });

      highlightActiveCarouselItem();
  };

  const highlightActiveCarouselItem = () => {
      thumbnailSlides.forEach((thumbnail, index) => {
          thumbnail.classList.toggle("active-carousel", index === currentIndex);
      });
  };

  thumbnailSlides.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
          currentIndex = index;
          updateCarousel();
      });
  });

  updateCarousel();
});


  // Segundo carrusel
  document.addEventListener('DOMContentLoaded', function () {
    const mainSlides1 = document.querySelectorAll(".carousel-slide-1");
    const thumbnailSlides1 = document.querySelectorAll(".thumbnail-1");
    let currentIndex1 = 0;

    const updateCarousel1 = () => {
        mainSlides1.forEach((slide, index) => {
            const altText = slide.querySelector('img').getAttribute('alt');
            let h1Title = slide.querySelector('h1');

            if (!h1Title) {
                h1Title = document.createElement('h1');
                h1Title.textContent = altText;
                slide.insertBefore(h1Title, slide.firstChild);
            } else {
                h1Title.textContent = altText;
            }

            // Establecer un tamaño de fuente más grande para la etiqueta h1
            h1Title.style.fontSize = " 2em";

            slide.style.display = index === currentIndex1 ? "block" : "none";
        });

        thumbnailSlides1.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active-thumbnail-1", index === currentIndex1);
        });

        highlightActiveCarouselItem1();
    };

    const highlightActiveCarouselItem1 = () => {
        thumbnailSlides1.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active-carousel-1", index === currentIndex1);
        });
    };

    thumbnailSlides1.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex1 = index;
            updateCarousel1();
        });
    });

    updateCarousel1();
});
  // Tercver carrucel
  document.addEventListener('DOMContentLoaded', function () {
    const mainSlides1 = document.querySelectorAll(".carousel-slide-2");
    const thumbnailSlides1 = document.querySelectorAll(".thumbnail-2");
    const carouselItems1 = document.querySelectorAll('.carousel-slide-2');

    let currentIndex1 = 0;

    const updateCarousel1 = () => {
      mainSlides1.forEach((slide, index) => {
        if (index === currentIndex1) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });

      thumbnailSlides1.forEach((thumbnail, index) => {
        if (index === currentIndex1) {
          thumbnail.classList.add("active-thumbnail-2");
        } else {
          thumbnail.classList.remove("active-thumbnail-2");
        }
      });

      highlightActiveCarouselItem1();
    };

    const highlightActiveCarouselItem1 = () => {
      thumbnailSlides1.forEach((thumbnail, index) => {
        if (index === currentIndex1) {
          thumbnail.classList.add("active-carousel-2");
        } else {
          thumbnail.classList.remove("active-carousel-2");
        }
      });
    };

    thumbnailSlides1.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        currentIndex1 = index;
        updateCarousel1();
      });
    });

    // Asegurarse de llamar a la función de actualización al cargar la página
    updateCarousel1();
  });

  // cuartocarrcel
  document.addEventListener('DOMContentLoaded', function () {
    const mainSlides1 = document.querySelectorAll(".carousel-slide-3");
    const thumbnailSlides1 = document.querySelectorAll(".thumbnail-3");
    const carouselItems1 = document.querySelectorAll('.carousel-slide-3');

    let currentIndex1 = 0;

    const updateCarousel1 = () => {
      mainSlides1.forEach((slide, index) => {
        if (index === currentIndex1) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });

      thumbnailSlides1.forEach((thumbnail, index) => {
        if (index === currentIndex1) {
          thumbnail.classList.add("active-thumbnail-3");
        } else {
          thumbnail.classList.remove("active-thumbnail-3");
        }
      });

      highlightActiveCarouselItem1();
    };

    const highlightActiveCarouselItem1 = () => {
      thumbnailSlides1.forEach((thumbnail, index) => {
        if (index === currentIndex1) {
          thumbnail.classList.add("active-carousel-3");
        } else {
          thumbnail.classList.remove("active-carousel-3");
        }
      });
    };

    thumbnailSlides1.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        currentIndex1 = index;
        updateCarousel1();
      });
    });

    // Asegurarse de llamar a la función de actualización al cargar la página
    updateCarousel1();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const mainSlides1 = document.querySelectorAll(".carousel-slide-3");
    const thumbnailSlides1 = document.querySelectorAll(".thumbnail-3");
    const carouselItems1 = document.querySelectorAll('.carousel-slide-3');

    let currentIndex1 = 0;

    const updateCarousel1 = () => {
      mainSlides1.forEach((slide, index) => {
        if (index === currentIndex1) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });

      thumbnailSlides1.forEach((thumbnail, index) => {
        if (index === currentIndex1) {
          thumbnail.classList.add("active-thumbnail-3");
        } else {
          thumbnail.classList.remove("active-thumbnail-3");
        }
      });

      highlightActiveCarouselItem1();
    };

    const highlightActiveCarouselItem1 = () => {
      thumbnailSlides1.forEach((thumbnail, index) => {
        if (index === currentIndex1) {
          thumbnail.classList.add("active-carousel-3");
        } else {
          thumbnail.classList.remove("active-carousel-3");
        }
      });
    };

    thumbnailSlides1.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        currentIndex1 = index;
        updateCarousel1();
      });
    });

    // Asegurarse de llamar a la función de actualización al cargar la página
    updateCarousel1();
  });
   // quinto carrusel
   document.addEventListener('DOMContentLoaded', function () {
    const mainSlides4 = document.querySelectorAll(".carousel-slide-4");
    const thumbnailSlides4 = document.querySelectorAll(".thumbnail-4");
    let currentIndex4 = 0;

    const updateCarousel4 = () => {
        mainSlides4.forEach((slide, index) => {
            const altText = slide.querySelector('img').getAttribute('alt');
            let h1Title = slide.querySelector('h1');

            if (!h1Title) {
                h1Title = document.createElement('h1');
                h1Title.textContent = altText;
                slide.insertBefore(h1Title, slide.firstChild);
            } else {
                h1Title.textContent = altText;
            }

            // Establecer un tamaño de fuente más grande para la etiqueta h1
            h1Title.style.fontSize = " 2em";

            slide.style.display = index === currentIndex4 ? "block" : "none";
        });

        thumbnailSlides4.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active-thumbnail-4", index === currentIndex4);
        });

        highlightActiveCarouselItem4();
    };

    const highlightActiveCarouselItem4 = () => {
        thumbnailSlides4.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active-carousel-4", index === currentIndex4);
        });
    };

    thumbnailSlides4.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex4 = index;
            updateCarousel4();
        });
    });

    updateCarousel4();
});