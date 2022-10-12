import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Cards from "./Cards";
import Button from "./Button";
import cake from "../img/cake.jpg"


function Home() {
  return (
    <div>
      <Navbar />
      <div className="info-section">
        <div className="info">
          <div className="info-text">
            <h1>
              Memories-App is the perfect Group card for special Ocassions
            </h1>
            <p>
              Celebrate someone with an online group card file with messages,
              GIFs,Photos, & Videos
            </p>

            <Button />
          </div>
        </div>

        <div className="info-cards">
          <div className="info-cards1">
            <Cards />
            <Cards />
          </div>

          <div className="info-cards2">
            <Cards />
            <Cards />
          </div>
        </div>
      </div>

      <div className="section-3">
        <h1>How Memories Group Cards Work</h1>
        <div className="section-how">
          <div className="step-1">
            <button className="btn-step1">STEP 1</button>
            <h1>Create A MemoryCard</h1>
            <p>
              Start a digital group card for your recipient and add messages,
              photos, GIFs or videos.Start a digital group card for your
              recipient and add messages, photos, GIFs or videos.
            </p>
          </div>

          <div className="step-1">
            <button className="btn-step1">STEP 2</button>
            <h1>Invite Others</h1>
            <p>
              Invite others to add their contributions and watch the virtual
              group card grow.
            </p>
          </div>

          <div className="step-1">
            <button className="btn-step1">STEP 3</button>
            <h1>Deliver Appreciation</h1>
            <p>
              Deliver the group greeting card online, print it out, or play it
              as a slideshow!
            </p>
          </div>
        </div>
      </div>

      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Our plans</h2>
        </div>

        <div className="row">


          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1"
                    >Premium Package</span
                  >
                </h4>
                <div className="card__details">
                  <ul>
                    <li>50 boards </li>
                    <li>with up to 100 posts per board</li>
                    <li>Unlimited Storage</li>
                    
                  </ul>
                </div>
              </div>

              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$50</p>
                  </div>
                  <a href="/" className="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>



          

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2"
                    >Business Plan</span
                  >
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Unlimited boards & posts </li>
                    <li>Multiple Card creators</li>
                    <li>Added access controls</li>
                    <li>Tagging, Likes, & Comments</li>
                    
                  </ul>
                </div>
              </div>

              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$70</p>
                  </div>
                  <a href="/" className="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3"
                    >Enterprise Plan</span
                  >
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Unlimited boards & posts from 501+ </li>
                    <li>Bulk creation of boards</li>
                    <li>Dedicated account manager
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$100</p>
                  </div>
                  <a href="/" className="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            We make people Genuinely happy
          </h2>
        </div>

        <div className="row">
          <div className="story">
              <figure className="story__shape">
                  <img src={cake} alt="tour" className="story__img"/>
                  <ficaption className="story__caption">Mabel Kinya</ficaption>

              </figure>
              <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Dolorum aspernatur est rerum? Eveniet aut minus a corporis voluptatem est,
                       accusamus saepe quaerat mollitia repellendus, perferendis, perspiciatis sit repellat.
                        Laborum, aperiam?
                      </p>
              </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
              <figure className="story__shape">
                  <img src={cake} alt="tour" className="story__img"/>
                  <ficaption className="story__caption">Alex Kim</ficaption>

              </figure>
              <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">Wow! i had fun</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Dolorum aspernatur est rerum? Eveniet aut minus a corporis voluptatem est,
                       accusamus saepe quaerat mollitia repellendus, perferendis, perspiciatis sit repellat.
                        Laborum, aperiam?
                      </p>
              </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="/" className="btn-text">Read all stories &rarr;</a>
         </div>

    </section>
    </div>
  );
}

export default Home;
