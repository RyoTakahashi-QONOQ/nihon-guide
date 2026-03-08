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
          <ul><li><a href="#">Regions</a></li><li><a href="#">UNESCO Sites</a></li><li><a href="#">Seasonal Guide</a></li><li><a href="#">Hidden Gems</a></li><li><a href="#">Day Trips</a></li></ul>
        </div>
        <div className="fcol">
          <h4>PLAN</h4>
          <ul><li><a href="#">Itineraries</a></li><li><a href="#">Transport</a></li><li><a href="#">Ryokan Guide</a></li><li><a href="#">Budget Tips</a></li><li><a href="#">Visa Info</a></li></ul>
        </div>
        <div className="fcol">
          <h4>ABOUT</h4>
          <ul><li><a href="#">Editorial</a></li><li><a href="#">Contributors</a></li><li><a href="#">Photography</a></li><li><a href="#">Contact</a></li><li><a href="#">Press</a></li></ul>
        </div>
      </div>
      <div className="fbot">
        <span>NIHON — Japan&apos;s Premier Travel Guide</span>
        <span>日本観光ガイド · Inbound Welcome</span>
      </div>
    </footer>
  );
}
