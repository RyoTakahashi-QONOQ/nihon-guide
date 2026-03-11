import Image from "next/image";
import { ArticleImage } from "@/types";

export default function ArticleGallery({ images, cols = 3 }: { images: ArticleImage[]; cols?: 2 | 3 }) {
  if (!images || images.length === 0) return null;
  return (
    <div className={`article-gallery${cols === 2 ? " cols-2" : ""}`}>
      {images.map((img, i) => (
        <figure key={i} className="article-fig">
          <div className="article-fig-img">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
          </div>
          {img.caption && <figcaption className="article-fig-cap">{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
