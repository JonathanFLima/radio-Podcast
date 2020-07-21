// window.addEventListener('load', start);
// foi usado <script defer src="script.js"></script>

let inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
let rangeFrequencies = document.querySelector('#rangeFrequencies');
let divPodcast = document.querySelector('#divPodcast');

function start() {
  rangeFrequencies.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  let currentFrequency = event.target.value;
  inputCurrentFrequency.value = currentFrequency + ' MHz';

  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {
  let foundPodcast = null;

  for (let i = 0; i < realPodcasts.length; i++) {
    let currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }

  if (foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p>Nehum podcast encontrado</p>';
  }
}

function renderPodcast(podcast) {
  divPodcast.innerHTML = '';

  let img = document.createElement('img');
  img.src = './img/' + podcast.img;
  img.alt = 'Podcast ' + podcast.title;
  img.title = 'Podcast ' + podcast.title;

  let title = document.createElement('h2');
  title.innerHTML =
    '<a href="' + podcast.link + '" target=_blank>' + podcast.title + '</a>';

  let description = document.createElement('p');
  description.textContent = podcast.description;

  divPodcast.appendChild(img);
  divPodcast.appendChild(title);
  divPodcast.appendChild(description);
}

start();
