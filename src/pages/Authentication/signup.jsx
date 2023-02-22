import React from "react";

function Signup() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-[660px] h-[720px] bg-[#060825] text-white flex items-center justify-center">
        <h1 className="font-extrabold text-[50px]">Connect <br /> 
          with Amazing <br /> 
          Africa Movies <br /> 
        </h1>
      </div>
      <div className="bg-[#E5E5E5] w-[690px] h-[720px] text-black flex items-center justify-center flex-col">
        <h1 className="font-extrabold text-[25px] mr-[180px]">Welcome</h1>
        <p className="font-extrabold text-[14px] mr-[60px]">Create an AfrikTV Account today</p>

        <input placeholder="Email" className="w-[300px] h-[45px] pl-3 m-[50px] rounded"></input>
        <input placeholder="Full Name" className="w-[300px] h-[45px] pl-3 mb-[50px] rounded"></input>
        <input placeholder="Password" className="w-[300px] h-[45px] pl-3"></input>

        <button className="w-[180px] h-[35px] bg-[#060825] text-white font-bold rounded-[8px] mt-[50px]">Create Account</button>

        <h2 className="font-bold text-stone-600 text-[13px] mt-[40px] mr-[130px]">Already have Account <a href="./signin" className="text-yellow-500 font-bold">Sign in</a></h2>
      </div>
   </div>

    
  );
}

export default Signup;
