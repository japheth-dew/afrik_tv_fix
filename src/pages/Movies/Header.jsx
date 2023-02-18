import { HiPlus, HiCheck, HiOutlineInformationCircle } from 'react-icons/hi'
import { FaPlay } from "react-icons/fa"
import { useState } from "react";
import Nav from './Nav';

const Header = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleIconClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673331671/Rectangle_230_eqilf9.png"
          alt="images"
          className="w-full h-[700px] object-fix absolute"
        />
      </div>

      <div className="absolute mt-[2%] w-full">
        <Nav />
      </div>

      <div className="absolute m-[6%]">
        <h3 className="text-[#FFFFFF] font-bold text-[60px] w-[579px]">
          The Faith of a Christian Sister
        </h3>
        <div className="pt-[7%]">
          <label className="bg-[#eee] text-black rounded px-2 py-2 font-bold">
            2023
          </label>
          <p className="text-2xl font-bold text-white mt-6">Movie</p>

          <div className="flex items-center justify-start">
            <ul className="flex space-x-5 mt-5 text-white justify-center items-center">
              <li className="">Drama</li>
              <li className="h-2 w-2 rounded-full bg-[#F39C11]"></li>
              <li className="">Horror</li>
              <li className="h-2 w-2 rounded-full bg-[#F39C11]"></li>
              <li className="">Romance</li>
            </ul>
          </div>

          <p className="w-[500px] text-gray-300 mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            ratione hic laudantium, magnam tenetur, voluptates sit veritatis
            exercitationem rerum vitae dignissimos molestiae eum? Rerum sit
            molestiae ex cumque, sint cupiditate.
          </p>

          <div className="flex space-x-8 text-white mt-6">
            <div
              className="flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleIconClick}
            >
              <button>
                {isChecked ? <HiCheck size={20} /> : <HiPlus size={20} />}
              </button>
              <p>My list</p>
            </div>

            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <HiOutlineInformationCircle size={20} />
              <p>info</p>
            </div>
          </div>

          <button className="mt-5 bg-[#F39C11] text-white px-3 py-2 rounded-lg gap-2 flex items-center justify-center">
            <FaPlay size={20} />
            <p className="text-xl">Play</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
