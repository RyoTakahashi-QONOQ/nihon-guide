import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="fgr">
        <div className="fbrand">
          <div className="logo"><span className="logo-m">NIHON</span></div>
          <p>The most comprehensive Japan travel guide — built for every season, every region, every palate. Bringing the depth and beauty of Japan to travellers worldwide.</p>
          <p style={{ marginTop: "0.7rem", fontSize: "0.6rem", color: "rgba(255,255,255,.14)" }}>© 2024 NIHON Japan Travel Guide</p>
        </div>
        <div className="fcol">
          <h4>DISCOVER</h4>
          <ul>
            <li><Link href="/regions/hokkaido">Hokkaido</Link></li>
            <li><Link href="/regions/kansai">Kansai</Link></li>
            <li><Link href="/regions/kyushu">Kyūshū</Link></li>
            <li><Link href="/regions/okinawa">Okinawa</Link></li>
            <li><Link href="/regions/chubu">Chūbu</Link></li>
          </ul>
        </div>
        <div className="fcol">
          <h4>DESTINATIONS</h4>
          <ul>
            <li><Link href="/spots/tokyo">Tokyo</Link></li>
            <li><Link href="/spots/kyoto">Kyoto</Link></li>
            <li><Link href="/spots/osaka">Osaka</Link></li>
            <li><Link href="/spots/fuji">Mount Fuji</Link></li>
            <li><Link href="/spots/hiroshima">Hiroshima</Link></li>
          </ul>
        </div>
        <div className="fcol">
          <h4>CUISINE</h4>
          <ul>
            <li><Link href="/food/sushi">Sushi</Link></li>
            <li><Link href="/food/ramen">Ramen</Link></li>
            <li><Link href="/food/tempura">Tempura</Link></li>
            <li><Link href="/food/kaiseki">Kaiseki</Link></li>
            <li><Link href="/food/izakaya">Izakaya</Link></li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <span>NIHON — Japan&apos;s Premier Travel Guide</span>
        <span>日本観光ガイド · Inbound Welcome</span>
      </div>
    </footer>
  );
}
