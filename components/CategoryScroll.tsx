"use client";
import { CATEGORIES } from "@/data/categories";

interface CategoryScrollProps {
  setCategory: (c: string) => void;
  onToast: (msg: string) => void;
}

export default function CategoryScroll({ setCategory, onToast }: CategoryScrollProps) {
  const handleClick = (id: string) => {
    setCategory(id);
    onToast("Category filter applied");
    document.getElementById("spots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="catsec" id="cats">
      <div className="catinn">
        <div className="sech">
          <div className="sect"><em>EXPLORE BY CATEGORY</em>カテゴリで探す</div>
          <button className="seeall" style={{ color: "var(--gold)", background: "none", border: "none", cursor: "pointer" }} onClick={() => { setCategory(""); onToast("Showing all spots"); document.getElementById("spots")?.scrollIntoView({ behavior: "smooth" }); }}>All →</button>
        </div>
        <div className="cscroll">
          {CATEGORIES.map((c, i) => (
            <div key={`${c.id}-${i}`} className="ccard" onClick={() => handleClick(c.id)}>
              <span className="ccico">{c.ico}</span>
              <div className="ccname">{c.n}</div>
              <div className="ccen">{c.en}</div>
              <div className="ccnum">{c.num.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
