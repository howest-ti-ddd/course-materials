const slides = [
  'slide-00-interactive.html', // New interactive question slide
  'slide-01.html',
  'slide-02.html',
  'slide-03.html',
  'slide-04.html',
  'slide-05.html',
  'slide-05a-section.html', // New section slide: DDD Recap
  'slide-06.html',
  'slide-07.html',
  'slide-08.html',
  'slide-09.html',
  'slide-10a-section.html', // New section slide: Software Architecture Foundations
  'slide-11.html',
  'slide-12.html',
  'slide-13.html',
  'slide-14.html',
  'slide-10.html', // Moved "Architectural Partitioning" after "How Your Teams Shape Your Code"
  'slide-15.html',
  'slide-16.html',
  'slide-17.html',
  'slide-18.html',
  'slide-19.html',
  'slide-20.html',
  'slide-21.html',
  'slide-22.html',
  'slide-23-ac-section.html',
  'slide-24.html',
  'slide-25.html',
  'slide-26.html',
  'slide-27.html',
  'slide-28.html',
  'slide-29.html',
  'slide-30.html',
  'slide-31-ac-interactive.html',
  'slide-32-ac-interactive2.html',
  'slide-33-ac-tradeoffs.html',
  'slide-34.html',
  'slide-35.html',
  'slide-36.html',
  'slide-37.html',
  'slide-38.html',
  'slide-38a-lab.html',
  'slide-54.html',
  'slide-55.html',
  'slide-56.html',
  'slide-56a.html',
  'slide-56b.html',
  'slide-39.html',
  'slide-40.html',
  'slide-41.html',
  'slide-42.html',
  'slide-43.html',
  'slide-44.html',
  'slide-45.html',
  'slide-46.html',
  'slide-47.html',
  'slide-48.html',
  'slide-49.html',
  'slide-50.html',
  'slide-51.html',
  'slide-52.html',
  'slide-53.html',
  'slide-57.html',
  'slide-58.html',
  'slide-59.html'
];

let currentSlide = getCurrentSlideFromURL() || 1;
const totalSlides = slides.length;

function getCurrentSlideFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const slideParam = urlParams.get('slide');
    if (slideParam) {
        const slideNum = parseInt(slideParam);
        return slideNum >= 1 && slideNum <= slides.length ? slideNum : 1;
    }
    return null;
}

function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('slide', currentSlide);
    window.history.replaceState({}, '', url);
}

async function loadSlide(slideNumber) {
    try {
        const response = await fetch(slides[slideNumber - 1]);
        const slideContent = await response.text();
        document.getElementById('slide-container').innerHTML = slideContent;
        currentSlide = slideNumber;
        updateNav();
        updateURL();
    } catch (error) {
        console.error('Error loading slide:', error);
    }
}

function updateNav() {
    document.getElementById('slideCounter').innerText = `${currentSlide} / ${totalSlides}`;
    document.getElementById('prevBtn').style.display = currentSlide === 1 ? 'none' : 'block';
    document.getElementById('nextBtn').style.display = currentSlide === totalSlides ? 'none' : 'block';
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < totalSlides) {
        loadSlide(currentSlide + 1);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 1) {
        loadSlide(currentSlide - 1);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
         if (currentSlide < totalSlides) loadSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 1) loadSlide(currentSlide - 1);
    }
});

loadSlide(currentSlide);
