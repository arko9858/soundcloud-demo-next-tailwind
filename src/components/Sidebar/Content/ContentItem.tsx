import HeartIcon from "@/components/Icons/Heart";
import PlayIcon from "@/components/Icons/Play";
import { FC } from "react";

interface ISidebarContentItem {
  title: string;
  image: string;
  artist: string;
  playbacks: string;
  favorites: string;
}

const SidebarContentItem: FC<ISidebarContentItem> = ({
  title,
  image,
  artist,
  favorites,
  playbacks,
}) => {
  return (
    <a className="flex my-5" href="/">
      <div className="mr-2">
        <div
          style={{
            display: "block",
            height: "50px",
            width: "50px",
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
      <div className="flex flex-col text-sm font-thin overflow-hidden">
        <div className="text-gray-2 hover:text-gray-1">{artist}</div>
        <div className="truncate text-gray-1 font-thin hover:text-black hover:cursor-pointer mb-1">
          {title}
        </div>
        <div className="flex text-gray-2 text-xxs font-thin">
          <div className="flex items-center mr-3">
            <div className="h-3 w-3 mr-2 pb-3">
              <PlayIcon />
            </div>
            <div className="tracking-wider">{playbacks}</div>
          </div>
          <div className="flex items-center mr-3">
            <div className="h-3 w-3 mr-2 pb-3">
              <HeartIcon />
            </div>
            <div className="tracking-wider">{favorites}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SidebarContentItem;
