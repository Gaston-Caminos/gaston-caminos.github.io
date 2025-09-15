// == SALUDO == 
function simularSaludo() {
    var saludoEmoji = document.querySelector('.emoji');
    var nombrePresentacion = document.querySelector('.nombre__presentacion');
    
    saludoEmoji.style.opacity = '1';
    saludoEmoji.style.animation = 'wave 0.5s ease-in-out';
    
    nombrePresentacion.style.transform = 'translateX(5vw)';
    
    // Revertir los cambios después de 1.5 segundos
    setTimeout(function() {
        saludoEmoji.style.opacity = '0';
        saludoEmoji.style.animation = 'none'; // Detener la animación
        nombrePresentacion.style.transform = 'translateX(0)';
    }, 1500); 
}

// Ejecutar el saludo automático después de 1 segundo
setTimeout(simularSaludo, 1000);

// Saludo al pasar el mouse por encima del texto
var saludoEmoji = document.querySelector('.emoji');
var nombrePresentacion = document.querySelector('.nombre__presentacion');

nombrePresentacion.addEventListener('mouseover', function() {
    saludoEmoji.style.opacity = '1';
    saludoEmoji.style.animation = 'wave 0.5s ease-in-out';
    nombrePresentacion.style.transform = 'translateX(5vw)';
});

nombrePresentacion.addEventListener('mouseout', function() {
    saludoEmoji.style.opacity = '0';
    saludoEmoji.style.animation = 'none'; // Detener la animación
    nombrePresentacion.style.transform = 'translateX(0)';
});

// Saludo automático y movimiento del texto al cargar la página
//window.addEventListener('load', simularSaludo);

// Agrego la animación de "wave" también al pasar el mouse por encima del emoji
saludoEmoji.addEventListener('mouseover', function() {
    saludoEmoji.style.animation = 'wave 0.5s ease-in-out';
});

saludoEmoji.addEventListener('mouseout', function() {
    saludoEmoji.style.animation = 'none';
});
// == MENU HAMBURGUESA =======

const toggleButton = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu__menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});
document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// == CÁLCULO DE LA EDAD EN LA SECCIÓN "SOBRE MÍ" ==
/**
 * Calcula la edad basada en la fecha de nacimiento y la fecha actual.
 * @param {Date} fechaNacimiento La fecha de nacimiento en formato Date.
 * @returns {number} La edad calculada.
 */
document.addEventListener("DOMContentLoaded", function() {
    
    const edadElemento = document.getElementById("edad");

    const fechaActual = new Date();

    
    const fechaNacimiento = new Date(1998, 9, 2); 

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    edadElemento.textContent = edad;
});

// == FRASES ALEATORIAS AL COMIENZO Y EN "IDIOMAS" ==
const langValue = document.documentElement.lang;

const frases = [
    '"Aprender es como remar contra corriente: en cuanto se deja, se retrocede." - Edward Benjamin Britten.',
    '"La actividad más importante que un ser humano puede lograr es aprender para entender, porque entender es ser libre." - Baruch Spinoza.',
    '"Me lo contaron y lo olvidé; lo vi y lo entendí; lo hice y lo aprendí." - Confucio.',
    '"Cuando lo que eres, es lo que quieres ser, eso es felicidad." - Malcom Forbes.',
    '"El único límite para nuestros logros de mañana son nuestras dudas de hoy." - Franklin D. Roosevelt',
    '"No busques los errores, busca un remedio." - Henry Ford',
    '"El éxito es la suma de pequeños esfuerzos repetidos día tras día." - Robert Collier',
    '"La mejor manera de predecir el futuro es crearlo." - Peter Drucker',
    '"El futuro pertenece a quienes creen en la belleza de sus sueños." - Eleanor Roosevelt',
    '"No importa cuántas veces te caigas, lo importante es cuántas veces te levantes." - Vince Lombardi',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello." - Charles R. Swindoll',
    '"El éxito es aprender a ir de fracaso en fracaso sin desesperarse." - Winston Churchill',
]

const phrases = [
    '"Learning is like rowing upstream: as soon as you stop, you go backwards." - Edward Benjamin Britten.',
    '"The most important activity a human being can achieve is learning to understand, because understanding is being free." - Baruch Spinoza.',
    '"I hear and I forget; I see and I remember; I do and I understand." - Confucius.',
    '"When what you are is what you want to be, that is happiness." - Malcom Forbes.',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"Don\'t find fault, find a remedy." - Henry Ford',
    '"Success is the sum of small efforts repeated day in and day out." - Robert Collier',
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
    '"It doesn\'t matter how many times you fall, what matters is how many times you get back up." - Vince Lombardi',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
    '"Success is going from failure to failure without losing your enthusiasm." - Winston Churchill',
];

