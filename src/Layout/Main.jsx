import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Main = () => {
  return (
    <div className=" text-center">
     <Header></Header>
      <Outlet> </Outlet>
    </div>
  );
};

export default Main;