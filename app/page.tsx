"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useFilterState } from "@/hooks/useFilterState";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SeasonBar from "@/components/SeasonBar";
import CategoryBar from "@/components/CategoryBar";
import StatsBar from "@/components/StatsBar";
import RegionGrid from "@/components/RegionGrid";
import SpotGrid from "@/components/SpotGrid";
import SeasonalSection from "@/components/SeasonalSection";
import FoodGrid from "@/components/FoodGrid";
import CategoryScroll from "@/components/CategoryScroll";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

const MapModal = dynamic(() => import("@/components/MapModal"), { ssr: false });

export default function Home() {
  const { season, setSeason, category, setCategory, query, doSearch, filteredSpots } =
    useFilterState();
  const [mapOpen, setMapOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
  }, []);

  const clearToast = useCallback(() => {
    setToastMsg("");
  }, []);

  return (
    <>
      <Header onOpenMap={() => setMapOpen(true)} onToast={toast} />
      <Hero onSearch={doSearch} query={query} />
      <SeasonBar season={season} setSeason={setSeason} onToast={toast} />
      <CategoryBar category={category} setCategory={setCategory} />
      <StatsBar />
      <RegionGrid onToast={toast} />
      <SpotGrid spots={filteredSpots} onToast={toast} />
      <SeasonalSection setSeason={setSeason} />
      <FoodGrid onToast={toast} />
      <CategoryScroll setCategory={setCategory} onToast={toast} />
      <Footer />
      <MapModal open={mapOpen} onClose={() => setMapOpen(false)} onToast={toast} />
      <Toast message={toastMsg} onDone={clearToast} />
    </>
  );
}
