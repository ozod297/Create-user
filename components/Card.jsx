import React from "react";

function Card() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className=" flex items-center justify-center bg-white">
        <div className="w-64 border-2 border-black rounded-2xl p-5 text-center text-black">
          <div className="w-20 h-20 border-2 border-black rounded-full mx-auto mb-4"></div>

          <p>
            <span className="font-bold">Ismi:</span> Muhammadali
          </p>
          <p>
            <span className="font-bold">Ish:</span> Developer
          </p>
          <p>
            <span className="font-bold">From:</span> Uzbekistan
          </p>
          <p>
            <span className="font-bold">Gender:</span> Male
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