const phrasen = [
    '"Lernen ist wie gegen den Strom rudern: Sobald man aufhört, geht man zurück." - Edward Benjamin Britten.',
    '"Die wichtigste Aktivität, die ein Mensch erreichen kann, ist das Lernen, um zu verstehen, denn Verstehen bedeutet Freiheit." - Baruch Spinoza.',
    '"Mir wurde erzählt und ich habe es vergessen; ich habe es gesehen und verstanden; ich habe es getan und gelernt." - Konfuzius.',
    '"Wenn das, was du bist, das ist, was du sein willst, dann ist das Glück." - Malcom Forbes.',
    '"Die einzige Grenze für unsere zukünftigen Erfolge sind unsere heutigen Zweifel." - Franklin D. Roosevelt',
    '"Suche nicht nach Fehlern, suche nach einer Lösung." - Henry Ford',
    '"Erfolg ist die Summe kleiner Anstrengungen, die Tag für Tag wiederholt werden." - Robert Collier',
    '"Die beste Art, die Zukunft vorherzusagen, ist, sie zu gestalten." - Peter Drucker',
    '"Die Zukunft gehört denen, die an die Schönheit ihrer Träume glauben." - Eleanor Roosevelt',
    '"Es spielt keine Rolle, wie oft du fällst, wichtig ist, wie oft du aufstehst." - Vince Lombardi',
    '"Der einzige Weg, um großartige Arbeit zu leisten, ist es, das zu lieben, was du tust." - Steve Jobs',
    '"Das Leben besteht zu 10% aus dem, was uns passiert, und zu 90% aus unserer Reaktion darauf." - Charles R. Swindoll',
    '"Erfolg bedeutet, zu lernen, von Misserfolg zu Misserfolg zu gehen, ohne die Hoffnung zu verlieren." - Winston Churchill',
]


const frasesIdiomas = [
    '"Aprender un idioma es tener una ventana más desde la que observar el mundo". - Proverbio chino.',
    '"El lenguaje nos ayuda a capturar el mundo, y cuanto menos lenguaje tengamos, menos mundo capturamos". - Fernando Lázaro Carreter.',
    '"Saber otro idioma es como poseer una segunda alma". - Carlomagno.',
    '"Vives una vida nueva con cada idioma que hablas". - Proverbio checo.',
    '"Con los idiomas estás en casa en cualquier lugar". - Edward De Waal.',
    '"Si hablas a una persona en una lengua que entiende, las palabras irán a su cabeza. Si le hablas en su propia lengua, las palabras irán a su corazón". - Nelson Mandela.',
    'Un idioma te pone en el corredor de la vida. Dos idiomas te abren cada puerta del camino". - Frank Smith.',
    '"El conocimiento de idiomas es la puerta a la sabiduría". - Roger Baco.',
    '"No puedes entender un idioma al menos que entiendas al menos dos". - Geoffrey Willans.',
    '"El hombre es tantas veces hombre cuanto es el número de lenguas que ha aprendido". - Carlos I de España.',
    '"Quien no conoce las lenguas extranjeras nada sabe de la suya propia". - Johann Wolfgang von Goethe.',
    '"El idioma es el mapa de carreteras de una cultura. Te dice de dónde viene su gente y hacia dónde se dirige". - Rita Mae Brown.',
    '"Habla una nueva lengua para que el mundo sea un nuevo mundo". - Rumi.',
    '"Si hablásemos un lenguaje distinto, percibiríamos un mundo distinto". - Ludwig Wittgenstein.',
    '"Aprender otro idioma no solo revela cómo piensan y sienten otras sociedades, sus experiencias y valores y cómo se expresan; también proporciona un espejo cultural en el que poder ver más claramente nuestra propia sociedad". - Edward Lee Gorsuch.',
    '"Aprender un segundo idioma te abre más puertas que un millón de llaves". - Anónimo.',
    '"Aquel que habla sólo una lengua es una persona, pero el que habla dos lenguas es dos personas". - Proverbio turco.',
    '"La dificultad de un idioma es inversamente proporcional a la fuerza de motivación para aprenderlo". - Reg Hindley.',
];

