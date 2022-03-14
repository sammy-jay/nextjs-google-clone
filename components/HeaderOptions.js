import HeaderOptionSingular from "./HeaderOptionSingular";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[2px]">
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOptionSingular Icon={SearchIcon} title="All" selected />
        <HeaderOptionSingular Icon={PhotographIcon} title="Images" />
        <HeaderOptionSingular Icon={PlayIcon} title="Videos" />
        <HeaderOptionSingular Icon={NewspaperIcon} title="News" />
        <HeaderOptionSingular Icon={MapIcon} title="Maps" />
        <HeaderOptionSingular Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
