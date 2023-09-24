import { useContext } from "react";
import CafeContext from "../context/CafeProvider";

const useCafe = () =>{

    return useContext(CafeContext);
}

export default useCafe;