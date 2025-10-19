import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=426776");//MENU_API + resId);
        console.log(data);
        const json = await data?.json();
        setResInfo(json?.data);
    };

    return resInfo;
};

export default useRestaurantMenu;