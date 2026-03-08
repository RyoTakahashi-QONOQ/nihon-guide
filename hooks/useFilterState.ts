"use client";
import { useState, useMemo, useCallback } from "react";
import { SPOTS } from "@/data/spots";
import { Spot } from "@/types";

export function useFilterState() {
  const [season, setSeason] = useState("all");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filteredSpots = useMemo<Spot[]>(() => {
    return SPOTS.filter((s) => {
      const ms = season === "all" || s.szn.includes(season as Spot["szn"][number]);
      const mc = category === "all" || s.cat === category;
      const mq =
        !query ||
        s.n.includes(query) ||
        s.en.toLowerCase().includes(query.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return ms && mc && mq;
    });
  }, [season, category, query]);

  const doSearch = useCallback((v: string) => {
    setQuery(v.trim());
  }, []);

  return { season, setSeason, category, setCategory, query, doSearch, filteredSpots };
}
