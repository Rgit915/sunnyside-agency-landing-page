import logo from "./assets/images/logo.svg";
import arrowDown from "./assets/images/icon-arrow-down.svg";
import imageTransformMobile from "./assets/images/mobile/image-transform.jpg";
import imageTransformDesktop from "./assets/images/desktop/image-transform.jpg";
import imageStandoutMobile from "./assets/images/mobile/image-stand-out.jpg";
import imageStandoutDesktop from "./assets/images/desktop/image-stand-out.jpg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";

import data from "../data.json";
import NavLinks from "./components/NavLinks";

const App = () => {
  const testimonalData = data.testimonals;
  const galleryData = data.photoGallery;

  return (
    <>
      <header className="hero bg-[url(./assets/images/mobile/image-header.jpg)] bg-cover bg-center w-full h-[538px] p-6  flex flex-col justify-between">
        {/* NAVIGATION MENU */}
        <NavLinks />

        <div className="flex flex-col justify-around items-center mb-24 ">
          <h1 className="title font-fraunces font-[900] text-[40px] leading-[49.32px] tracking-[6.25px] text-white uppercase text-center py-4 ">
            {" "}
            We are creatives
          </h1>
          <img
            className="arrow-down py-4"
            src={arrowDown}
            alt="Arrow down icon"
          />
        </div>
      </header>
      <main>
        {/***************************** SERVICES SECTION *********************/}
        <section className="services-section">
          {/* FIRST ROW */}
          <div className="first-row">
            <picture className="h-[312px]">
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
            <article className="transform-brand flex flex-col justify-center items-center text-center max-w-sm p-4  space-y-4">
              <h2> Transform your brand</h2>
              <p className="text-dark-grayish-blue">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <small className=" font-fraunces font-black leading-6 tracking-[1px] text-very-dark-desaturated-blue uppercase">
                {" "}
                Learn more{" "}
              </small>
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

            <article className="transform-brand flex flex-col justify-center items-center text-center max-w-sm p-4  space-y-4">
              <h2> Stand out to the right audience</h2>
              <p className="text-dark-grayish-blue">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <small className=" font-fraunces font-black leading-6 tracking-[1px] text-very-dark-desaturated-blue uppercase">
                {" "}
                Learn more{" "}
              </small>
            </article>
          </div>
          {/* THIRD ROW */}
          <div className="third-row flex flex-col justify-center items-center ">
            <article className="graphic-design bg-[url(./assets/images/mobile/image-graphic-design.jpg)] bg-cover bg-center h-[600px] flex flex-col justify-center items-center text-dark-desaturated-cyan">
              <div className="flex flex-col justify-center items-center text-center mt-auto mb-8 max-w-sm p-4">
                <h3>Graphic design</h3>
                <p>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </article>

            <article className="photography bg-[url(./assets/images/mobile/image-photography.jpg)] bg-cover bg-center h-[600px] flex flex-col justify-center items-center text-dark-blue ">
              <div className="flex flex-col justify-center items-center text-center mt-auto mb-8 max-w-sm p-4">
                <h3>Photography</h3>
                <p>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </article>
          </div>
        </section>
        {/***************************** TESTIMONALS - SECTION  *********************/}
        <section className="testimonals-section flex flex-col justify-center items-center text-center my-8">
          <h4 className="text-base leading-5 tracking-[4px] text-grayish-blue uppercase">
            Client testimonials
          </h4>
          <article className="testimonals p-8">
            {testimonalData.map((person, index) => (
              <div
                className="testimonal flex flex-col justify-around p-4 items-center"
                key={index}
              >
                <img
                  className="rounded-full h-[72px] w-[72px]"
                  src={person.image}
                  alt={`Image of ${person.name}`}
                />
                <p className="comment text-very-dark-grayish-blue max-w-sm my-4">
                  {person.comment}
                </p>
                <h5 className="name text-very-dark-desaturated-blue leading-6 tracking-[-0.13px]">
                  {person.name}
                </h5>
                <small className="profession text-[14px] text-grayish-blue font-semibold leading-6 tracking-[-0.1px]">
                  {person.profession}
                </small>
              </div>
            ))}
          </article>
        </section>
        {/***************************** PHOTO-GALLERY SECTION *********************/}
        <section className="photo-gallery h-[375] w-full grid grid-cols-2">
          {galleryData.map((image, index) => (
            <div className="photo" key={index}>
              <picture>
                <source
                  media="(min-width:720px )"
                  srcSet={image.desktopImage}
                />
                <img
                  className="header-image"
                  src={image.mobileImage}
                  alt={`Image of ${image.name}`}
                />
              </picture>
            </div>
          ))}

        </section>
      </main>
      <footer>
        <div className="logo">

        </div>
        <div className="nav-links">
        </div>
        </footer>

    </>
  );
};

export default App;
