
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyCartDet from "./MyCartDet";


const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`https://art-craft-server-black.vercel.app/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
       setItem(data)
      });
  }, [user]);

  return (
    <div className=" max-w-7xl mx-auto mb-10">
        {
            item.map(cart => <MyCartDet key={cart._id} cart={cart}></MyCartDet>)

        }
    </div>
  );
};

export default MyCartPage;