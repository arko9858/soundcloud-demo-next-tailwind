import { FC } from "react";

interface IModuleData {
  image: string;
  title: string;
  artist: string;
}

interface IMixedSelectionModule {
  title: string;
  data: IModuleData[];
}

const MixedSelectionModule: FC<IMixedSelectionModule> = ({ title, data }) => {
  return (
    <>
      <h2 className="text-2xl font-thin text-gray-1 leading-6 mb-7">{title}</h2>
      <div className="flex">
        {data.map((el) => (
          <div key={el.title} className="w-44 mr-5">
            <div className="bg-red-100 h-44 w-full">
              <img className="h-full w-full" src={el.image} />
            </div>
            <div className="flex flex-col py-1">
              <a
                href="/"
                className="truncate text-sm text-thin text-gray-1 hover:text-black leading-6"
              >
                {el.title}
              </a>
              <a
                href="/"
                className="truncate text-xs text-thin text-gray-2 hover:text-gray-1 leading-5 "
              >
                {el.artist}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-slate-200 my-8" />
    </>
  );
};

export default MixedSelectionModule;
