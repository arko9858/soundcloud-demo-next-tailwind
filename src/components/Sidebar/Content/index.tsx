import SidebarContentItem from "./ContentItem";

const mockData = [
  {
    artist: "Mozart",
    title: "Requiem in D minor, K. 626 Lacrimosa",
    image: "https://i1.sndcdn.com/artworks-3mkSURgQY9gV-0-t50x50.jpg",
    playbacks: "149K",
    favorites: "3,354",
  },
  {
    artist: "Timo Feng",
    title: "冯提莫：如果有一天 你会来看一看我吧《漠河舞厅》",
    image: "https://i1.sndcdn.com/artworks-ziWznmVYvuT2nyey-E0btYg-t50x50.jpg",
    playbacks: "53",
    favorites: "17",
  },
  {
    artist: "StarTalk Radio",
    title: "The Future of Humanity with Elon Musk",
    image: "https://i1.sndcdn.com/artworks-000110797244-hg11a5-t50x50.jpg",
    playbacks: "53",
    favorites: "17",
  },
];

const SidebarContent = () => {
  return (
    <div>
      {mockData.map((el) => (
        <SidebarContentItem
          key={el.title}
          artist={el.artist}
          image={el.image}
          title={el.title}
          favorites={el.favorites}
          playbacks={el.playbacks}
        />
      ))}
    </div>
  );
};

export default SidebarContent;
