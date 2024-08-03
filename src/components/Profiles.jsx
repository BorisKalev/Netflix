import { profiles } from "../constants";
const Profiles = () => {
  return (
    <div className="absolute w-full grid grid-cols-3 justify-center gap-4 top-[30%] sm:flex">
      {profiles.map((user, idx) => (
        <div key={idx} className="cursor-pointer p-2 mx-3">
          <img
            src={user.img}
            alt="user icon"
            className="w-full h-auto sm:max-w-[350px] sm:max-h-[220px] "
          />
          <p className="text-gray-400 text-center text-xl mt-3 sm:max-w-[300px]">
            {user.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
