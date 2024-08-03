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

      <div className="flex justify-center text-white w-full  mt-10 h-[430px]">
        <div className="flex text-white w-full max-w-[1200px] px-4 xl:px-0 justify-between items-center">
          <div className="flex flex-col w-full sm:ml-8 space-y-4">
            <h1 className="font-bold text-5xl">Enjoy on your TV</h1>
            <p className="text-xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="TV"
            className="w-auto h-auto sm:max-w-[400px] xl:max-w-[550px]"
          />
        </div>
      </div>

      <div className="bg-gray-500 w-full h-[5px] opacity-50 mt-20" />

      <div className="flex justify-center text-white items-center my-20">
        <div className="flex justify-between items-center max-w-[1200px]">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="computer ipad and iphone"
          />
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-5xl">Watch everywhere</h1>
            <h2 className="text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 w-full h-[5px] opacity-50 mt-20" />

      <div className="flex text-white justify-center items-center my-20">
        <div className="flex justify-between items-center mx-10 max-w-[1200px]">
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
    </>
  );
};

export default HomePage;
