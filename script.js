// == SALUDO == 
function simularSaludo() {
    var saludoEmoji = document.querySelector('.emoji');
    var nombrePresentacion = document.querySelector('.nombre__presentacion');
    
    saludoEmoji.style.opacity = '1';
    saludoEmoji.style.animation = 'wave 0.5s ease-in-out';
    
    nombrePresentacion.style.transform = 'translateX(100px)';
    
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
    nombrePresentacion.style.transform = 'translateX(100px)';
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


const verMasBtn = document.getElementById('mas_proyectos');
const proyectosAdicionales = document.getElementById('proyectos_adicionales');

verMasBtn.addEventListener("click", () => {
    proyectosAdicionales.classList.toggle("oculto");
    if (langValue === "es"){
        if (proyectosAdicionales.classList.contains("oculto")) {
            verMasBtn.textContent = "Ver más proyectos";
        } else {
            verMasBtn.textContent = "Ver menos proyectos";
            
        }
    } else if (langValue === "en") {
        if (proyectosAdicionales.classList.contains("oculto")) {
            verMasBtn.textContent = "See more projects";
        } else {
            verMasBtn.textContent = "See less projects";
            
        }
    } else {

    }
});

// == BOTÓN PARA VOLVER AL INICIO ==

const botonFlotante = document.querySelector('.flotante');

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    botonFlotante.classList.add('mostrar'); // Agrega la clase 'mostrar'
  } else {
    botonFlotante.classList.remove('mostrar'); // Remueve la clase 'mostrar'
  }
});






