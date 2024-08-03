import Profiles from "../components/Profiles";

const Account = () => {
  return (
    <>
      <div className="w-full h-full">
        <h1 className="absolute font-bold text-white text-3xl md:text-5xl top-[20%] left-1/2 transform -translate-x-1/2">
          Who's watching?
        </h1>
      </div>

      <Profiles />
    </>
  );
};

export default Account;
