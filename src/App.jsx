import logo from "./assets/images/logo.svg";
import arrowIcon from "./assets/images/icon-arrow.svg";
import errorIcon from "./assets/images/icon-error.svg";
import heroDesktop from "./assets/images/hero-desktop.jpg";
import heroMobile from "./assets/images/hero-mobile.jpg";

const App = () => {
  return (
    <>
      <header className="px-4 py-8 flex items-center top-0 left-0 w-full md:w-[50%] md:pl-8 md:mt-10 lg:ml-10 xl:ml-40 ">
        <nav className="logo text-left">
          <img src={logo} alt="Base apparel" />
        </nav>
      </header>
      <main className="md:flex md:flex-row lg:px-8">
      <div className="hero-image md:max-w-md  ">
            <img src={heroMobile} className="w-full md:hidden" alt="Mobile hero image" />
            {/* <img
              src={heroDesktop}
              className="hidden md:block md:min-h-full"
              alt="hero image"
            /> */}
      </div>
        <section className="hero-content my-8 md:max-w-sm md:pl-6 lg:max-w-md xl:max-w-lg xl:ml-28">

          <article className="left-side flex flex-col justify-center items-center px-4 py-8 text-desaturatedRed md:text-left">
            <div className="coming-soon text-center ">
              <h1 className="text-4xl font-[300] uppercase tracking-[0.3em] mb-4 md:text-left lg:text-6xl">
                We're <br />
                <span className=" font-[500] text-darkGrayishRed">
                  coming soon
                </span>
              </h1>

              <p className="message mt-6 md:text-left xl:text-[18px]">
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </div>

            <div className="form relative text-desaturatedRed w-full my-12">
              <form action="">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="border border-desaturatedRed border-opacity-50 rounded-3xl px-4 py-2 w-full text-[12px] "
                />
                <button
                  type="submit"
                  name="email"
                  className="absolute right-0 top-[50%] transform -translate-y-1/2 flex items-center justify-center border rounded-3xl text-white shadow w-[3.8rem] p-[.7rem] z-10"
                >
                  {" "}
                  <img
                    src={arrowIcon}
                    className=" text-desaturatedRed"
                    alt="Arrow icon"
                  />{" "}
                </button>
              </form>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default App;
