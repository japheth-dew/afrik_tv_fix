import React from "react";

function Signin() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-[660px] h-[720px] bg-[#060825] text-white flex items-center justify-center">
        <h1 className="font-extrabold text-[50px]">Connect <br /> 
          with Amazing <br /> 
          Africa Movies <br /> 
        </h1>
      </div>
      <div className="bg-[#E5E5E5] w-[690px] h-[720px] text-black flex items-center justify-center flex-col">
        <h1 className="font-extrabold text-[25px]">Welcome back</h1>

        <input placeholder="Email" className="w-[300px] h-[45px] pl-3 m-[50px] rounded"></input>
        <input placeholder="Password" className="w-[300px] h-[45px] pl-3"></input>

        <a href="#" className="text-yellow-500 font-extrabold mt-[30px] mr-[130px]">Forgotten Password?</a>

        <button className="w-[180px] h-[35px] bg-[#060825] text-white font-bold rounded-[8px] mt-[50px]">Sign in</button>
      </div>
   </div>

    
  );
}

export default Signin;
