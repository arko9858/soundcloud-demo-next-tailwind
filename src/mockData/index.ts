const playlists = {
  morningChillout: {
    image: "https://i1.sndcdn.com/artworks-000405464955-n4ge52-t200x200.jpg",
    title: "Morning Chillout",
    artist: "Mighty",
  },
  lofiForStudying: {
    image: "https://i1.sndcdn.com/artworks-000208627636-q5rfpn-t200x200.jpg",
    title: "lofi 4 studying",
    artist: "suri",
  },
  pianoDeepConcentration: {
    image: "https://i1.sndcdn.com/artworks-000075046140-457jdg-t200x200.jpg",
    title: "Piano Deep Concentration",
    artist: "Nitza Md",
  },
  sundayMusic: {
    image: "https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t200x200.jpg",
    title: "Sunday music and hot coffee",
    artist: "Omar",
  },
  bestOfChilliNation: {
    image:
      "https://i1.sndcdn.com/artworks-fgLZ2UWOCjLz3SlQ-B6wa2A-t200x200.jpg",
    title: "Best Of Chill Nation",
    artist: "Ilyana Azman",
  },
  chilliDeepAndHouse: {
    image:
      "https://i1.sndcdn.com/artworks-l4dyY179k0d3vC9n-MDy1jg-t200x200.jpg",
    title:
      "Chill & Deep House ~ Study, Lounge, Relax, Gaming ~ Audible Adderall #14",
    artist: "Resonance Music",
  },
  jazzHip4: {
    image: "https://i1.sndcdn.com/artworks-000446064162-wdgv66-t200x200.jpg",
    title: "Jazz hip 4",
    artist: "soo",
  },
  chillaxMode: {
    image: "https://i1.sndcdn.com/artworks-000134890657-dqetcc-t200x200.jpg",
    title: "Chillax Mode",
    artist: "J e z i k a ♡",
  },
  lateNightLofi: {
    image:
      "https://i1.sndcdn.com/artworks-fzX7DV6CUp3pSnfU-NTZIdw-t200x200.jpg",
    title: "Late Night Lofi",
    artist: "Ilyana Azman",
  },
  summarNights: {
    image: "https://i1.sndcdn.com/artworks-000168574912-3nhdl7-t200x200.jpg",
    title: "Summer Nights",
    artist: "Serene",
  },
  billiesSleepSounds: {
    image: "https://i1.sndcdn.com/artworks-000104946156-2z0ezc-t200x200.jpg",
    title: "Billies Sleep Sounds",
    artist: "Billie Kihega",
  },
  chilling: {
    image: "https://i1.sndcdn.com/artworks-000581259524-oi3gnw-t200x200.jpg",
    title: "chilling",
    artist: "2Ϙ.",
  },
};

const listData1 = [
  playlists.morningChillout,
  playlists.lofiForStudying,
  playlists.pianoDeepConcentration,
  playlists.sundayMusic,
];

const listData2 = [
  playlists.bestOfChilliNation,
  playlists.pianoDeepConcentration,
  playlists.chilliDeepAndHouse,
  playlists.lofiForStudying,
];

const listData3 = [
  playlists.jazzHip4,
  playlists.morningChillout,
  playlists.sundayMusic,
  playlists.chillaxMode,
];
const listData4 = [
  playlists.lateNightLofi,
  playlists.summarNights,
  playlists.billiesSleepSounds,
  playlists.chilling,
];

export const homePlaylists = [
  { title: "Recently Played", data: listData1 },
  { title: "Study", data: listData2 },
  { title: "Relax", data: listData3 },
  { title: "Sleep", data: listData4 },
];
