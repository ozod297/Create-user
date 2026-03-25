import React from "react";
import { useState } from "react";

function Modal({ setNames }) {
  let [image, setImg] = useState("");
  let [name, setName] = useState("");
  let [job, setJob] = useState("");
  let [From, setFrom] = useState("");
  let [fmale, setFmale] = useState("");
  let [male, setMale] = useState("");
  let [gender, setGender] = useState("");
  // ////////////////////////////////////////////////
  function handelSubmit(e) {
    e.preventDefault();

    let newName = {
      image: image,
      name: name,
      job: job,
      From: From,
      Gender: gender,
    };

    setNames((prev) => {
      return [...prev, newName];
    });

    e.target.reset();

    document.getElementById("my_modal_3").close();
  }
  return (
    <div>
      <button
        className="btn absolute left-[-30px] top-1/2 -translate-y-1/2 -rotate-90 border-none  bg-white  shadow-2xs shadow-black"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Create user
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2  top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create user</h3>
          <div className="">
            <form onSubmit={handelSubmit} className="flex flex-col gap-3">
              <input
                onChange={(e) => {
                  setImg(e.target.files[0]);
                }}
                type="file"
                accept="image/*"
                className="w-full h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-black file:text-white"
              />
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Ismingiz"
                className="input input-bordered w-full"
              />

              <input
                onChange={(e) => {
                  setJob(e.target.value);
                }}
                type="text"
                placeholder="Kasbingiz"
                className="input input-bordered w-full"
              />

              <input
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                type="text"
                placeholder="Yashash manzilingiz"
                className="input input-bordered w-full"
              />

              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Ayol
                </label>

                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Erkak
                </label>
              </div>

              <button className="btn bg-white shadow">Create user</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
