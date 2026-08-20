import { useState } from "react";

const phone = "9490304300";
const email = "samruddhicollections05@gmail.com";

const wa = `https://wa.me/919490304300?text=${encodeURIComponent(
  "Hi Samruddhi Collections, I would like to know more about your collections and offers."
)}`;

const cats = [
  [
    "Imitation Jewellery",
    "Traditional and everyday designs for festivals, gifting and daily wear.",
  ],
  [
    "Bangles & Kadas",
    "Stackable bangles, kadas and festive combinations.",
  ],
  [
    "Necklaces & Chokers",
    "Chokers, long necklace styles and elegant stone-work designs.",
  ],
  [
    "Earrings & Jhumkas",
    "Jhumkas, studs, drops and hoops for every occasion.",
  ],
  [
    "Rings",
    "Delicate stone rings and statement designs.",
  ],
  [
    "Ladies Accessories",
    "Clutches, hair accessories, bindis and finishing touches.",
  ],
];

export default function App() {
  const [m, setM] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="nav">
        <div className="wrap navin">
          <a className="brand" href="#home">
            <b>Samruddhi Collections</b>
            <small>IMITATION JEWELLERY & LADIES ACCESSORIES</small>
          </a>

          <nav className={m ? "links open" : "links"}>
            {["Home", "Collections", "Offers", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setM(false)}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <button
            className="menu"
            onClick={() => setM(!m)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className="navact">
            <a className="btn sm" href={`tel:+91${phone}`}>
              Call
            </a>

            <a
              className="btn wa sm"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="wrap herogrid">
            <div className="hero-content">
              <p className="eyebrow">
                
              </p>

              

              

              <div className="gold-divider">
               
              </div>

              <p className="hero-description">
                
              </p>

              <div className="actions">
                

                
              </div>
            </div>
          </div>
        </section>

        {/* ================= OFFERS ================= */}
        <section id="offers" className="section offer">
          <div className="wrap">
            <p className="eyebrow center">Current Offers</p>

            <h2 className="title">Shravanamasam Special Offer</h2>

            <div className="offerbox">
              <div className="spark">✦</div>

              <div>
                <h3>శ్రావణమాసం ప్రత్యేక ఆఫర్</h3>

                <p>
                  Every ₹1,000 purchase gets a{" "}
                  <strong>HAND BAG FREE</strong>.
                </p>

                <small>Offer valid while stocks last.</small>
              </div>

              <a
                className="btn wa"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ================= COLLECTIONS ================= */}
        <section id="collections" className="section">
          <div className="wrap">
            <p className="eyebrow center">Our Collections</p>

            <h2 className="title">Browse by Category</h2>

            <div className="cards">
              {cats.map((category, index) => (
                <article className="card" key={category[0]}>
                  <div className="cardart">
                    {["✧", "◈", "❖", "✦", "◇", "✿"][index]}
                  </div>

                  <h3>{category[0]}</h3>

                  <p>{category[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        
        {/* ================= CONTACT ================= */}
        <section id="contact" className="section">
          <div className="wrap">
            <p className="eyebrow center">Contact</p>

            <h2 className="title">Talk to us before you visit</h2>

            <div className="contact">
              <div className="contactbox">
                <p>
                  <b>Phone</b>
                  <br />
                  <a href={`tel:+91${phone}`}>{phone}</a>
                </p>

                <p>
                  <b>WhatsApp</b>
                  <br />
                  <a href={wa}>{phone}</a>
                </p>

                <p>
                  <b>Email</b>
                  <br />
                  <a href={`mailto:${email}`}>{email}</a>
                </p>

                <p>
                  <b>Location</b>
                  <br />
                  Turkayamjal / Ragannaguda, Hyderabad
                </p>
              </div>

              <div className="ctabox">
                <h3>Quickest way to reach us</h3>

                <p>
                  Call or send us a WhatsApp message for the latest collections
                  and offer details.
                </p>

                <div className="actions">
                  <a className="btn gold" href={`tel:+91${phone}`}>
                    Call
                  </a>

                  <a
                    className="btn wa"
                    href={wa}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="wrap foot">
          <div>
            <b>Samruddhi Collections</b>
            <p>Imitation Jewellery & Ladies Accessories</p>
          </div>

          <div>
            <p>Phone: {phone}</p>
            <p>WhatsApp: {phone}</p>
            <p>Email: {email}</p>
          </div>
        </div>

        <div className="copy">
          © {new Date().getFullYear()} Samruddhi Collections. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}