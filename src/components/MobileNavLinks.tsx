import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { SheetClose } from "./ui/sheet";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <SheetClose asChild key="order-status">
        <Link
          to="/order-status"
          className="flex bg-white items-center font-bold hover:text-orange-500"
        >
          Order Status
        </Link>
      </SheetClose>
      <SheetClose asChild key="manage-restaurant">
        <Link
          to="/manage-restaurant"
          className="flex bg-white items-center font-bold hover:text-orange-500"
        >
          My Restaurant
        </Link>
      </SheetClose>
      <SheetClose asChild key="user-profile">
        <Link
          to="/user-profile"
          className="flex bg-white items-center font-bold hover:text-orange-500"
        >
          User Profile
        </Link>
      </SheetClose>
      <Button
        onClick={() => logout()}
        className="flex items-center font-bold px-3 hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
