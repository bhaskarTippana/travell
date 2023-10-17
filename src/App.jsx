import React, { useEffect } from 'react'
import  {useState}  from "react"
import Family from "./Family"
import Group from "./Group"
import Individual from "./Individual"
import Otp from "./Otp"
import "./App.css"
import logo from "./logos/logo.svg"
import Frame from "./logos/Frame.svg"
import Axios from "axios"

const App = () => {
  let [input, setInput] = useState("");
  let [countries, setCountries] = useState();
  let [filterCountries, setFilterCountries] = useState([]);
  let [display, setDisplay] = useState("family");
  let [activeButton, setActiveButton] = useState(1);
  let api = "https://restcountries.com/v3.1/all";

  let [countriesAdded, setCountriesAdded] = useState([]);
  let [otp, setOtp] = useState(false);

  const handleRemove = (el) => {
    setCountriesAdded(countriesAdded.filter((e) => e !== el));
  };
  //
  // authentication
const sendOTP = async () => {
  const phoneNumber = "7013140693"; // Replace with the recipient's phone number
  try {
    const response = await fetch("/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};

  // authentication
  //

  function handleOtp() {
    setOtp(true);
  }

  let Component;
  const handleChange = (e) => {
    let updateInput = e.target.value;
    setInput(updateInput);
    let y = countries.filter((e) =>
      e.name.common.toLowerCase().startsWith(updateInput.toLowerCase())
    );
    setFilterCountries(y);
  };

  useEffect(() => {
    let x = Axios.get(api);
    x.then((e) => {
      setCountries(e.data);
    });
  }, []);

  switch (display) {
    case "family":
      Component = Family;
      break;
    case "group":
      Component = Group;
      break;
    case "individual":
      Component = Individual;
      break;
  }

  return (
    <>
      <header className="head">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="group">
          <ul>
            <li>|</li>
            <li>www.lmvgroupinfo.com</li>
            <li>|</li>
            <li>040-4006-0770</li>
            <li>|</li>
          </ul>
        </div>
        <div className="signin">
          <button>Sign In</button>
          <p>Don't Have An Account Click Here</p>
        </div>
      </header>
      <nav>
        <ul className="naver">
          <li>Home</li>
          <li>
            <p>Insurance Products</p>
            <select name="" id=""></select>
          </li>
          <li>
            <p>Renew Your Policy</p>
            <select name="" id=""></select>
          </li>
          <li>
            <p>Claims</p>
            <select name="" id=""></select>
          </li>
          <li>POS</li>
        </ul>
      </nav>
      {otp ? <Otp /> : null}

      <main>
        <div className="letters">
          <ul className="mi-btn">
            <li>
              <button
                className={activeButton === 1 ? "active-btn fam" : "fam"}
                onClick={() => {
                  setActiveButton(1);
                  setDisplay("family");
                }}
              >
                Family
              </button>
            </li>
            <li>
              <button
                className={activeButton === 2 ? "active-btn fam" : "fam"}
                onClick={() => {
                  setActiveButton(2);
                  setDisplay("group");
                }}
              >
                Group/Friends
              </button>
            </li>
            <li>
              <button
                className={activeButton === 3 ? "active-btn fam" : "fam"}
                onClick={() => {
                  setActiveButton(3);
                  setDisplay("individual");
                }}
              >
                Individual
              </button>
            </li>
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOtp();
              sendOTP()
            }}
          >
            <div className="text-box">
              {countriesAdded.map((el, index) => (
                <div className="country" key={index}>
                  <p className="g">{el}</p>
                  <button
                    onClick={() => {
                      handleRemove(el);
                    }}
                    className="cross"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Enter your destination"
                onChange={handleChange}
                value={input}
              />

              {/* <i class="fa-solid fa-magnifying-glass"></i> */}

              {input.length !== 0 ? (
                <ul className="drop-down">
                  {filterCountries.map((e, index) => (
                    <li
                      className="items"
                      key={index}
                      onClick={(event) => {
                        setInput(e.name.common);
                        event.target.parentNode.style.display = "none";
                        countriesAdded.length < 4
                          ? setCountriesAdded([
                              e.name.common,
                              ...countriesAdded,
                            ])
                          : null;
                        // setCountriesAdded();
                        setInput("");
                      }}
                    >
                      {e.name.common}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="personal">
              <div>
               <input type="text" pattern="^[A-Za-z\s.'-]{2,50}$" name="name" id="nameField" required placeholder='Enter Your Name' />
              </div>
              <div>
                <input type="tel" pattern="^\+(?:\d{1,3})?(?:[\s.-]?\d{1,4})+$" name="phone" id="phoneField" required  placeholder='Enter Your Mobile-Number'/>
              </div>
            </div>
            <Component />
            <div className="date">
              <div className="date-picker">
                <p>Trip Starting-Date</p>
                <input type="date" />
              </div>
              <div className="date-picker">
                <p>Trip Ending-Date</p>
                <input type="date" />
              </div>
            </div>

            <div className="add">
              <input type="submit" value={"Proceed ->"} />
            </div>
          </form>
        </div>

        <div className="travel-pic">
          <div className="texts">
            <p className="get">Get Your Best</p>
            <p className="tra">Travel</p>
            <p className="insurance">Insurance</p>
          </div>
          <div className="ins">
            <img src={Frame} alt="" />
          </div>
        </div>
      </main>
      <div className="shadow">
        <ul className="shadow-foot">
          <li className="lmv">www.lmvgroup.com</li>
          <li className="rate">Rate Us</li>
          <li>
            <ul className="icons">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <footer>
        <div className="content">
          <p>Made with ❤️ in India</p>
          <p>
            +Disclaimer Savings are based on the comparison between the highest
            and the lowest premium for own damage cover (excluding add-on
            covers) provided by different insurance companies for the same
            vehicle with the same IDV and same NCB. Standard T& C
          </p>
          <p>apply.</p>
          <p>
            Actual time for transaction may vary subject to additional data
            requirements and operational processes. LMV Insurance Broking
            Services Private Limited (formerly known as LMV Insurance Web
            Aggregator Private Limited | CIN: U74999HR2014PTC053454|Registered
            Office - Plot No.119, Sector - 44, Gurgaon, Haryana – 122001) LMV is
            now registered as a Direct Broker | Registration No. 742,
            Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024,
            License category- Direct Broker (Life & General)| Visitors are
          </p>
          <p>
            hereby informed that their information submitted on the website may
            be shared with insurers. Product information is authentic and solely
            based on the information received from the insurers.
          </p>
          <p>© Copyright 2008-2023 lmvgroup.com. All Rights Reserved.</p>
          <p>
            {" "}
            *As per Draft Notification No. RT-11036/194/2021-MVL (Govt. of
            India, Ministry of Road Transport and Highways)
          </p>
        </div>
      </footer>
    </>
  );
}

export default App