const languageQuotes = [
    '"Learning a language is having one more window from which to observe the world." - Chinese proverb.',
    '"Language helps us capture the world, and the less language we have, the less world we capture." - Fernando Lázaro Carreter.',
    '"Knowing another language is like possessing a second soul." - Charlemagne.',
    '"You live a new life for every language you speak." - Czech proverb.',
    '"With languages, you are at home anywhere." - Edmund De Waal.',
    '"If you speak to a person in a language they understand, the words will go to their head. If you speak to them in their own language, the words will go to their heart." - Nelson Mandela.',
    '"One language sets you in the corridor for life. Two languages open every door along the way." - Frank Smith.',
    '"The knowledge of languages is the door to wisdom." - Roger Bacon.',
    '"You can’t understand a language unless you understand at least two." - Geoffrey Willans.',
    '"A man is as many times a man as the number of languages he has learned." - Charles I of Spain.',
    '"One who does not know foreign languages knows nothing of their own." - Johann Wolfgang von Goethe.',
    '"Language is the roadmap of a culture. It tells you where its people come from and where they are going." - Rita Mae Brown.',
    '"Speak a new language so that the world will be a new world." - Rumi.',
    '"If we spoke a different language, we would perceive a different world." - Ludwig Wittgenstein.',
    '"Learning another language not only reveals how other societies think and feel, their experiences and values, and how they express themselves; it also provides a cultural mirror in which to see our own society more clearly." - Edward Lee Gorsuch.',
    '"Learning a second language opens more doors than a million keys." - Anonymous.',
    '"He who knows only one language is one person, but he who knows two languages is two people." - Turkish proverb.',
    '"The difficulty of a language is inversely proportional to the strength of motivation to learn it." - Reg Hindley.',
];

const phrasenS = [
    '"Eine Sprache zu lernen bedeutet, ein weiteres Fenster zu haben, durch das man die Welt betrachten kann." - Chinesisches Sprichwort.',
    '"Sprache hilft uns, die Welt einzufangen, und je weniger Sprache wir haben, desto weniger Welt fangen wir ein." - Fernando Lázaro Carreter.',
    '"Eine andere Sprache zu beherrschen ist wie eine zweite Seele zu besitzen." - Karl der Große.',
    '"Du lebst ein neues Leben mit jeder Sprache, die du sprichst." - Tschechisches Sprichwort.',
    '"Mit Sprachen fühlst du dich überall zu Hause." - Edward De Waal.',
    '"Wenn du zu einer Person in einer Sprache sprichst, die sie versteht, gehen die Worte in ihren Kopf. Wenn du zu ihr in ihrer eigenen Sprache sprichst, gehen die Worte in ihr Herz." - Nelson Mandela.',
    '"Eine Sprache setzt dich in den Flur des Lebens. Zwei Sprachen öffnen dir jede Tür auf dem Weg." - Frank Smith.',
    '"Sprachkenntnisse sind der Schlüssel zur Weisheit." - Roger Baco.',
    '"Du kannst eine Sprache nicht verstehen, es sei denn, du verstehst mindestens zwei." - Geoffrey Willans.',
    '"Ein Mann ist so oft ein Mann, wie er Sprachen gelernt hat." - Karl I. von Spanien.',
    '"Wer keine Fremdsprachen kennt, weiß nichts über seine eigene." - Johann Wolfgang von Goethe.',
    '"Sprache ist die Straßenkarte einer Kultur. Sie sagt dir, woher ihre Menschen kommen und wohin sie gehen." - Rita Mae Brown.',
    '"Sprich eine neue Sprache, damit die Welt eine neue Welt wird." - Rumi.',
    '"Wenn wir eine andere Sprache sprechen würden, würden wir eine andere Welt wahrnehmen." - Ludwig Wittgenstein.',
    '"Das Erlernen einer anderen Sprache enthüllt nicht nur, wie andere Gesellschaften denken, fühlen, ihre Erfahrungen und Werte ausdrücken; es bietet auch einen kulturellen Spiegel, in dem wir unsere eigene Gesellschaft klarer sehen können." - Edward Lee Gorsuch.',
    '"Das Erlernen einer zweiten Sprache öffnet dir mehr Türen als eine Million Schlüssel." - Anonym.',
    '"Wer nur eine Sprache spricht, ist eine Person, aber wer zwei Sprachen spricht, ist zwei Personen." - Türkisches Sprichwort.',
    '"Die Schwierigkeit einer Sprache steht im umgekehrten Verhältnis zur Motivation, sie zu lernen." - Reg Hindley.',
]

  
function mostrarFraseAleatoria() {
    if (langValue === "es") {
        const fraseAleatoria = frasesIdiomas[Math.floor(Math.random() * frasesIdiomas.length)];
        const frasePresentacion = frases[Math.floor(Math.random() * frases.length)];
        document.getElementById('fraseIdioma').textContent = fraseAleatoria;
        document.getElementById('fraseAleatoria').textContent = frasePresentacion;
    } else if (langValue === "en") {
        const fraseAleatoria = languageQuotes[Math.floor(Math.random() * languageQuotes.length)];
        const frasePresentacion = phrases[Math.floor(Math.random() * phrases.length)];
        document.getElementById('fraseIdioma').textContent = fraseAleatoria;
        document.getElementById('fraseAleatoria').textContent = frasePresentacion;
    } else {
        const fraseAleatoria = phrasenS[Math.floor(Math.random() * phrasenS.length)];
        const frasePresentacion = phrasen[Math.floor(Math.random() * phrasen.length)];
        document.getElementById('fraseIdioma').textContent = fraseAleatoria;
        document.getElementById('fraseAleatoria').textContent = frasePresentacion;
    }
}
  
