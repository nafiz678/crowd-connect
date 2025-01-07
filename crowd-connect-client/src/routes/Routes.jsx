import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllCampaigns from "../pages/AllCampaigns";
import AddNewCampaigns from "../pages/AddNewCampaigns";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import CampaignDetails from "../pages/CampaignDetails";
import ErrorPage from "../pages/ErrorPage";
import UpdateCampaign from "../pages/UpdateCampaign";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/Campaigns",
            element: <AllCampaigns></AllCampaigns>,
        },
        {
            path: "/addNewCampaigns",
            element: <PrivetRoute><AddNewCampaigns></AddNewCampaigns></PrivetRoute>,
        },
        {
            path: "/myCampaign/:email",
            element: <PrivetRoute><MyCampaign></MyCampaign></PrivetRoute>,
            loader: ({params})=> fetch(`https://crowd-connect-server.vercel.app/campaigns?email=${params.email}`)
        },
        {
            path: "/myDonation",
            element: <PrivetRoute><MyDonations></MyDonations></PrivetRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/campaigns/:id",
            element: <PrivetRoute> <CampaignDetails></CampaignDetails> </PrivetRoute>,
            loader: ({params})=> fetch(`https://crowd-connect-server.vercel.app/campaigns/${params.id}`)
        },
        {
            path: "/updateCampaign/:id",
            element: <PrivetRoute><UpdateCampaign></UpdateCampaign></PrivetRoute>,
            loader: ({params})=> fetch(`https://crowd-connect-server.vercel.app/campaigns/${params.id}`)
        },
        {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>
        },
        {
            path: "/contactUs",
            element: <ContactUs></ContactUs>
        },
      ]
    },
  ]);

export default router