
import HeroCard from "../Components/HeroCard";
import NavBar from "../Components/NavBar";
import RibbonTag from "../Components/RibbonTag";
import FlashCountdown from "../Components/FlashCountdown";
import CardSlider from "../Components/CardSlider";
import Footer from "../Components/Footer";
import StatsCards from "../Components/StatsCards";
import { IoCameraOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import LaunchBanner from "../Components/LaunchBanner";
import FirstCard from "../Components/FirstCard";
import NewArrivalSection from "../Components/NewArrivalSection";
import SearviceCard from "../Components/SearviceCard";
import ScrollToTop from "../Components/ScrollToTop";
const stats = [
  {
    icon: IoCameraOutline,

    label: "Camera",
    active: false,

  },
  {
    icon: MdComputer,
    label: "Computer",
    active: true,
  },
  {
    icon: BsHeadphones,
    label: "Headphones",
    active: false,
  },
  {
    icon: BsSmartwatch,
    label: "watch",
    active: false,
  },
  {
    icon: CiMobile4,
    label: "Mobile's",
    active: false,
  },
  {
    icon: TbDeviceGamepad,
    value: "25k",
    label: "Gaming Device",
    active: false,
  },
];

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <div className=" max-w-6xl mx-auto px-4 space-y-8 md:space-y-8 my-10">
        <HeroCard />
        <div className="w-full flex  items-end gap-6 md:gap-10 flex-row">
          <div className="flex flex-col gap-2 md:gap-3">
            <RibbonTag title="Today's" textColor="text-red-400" />
            <span className="text-2xl md:text-1xl font-bold">Flash Sales</span>
          </div>
          <FlashCountdown />
        </div>
        <CardSlider />


        <div className="flex flex-col gap-2 md:gap-3">
          <RibbonTag title="Categories" textColor="text-red-400" />
          <span className="text-2xl md:text-1xl font-bold">Browse By Category</span>
        </div>
        <StatsCards stats={stats} isHome="true" />
        <div className="w-full h-[0.5px] bg-zinc-300 my-10"></div>
        <LaunchBanner
          category="Audio"
          title="Enhance Your Music Experience"
          description="Experience deep bass and crystal clear sound."
          image="/image/JBL_BOOMBOX.png"
          buttonText="Buy Now"
          buttonLink="/product/speaker"
          launchDate="2026-03-01T00:00:00"
        />
        <FirstCard TodayTag="Today'sExplore Our Products" />


        <NewArrivalSection
          bigImage="/image/playstation_large.png"
          womenImage="/image/capWoman.png"
          speakerImage="/image/playstation_small.png"
          perfumeImage="/image/perfume.png"
        />

        <div className="flex items-center justify-around gap-6 my-10">
          <SearviceCard />
          <SearviceCard />
          <SearviceCard />
        </div>

      </div>
    </>
  )
}

export default Home
