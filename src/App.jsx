import logo from "./assets/images/logo.svg";
import arrowIcon from "./assets/images/icon-arrow.svg";
import heroMobile from "./assets/images/hero-mobile.jpg";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="Base apparel" />
        </nav>
      </header>
      <main>
        <div>
          <img src={heroMobile} alt="Mobile hero image" />
        </div>
        <section>
          <article>
            <div>
              <h1>
                We're <br />
                <span>coming soon</span>
              </h1>

              <p>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </div>

            <div>
              <form>
                <input type="text" placeholder="Email Address" />
                <button type="submit" name="email">
                  <img src={arrowIcon} alt="Arrow Icon" />
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
