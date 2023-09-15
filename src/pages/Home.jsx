import { useNavigate } from "react-router-dom";
import { Header } from "../components/Home/Header";
// import { useEffect, useState } from "react";


export const Home = () => {
  const nav = useNavigate();
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <Header />
      <div className="hero items-start bg-base-100 flex-box flex-col pt-4 w-full mt-20">
        <div className="flex flex-col justify-center lg:flex-row-reverse items-center lg:justify-between px-6 lg:px-16 z-[1]">
          {/* <img
            src="header.svg"
            className=" lg:max-w-xl mr-8 lg:mr-0 select-none max-w-xs"
            alt="header-bg"
            height={600}
            width={600}
            draggable={false}
          /> */}
          <div>
            <div className=" h-[33px] px-5 py-1 bg-pink-950 rounded-full justify-center items-center gap-0.5 inline-flex">
              <div className="w-5 h-5 relative">
                <img width={100} height={100} src="stars.png" alt="stars" />
              </div>
              <div className="text-white text-base font-normal">FineTuning</div>
            </div>
            <h1 className="flex flex-col">
              <span className="text-white text-3xl lg:text-6xl font-bold lg:leading-snug leading-tight">
                Fine tuning any{" "}
                <span className="text-purple-950 text-3xl lg:text-6xl font-bold lg:leading-snug leading-tight">
                  gen
                </span>
              </span>
              <span className="text-white text-3xl lg:text-6xl font-bold lg:leading-snug leading-tight">
                model from global companies in one click
              </span>
            </h1>

            <p className="py-6 font-neov">
              Make your fine tuning passion come to reality just type your idea in
              prompt and our website made the magic by generate a fine tuning
              suitable to your idea with text and sound format. Don't wait try
              it Now.
            </p>
            
              <a 
              href="https://abpbot.com/"
              >
                <button className="btn btn-primary rounded-full capitalize btn-block lg:btn-wide font-neov ">
                  Get Started
                </button>
              </a>
          
          </div>
        </div>
        {/* <div className="w-full">
          <img
            src="effect.svg"
            className="w-full absolute -bottom-44 -z-0 select-none hidden lg:block"
            alt="effect"
            height={100}
            width={800}
            draggable={false}
          />
        </div> */}
      </div>
    </>
  );
};