mostrarFraseAleatoria();

// == LISTA DESPLEGABLE PARA VER MÁS PROYECTOS ==

document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid-item:not(.grid-item--cta)");
  const modal = document.getElementById("modal-proyectos");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");
  const modalClose = document.querySelector(".modal-close");
  const modalImage = document.getElementById("modal-image");

  // Abrir modal al hacer clic en un proyecto
  gridItems.forEach(item => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const description = item.getAttribute("data-description");
      const link = item.getAttribute("data-link");

      item.addEventListener("click", () => {
        /*modalImage.src = item.querySelector("img").src; // copia la imagen clickeada*/
        const nuevaImagen = item.querySelector("img").src;
        const tempImg = new Image();
        tempImg.src = nuevaImagen;
        tempImg.onload = () => {
        modalImage.src = nuevaImagen;
        };

        modalTitle.textContent = item.getAttribute("data-title");
        modalDescription.textContent = item.getAttribute("data-description");
        modalLink.href = item.getAttribute("data-link");
        modal.classList.remove("oculto");
        });
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      // Botón con estilo tipo ResearchGate
      modalLink.textContent = "Ver en ResearchGate";
      modalLink.href = link;

      modal.classList.remove("oculto");
      document.body.classList.add('no-scroll');
    });
  });

  // Cerrar modal al hacer clic en la X
  modalClose.addEventListener("click", () => {
    modal.classList.add("oculto");
    document.body.classList.remove('no-scroll');
  });

  // Cerrar modal si se hace clic fuera del contenido
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("oculto");
      document.body.classList.remove('no-scroll');
    }
  });

  // Cerrar modal con tecla ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modal.classList.add("oculto");
      document.body.classList.remove('no-scroll');
    }
  });
}); 


// ================================================================================ BOTON VER MAS PROYECTOS =====================================================================
const toggleBtn = document.getElementById('toggle-proyectos');
const gridProyectos = document.getElementById('grid-proyectos');

toggleBtn.addEventListener('click', () => {
    const expanded = gridProyectos.classList.toggle('expandido');
    if (expanded) {
        toggleBtn.textContent = "Ver menos proyectos";
    } else {
        toggleBtn.textContent = "Ver más proyectos";
        // hacer scroll hacia arriba para que el usuario vea la primera fila
        gridProyectos.scrollIntoView({ behavior: 'smooth' });
    }
});


