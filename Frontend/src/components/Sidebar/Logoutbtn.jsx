import { CiLogout } from "react-icons/ci";
import React from "react";
import uselogout from "../../hooks/useLogout";
function Logoutbtn() {
  const { Loading, logout } = uselogout();

  return (
    <div className="mt-auto ">
      {!Loading ? (
        <CiLogout
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner text-info"></span>
      )}
    </div>
  );
}

export default Logoutbtn;
