import React from "react";
import { useRoutes } from "react-router-dom";
import Authentication from "../Auth/Authentication";
import Bill from "../Bill/Bill";
import Commercial from "../Commercial/Commercial";
import Contact from "../Contact/Contact";
import UserDashboard from "../Dashboard/UserDashboard";
import Home from "../LandingPage/Home";
import PickUp from "../PickUp/PickUp";
import Recycle from "../Recycle/Recycle";
import RequestService from "../RequestService/RequestService";
import Residential from "../Residential/Residential";

const AllRoutes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
    {
      path: "/residential",
      element: <Residential />,
    },
    {
      path: "/commercial",
      element: <Commercial />,
    },
    {
      path: "/pick-up",
      element: <PickUp />,
    },
    {
      path: "/recycle",
      element: <Recycle />,
    },
    {
      path: "/request-service",
      element: <RequestService />,
    },
    {
      path: "/paybill",
      element: <Bill />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/userdashboard",
      element: <UserDashboard />,
    },
  ]);
  return elements;
};

export default AllRoutes;
