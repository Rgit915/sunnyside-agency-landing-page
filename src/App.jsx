import logo from "./assets/images/logo.svg";
import humburgerMenu from "./assets/images/icon-hamburger.svg";
import arrowDown from "./assets/images/icon-arrow-down.svg";
import imageTransformMobile from "./assets/images/mobile/image-transform.jpg";
import imageTransformDesktop from "./assets/images/desktop/image-transform.jpg";
import imageStandoutMobile from "./assets/images/mobile/image-stand-out.jpg";
import imageStandoutDesktop from "./assets/images/desktop/image-stand-out.jpg";


const App = () => {

  return (
    <>
      <header className="hero ">

        <nav>
          <div className="logo">
            <img src={logo} alt="Sunnyside logo" />
          </div>
          <div>
            <img src={humburgerMenu} alt="Humburger Menu" />
          </div>

        {/* NAVIGATION MENU */}

          <ul>
            <li>
              <a to="#about">About</a>
            </li>
            <li>
              <a to="#services">Services</a>
            </li>
            <li>
              <a to="#projects">Projects</a>
            </li>
            <li>
              <a to="#contacts">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="title">
          <h1> We are creatives</h1>
        </div>
        <div className="arrow-down">
          <img src={arrowDown} alt="Arrow down icon" />
        </div>
      </header>
      <main>
        {/***************************** SERVICES SECTION *********************/}
        <section className="services-section">
          {/* FIRST ROW */}
          <div className="first-row">
            <picture>
              <source
                media="(min-width:720px )"
                srcSet={imageTransformDesktop}
              />
              <img
                className="header-image"
                src={imageTransformMobile}
                alt="An egg on yellow background"
              />
            </picture>
            <article className="transform-brand">
              <h2> Transform your brand</h2>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <small> Learn more </small>
            </article>
          </div>
          {/* SECOND ROW */}
          <div className="second-row">
            <picture>
              <source
                media="(min-width:720px )"
                srcSet={imageStandoutDesktop}
              />
              <img
                className="header-image"
                src={imageStandoutMobile}
                alt="An egg on yellow background"
              />
            </picture>

            <article>
              <h2> Stand out to the right audience</h2>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <small> Learn more </small>
            </article>
          </div>
          {/* THIRD ROW */}
          <div className="third-row ">
            <article className="graphic-design ">
              <div>
                <h2>Graphic design</h2>
                <p>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </article>

            <article className="photography">
              <div>
                <h2>Photography</h2>
                <p>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
