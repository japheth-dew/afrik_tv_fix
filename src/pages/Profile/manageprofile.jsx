import React from "react";
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from "@mui/icons-material/Add";

function Manageprofile() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-16 text-3xl font-black">Manage Profiles</div>
        <div className="flex w-[751px] justify-between">
          <div>
            <div className="w-[205px] h-[196px] bg-black flex justify-center items-center text-4xl">
              🤡
            </div>
            <p className="text-3xl text-center font-bold mt-4">Obiabo</p>
          </div>
          <div>
            <div className="w-[205px] h-[196px] bg-[#6a4407] flex justify-center items-center text-4xl hover:opacity-60">
              🤡
            </div>
            <p className="text-3xl text-center font-bold mt-4">Disu</p>
          </div>
          <div className="w-[205px] h-[196px] bg-inherit flex justify-center items-center text-4xl">
            <div>
              <div className="text-center ">
                <AddIcon style={{ fontSize: 60 }} />
              </div>
              <p className="text-base text-center font-bold">Add user</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manageprofile;
