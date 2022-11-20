

class AudioItem {
  constructor(title, artist) {
    this._title = title;
    this._artist = artist;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}

class Song extends AudioItem {
  constructor(title, artist, releaseYear) {
    super(title, artist);
    this._releaseYear = releaseYear;
  }

  getSongInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`
  }
}

class PodcastEpisode extends AudioItem {
  constructor(title, artist, guest, duration) {
    super(title, artist);
    this._guest = guest;
    this._duration = duration;
  }

  getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} seconds)`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // el número total de minutos
    const seconds = this._duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ?  seconds : '0' + seconds}`;
  }
}

const song1 = new Song("Start Over", "Any Given Day");
const song2 = new Song("Bitter End", "The Veer Union");
const episode1 = new PodcastEpisode("Panda Park", "Hello Internet", null, 5670);
const episode2 = new PodcastEpisode("We Are All Pioneers", "User Defenders", "Sophia Prater", 4752);

const list = [song1, episode1, song2, episode2];

function getAudioInfo(audioList) {
  audioList.forEach((audioItem) => {
    if (audioItem.getSongInfo) {
      // registra información sobre la canción
       //console.log(super.getSongInfo)
      return super.getSongInfo();

    } else if (audioItem.getEpisodeInfo) {
      // registra información sobre el episodio de podcast
      //console.log(PodcastEpisode.getEpisodeInfo)
      return super.getEpisodeInfo();
    }
  });
}

getAudioInfo(list);