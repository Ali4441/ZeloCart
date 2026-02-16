import React from 'react'
import AboutHero from '../Components/AboutHero'
import SearviceCard from "../Components/SearviceCard";
import StatsCards from "../Components/StatsCards";
import TeamSection from "../Components/TeamSection";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Store, DollarSign, ShoppingBag, Wallet, } from "lucide-react";
import ScrollToTop from '../Components/ScrollToTop';
const stats = [
  {
    icon: Store,
    value: "10.5k",
    label: "Sallers active our site",
    active: false,
  },
  {
    icon: DollarSign,
    value: "33k",
    label: "Monthly Product Sale",
    active: true,
  },
  {
    icon: ShoppingBag,
    value: "45.5k",
    label: "Customer active in our site",
    active: false,
  },
  {
    icon: Wallet,
    value: "25k",
    label: "Anual gross sale in our site",
    active: false,
  },
];

const About = () => {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen flex flex-col items-center gap-24 pt-20 px-4">
        <AboutHero />
        <StatsCards stats={stats} />
        <TeamSection />

        {/* SERVICES */}
        <div className="w-full max-w-6xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <SearviceCard />
            <SearviceCard />
            <SearviceCard />
          </div>
        </div>
      </main>

    </>
  );
};

export default About