// == CARRUSEL == 
function setupCarouselCircular(carouselId, interval = 3000) {
  const carousel = document.getElementById(carouselId);
  const track = carousel.querySelector('.carousel-track');
  let slides = Array.from(track.children);
  const prevButton = carousel.querySelector('.prev-btn');
  const nextButton = carousel.querySelector('.next-btn');

  const slideWidth = slides[0].getBoundingClientRect().width + 20; // ancho + margen

  // Calcular cuántas slides se ven en pantalla (aprox)
  const containerWidth = carousel.querySelector('.carousel-track-container').offsetWidth;
  const visibleSlidesCount = Math.round(containerWidth / slideWidth);

  // Clonar slides para loop infinito
  const clonesBefore = slides.slice(-visibleSlidesCount).map(slide => slide.cloneNode(true));
  const clonesAfter = slides.slice(0, visibleSlidesCount).map(slide => slide.cloneNode(true));

  clonesBefore.forEach(clone => {
    clone.classList.add('clone');
    track.insertBefore(clone, track.firstChild);
  });

  clonesAfter.forEach(clone => {
    clone.classList.add('clone');
    track.appendChild(clone);
  });

  // Actualizar lista de slides con clones
  slides = Array.from(track.children);

  /*********************************************************** */
  // Variables para modal
  const modalImgImg = document.getElementById('modal-img');
  const modalImgContent = document.getElementById('modal-img-content');
  const modalImgDescription = document.getElementById('modal-img-description');
  const modalImgClose = document.getElementById('modal-img-close');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');

  let modalCurrentIndex = null;

  // Abrir modal al click en slide
  slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
  if (slide.classList.contains('clone')) return;
        modalCurrentIndex = index;
        showModalImage(modalCurrentIndex);
    });
    });

    function showModalImage(index) {
    const slide = slides[index];
    const img = slide.querySelector('img');
    modalImgContent.src = img.src;
    modalImgContent.alt = img.alt;
    modalImgDescription.textContent = img.getAttribute("data-description");
    modalImgImg.classList.remove('oculto');
    document.body.classList.add('no-scroll');
    updateCenterClass();
    }

    modalPrev.addEventListener('click', () => {
    if (modalCurrentIndex === null) return;
    modalCurrentIndex = (modalCurrentIndex - 1 + slides.length) % slides.length;
    while (slides[modalCurrentIndex].classList.contains('clone')) {
        modalCurrentIndex = (modalCurrentIndex - 1 + slides.length) % slides.length;
    }
    showModalImage(modalCurrentIndex);
    });

    modalNext.addEventListener('click', () => {
    if (modalCurrentIndex === null) return;
    modalCurrentIndex = (modalCurrentIndex + 1) % slides.length;
    while (slides[modalCurrentIndex].classList.contains('clone')) {
        modalCurrentIndex = (modalCurrentIndex + 1) % slides.length;
    }
    showModalImage(modalCurrentIndex);
    });

    document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('oculto')) return; // Si modal cerrado, no hacer nada

    if (e.key === 'ArrowLeft') {
        // Navegar a imagen anterior
        modalCurrentIndex = (modalCurrentIndex - 1 + slides.length) % slides.length;
        while (slides[modalCurrentIndex].classList.contains('clone')) {
        modalCurrentIndex = (modalCurrentIndex - 1 + slides.length) % slides.length;
        }
        showModalImage(modalCurrentIndex);
    } else if (e.key === 'ArrowRight') {
        // Navegar a imagen siguiente
        modalCurrentIndex = (modalCurrentIndex + 1) % slides.length;
        while (slides[modalCurrentIndex].classList.contains('clone')) {
        modalCurrentIndex = (modalCurrentIndex + 1) % slides.length;
        }
        showModalImage(modalCurrentIndex);
    }
    });

    /**************************************************************** */

    // Empezar en el primer slide real (después de clonesBefore)
    let currentIndex = visibleSlidesCount;

    // Posicionar track para mostrar el primer slide real
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    // Función para actualizar clases center
    function updateCenterClass() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('center', i === currentIndex);
        });
    }

    updateCenterClass();

    let isTransitioning = false;

    function moveToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(${-slideWidth * index}px)`;
        currentIndex = index;

        updateCenterClass();
    }

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        // Si estoy en clones, saltar sin animación al slide real correspondiente
        if (currentIndex >= slides.length - visibleSlidesCount) {
            // Llegamos al clon después del último slide real
            track.style.transition = 'none';
            currentIndex = visibleSlidesCount;
            track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
            updateCenterClass();
        } else if (currentIndex < visibleSlidesCount) {
            // Llegamos al clon antes del primer slide real
            track.style.transition = 'none';
            currentIndex = slides.length - visibleSlidesCount * 2;
            track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
            updateCenterClass();
        }
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
        resetAutoSlide();
    });

    // Auto slide
    let autoSlideInterval = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, interval);

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, interval);                                                                         
    }

    // Click en slide para modal
    
    const modal = document.getElementById('modal-img');
    const modalImg = document.getElementById('modal-img-content');
    const modalClose = document.getElementById('modal-img-close');
    const modalDescription = document.getElementById('modal-img-description');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('clone')) return;
            const img = slide.querySelector('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalDescription.textContent = img.getAttribute("data-description");
            console.log("La descripción es" + modalDescription.textContent);
            modal.classList.remove('oculto');
            document.body.classList.add('no-scroll');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.add('oculto');
        document.body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('oculto');
            document.body.classList.remove('no-scroll');
        }
    });

    // Cerrar modal con tecla ESC
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
        modal.classList.add("oculto");
        document.body.classList.remove('no-scroll');
        }
    });

    // Inicializa
    updateCenterClass();
}

setupCarouselCircular('carousel-experiencias', 3000)

// ============ LINEA DE TIEMPO ==================
const timeline = document.getElementById("timeline");

  let autoScrolling = true;  // controla si el scroll automático está activo
  let direction = 1;         // 1 = derecha, -1 = izquierda

  // Scroll automático que cambia de dirección al llegar a los bordes
  function autoScroll() {
    if (!autoScrolling) return;

    timeline.scrollLeft += direction;

    if (timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth) {
      direction = -1; // cambia a izquierda
    }
    if (timeline.scrollLeft <= 0) {
      direction = 1; // cambia a derecha
    }
  }
  let autoScrollInterval = setInterval(autoScroll, 50);

  // Drag con mouse
  let isDown = false;
  let startX;
  let scrollLeft;

  timeline.addEventListener("mousedown", (e) => {
    isDown = true;
    autoScrolling = false; // detener auto scroll
    startX = e.pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
  });

  timeline.addEventListener("mouseleave", () => {
    isDown = false;
  });

  timeline.addEventListener("mouseup", () => {
    isDown = false;
  });

  timeline.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timeline.offsetLeft;
    const walk = (x - startX) * 2; // velocidad drag
    timeline.scrollLeft = scrollLeft - walk;
  });

  // Si el usuario hace clic o hover sobre la línea de tiempo → pausa el auto scroll
  timeline.addEventListener("mouseenter", () => {
    autoScrolling = false;
  });
  timeline.addEventListener("mouseleave", () => {
    autoScrolling = true;
  });
  timeline.addEventListener("click", () => {
    autoScrolling = false; // el click pausa el scroll automático
  });
  timeline.addEventListener("mousedown", (e) => {
  isDown = true;
  autoScrolling = false; // detener auto scroll
  timeline.classList.add("active"); // puño cerrado
  startX = e.pageX - timeline.offsetLeft;
  scrollLeft = timeline.scrollLeft;
});

timeline.addEventListener("mouseup", () => {
  isDown = false;
  timeline.classList.remove("active"); // vuelve a puño abierto
});

timeline.addEventListener("mouseleave", () => {
  isDown = false;
  timeline.classList.remove("active");
});


// == VISUALIZAR CERTIFICADOS == //
// Selección de elementos
const certificados = document.querySelectorAll(".certificado-item");
const modalCertificados = document.getElementById("modal-certificados");
const modalCertificadosImg = document.getElementById("modal-certificados-content");
const modalCertificadosClose = document.getElementById("modal-certificados-close");

// Click en certificado para abrir modal
certificados.forEach(cert => {
    cert.addEventListener("click", () => {
        const img = cert.querySelector("img");
        const fullImg = cert.getAttribute("data-img") || img.src; // Usa data-img si existe
        modalCertificadosImg.src = fullImg;
        modalCertificadosImg.alt = img.alt;
        modalCertificados.classList.remove("oculto");
        document.body.classList.add('no-scroll');
    });
});

// Cerrar modal con la X
modalCertificadosClose.addEventListener("click", () => {
    modalCertificados.classList.add("oculto");
    document.body.classList.remove('no-scroll');
});

// Cerrar modal al hacer click fuera de la imagen
modalCertificados.addEventListener("click", (e) => {
    if (e.target === modalCertificados) {
        modalCertificados.classList.add("oculto");
        document.body.classList.remove('no-scroll');
    }
});

// Cerrar modal con tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalCertificados.classList.add("oculto");
        document.body.classList.remove('no-scroll');
    }
});


// == BOTÓN PARA VOLVER AL INICIO ==

const botonFlotante = document.querySelector('.flotante');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1200) {
    botonFlotante.classList.add('mostrar'); // Agrega la clase "mostrar"
  } else {
    botonFlotante.classList.remove('mostrar'); // Remueve la clase "mostrar"
  }
});