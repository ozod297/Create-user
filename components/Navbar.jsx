import Logo from "../img/logo.png";

function Navbar({ userCount }) {
  return (
    <div className="border-b mb-[30px] shadow-sm bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <img className="w-[130px]" src={Logo} alt="logo" />
          </div>

          <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Users: {userCount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
