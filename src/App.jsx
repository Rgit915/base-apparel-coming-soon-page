import logo from "./assets/images/logo.svg";
import arrowIcon from "./assets/images/icon-arrow.svg";
import errorIcon from "./assets/images/icon-error.svg";
import heroMobile from "./assets/images/hero-mobile.jpg";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState(""); //state to hold input value
  const [error, setError] = useState(false); //state to hold error message

  //Function to check if email is correctly formatted
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  //Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
      setEmail("");
      console.log("Form submitted: ", email);
    }
  };

  //function to handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <header className="px-4 py-8 flex items-center top-0 left-0 w-full md:w-[50%] md:pl-8 md:mt-10 lg:ml-10 xl:ml-40 ">
        <nav className="logo text-left">
          <img src={logo} alt="Base apparel" />
        </nav>
      </header>
      <main className="md:flex md:flex-row lg:px-8">
        <div className="hero-image md:max-w-md  ">
          <img
            src={heroMobile}
            className="w-full md:hidden"
            alt="Mobile hero image"
          />
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleInputChange}
                  className={`border border-desaturatedRed border-opacity-50 rounded-3xl px-4 py-2 w-full text-[12px] text-darkGrayishRed font-bold placeholder-linearGradient1 ${
                    error ? "border-softRed border-[2px] " : ""
                  }`}
                />
                <div className="flex items-center gap-3">
                   {error && (
                    <img src={errorIcon} className="mr-4 absolute right-[4.5rem] top-[30%] transform -translate-y-1/2" alt="Error icon" />
                  )}
                  <button
                  type="submit"
                  name="email"
                  className={`absolute right-0 transform -translate-y-1/2 flex items-center justify-center border-none rounded-3xl text-white shadow-lg shadow-linearGradient1 w-[5rem] p-[.7rem] cursor-pointer hover:opacity-75 ${error ? "top-[30%]" : "top-[50%]"}`}
                >

                  <img
                    src={arrowIcon}
                    className=" text-desaturatedRed"
                    alt="Arrow icon"
                  />
                </button>
                </div>
                {error && (
                  <p className="text-red-500 text-xs p-2">
                    Please provide a valid email
                  </p>
                )}
              </form>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default App;
