import { useState } from "react";

const Navbar = () => {
  const [rotate, setRotate] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
    setSlide(!slide);
  };

  return (
    <div className="relative flex flex-col p-3.5 font-semibold text-xl items-center">
      <div className="flex w-full">
        <div className="sm:ml-[10%] ml-[0] hover:scale-105 hover:cursor-pointer">
          Agrim Tawani
        </div>
        <div className="ml-[55%] hidden sm:flex gap-[60px]">
          <div className="hover:scale-105 hover:cursor-pointer">About</div>
          <div className="hover:scale-105 hover:cursor-pointer">Contact</div>
        </div>

        {/* For small devices */}
        
        <div className="ml-auto flex sm:hidden items-center">
          <button
            className={`text-2xl hover:scale-105 hover:cursor-pointer transition-transform duration-300 ${rotate ? 'rotate-90' : ''}`}
            onClick={handleClick}
          >
            <p className="text-3xl">&#9776;</p>
          </button>
        </div>
      </div>
      <div
        className={`sm:hidden absolute top-full right-0 w-[150px] h-[150px] bg-gray-900 bg-gradient-to-tl bg-opacity-90 transition-transform duration-300 ${slide ? 'translate-x-0' : 'translate-x-full'} flex-row justify-around gap-5 rounded-lg`}>
        <div className="hover:scale-105 hover:cursor-pointer p-2 mt-1.5">About</div>
        <div className="hover:scale-105 hover:cursor-pointer p-2">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
