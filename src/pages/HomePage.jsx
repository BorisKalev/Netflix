import Footer from "../components/Footer";
import vid1 from "../assets/frontend_public_hero-vid.m4v";
import vid2 from "../assets/frontend_public_video-devices.m4v";
import st1 from "../assets/stranger-things-lg.png";
import st2 from "../assets/stranger-things-sm.png";
import gif from "../assets/download-icon.gif";
const HomePage = () => {
  return (
    <>
      <div className="relative text-white w-full h-[750px]">
        <img
          className="w-full h-full object-cover"
          src="https://macmagazine.com.br/wp-content/uploads/2021/07/22-netflix-1920x1024.jpg"
          alt=""
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-black top-0 left-0 opacity-90" />
        <div className="absolute w-full h-full bg-gradient-to-t from-black top-0 left-0 opacity-90" />
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Unlimited movies, TV shows, and more
          </h1>
          <h3 className="mt-4 text-2xl">Watch anywhere. Cancel anytime.</h3>
          <h3 className="mt-4 text-xl">
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email Adress"
              className="pl-3 mt-4 bg-transparent border-solid border-2 border-gray-400 h-[40px] w-[300px] rounded-sm"
            />
            <button className="text-white font-bold bg-red-600 w-[200px] h-[40px] ml-5 rounded-sm hover:bg-red-800 transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative text-white h-[150px]">
        <div className="bg-gradient-to-r from-black via-blue-900 via-30% to-red-600  w-[50%]" />
        <div className="bg-gradient-to-l from-black via-blue-900 via-30% to-red-600  w-[50%]" />

        <div className="flex absolute justify-center w-full h-full items-center">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Netflix-Popcorn.png"
            alt="popcorn netflix"
            className="h-[120px] mr-4"
          />
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">
              The Netflix you love for just $5.99$
            </h1>
            <h2>Get the Standard with ads plan.</h2>
            <h2>
              <a href="" className="underline text-blue-400">
                Learn More
              </a>
            </h2>
          </div>
        </div>
      </div>
      {/*First section*/}
      <div className="flex justify-center text-white w-full  mt-10 h-[430px]">
        <div className="flex text-white w-full max-w-6xl  xl:px-0 justify-between items-center">
          <div className="flex flex-col w-full sm:ml-8 space-y-4">
            <h1 className="font-bold text-5xl">Enjoy on your TV</h1>
            <p className="text-xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="TV"
              className="w-auto h-auto sm:max-w-[400px] xl:max-w-[550px] z-20 relative"
            />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src={vid1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-500 w-full h-[5px] opacity-50 mt-20 z-10" />
      {/*Second section*/}
      <div className="py-10 bg-black text-white h-[430px] px-10 mr-24">
        <div className="flex justify-between text-white items-center h-full max-w-6xl mx-auto">
          <div className="flex-1 relative">
            <div className="relative">
              <img src={st1} alt="Stranger Things img" className="mt-4 z-0" />
            </div>
            <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
              <img src={st2} alt="image" className="h-full py-2" />
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-0">
                  <span className="text-md lg:text-lg font-bold">
                    Stranger Things
                  </span>
                  <span className="text-sm text-blue-500">Downloading ...</span>
                </div>
                <img src={gif} alt="download" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:text-left">
            <h2 className="text-4xl md-text-5xl font-extrabold mb-4 text-balance">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 w-full h-[5px] opacity-50 mt-20" />
      {/*Third section*/}
      <div className="flex justify-center text-white items-center my-20">
        <div className="flex justify-between items-center max-w-6xl">
          <div className="flex-1 relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="computer ipad and iphone"
              className="relative z-10"
            />
            <video
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-[340px]"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src={vid2} type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col space-y-4 md:text-left">
            <h1 className="font-bold text-5xl">Watch everywhere</h1>
            <h2 className="text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 w-full h-[5px] opacity-50 mt-20" />
      {/*Fourth section*/}
      <div className="flex text-white justify-center items-center my-20">
        <div className="flex justify-between items-center max-w-6xl">
          <div className="flex flex-col mr-10 space-y-4">
            <h1 className="font-bold text-5xl">Create profiles for kids</h1>

            <h2 className="text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.{" "}
            </h2>
          </div>
          <img
            src="https://occ-0-1522-1001.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt="kids with bunny"
          />
        </div>
      </div>
      <div className="bg-gray-500 w-full h-[5px] opacity-50 mt-20" />
      <Footer />
    </>
  );
};

export default HomePage;
