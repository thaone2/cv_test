import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Shop from "@/shop/Shop";
import Home from "@/home/Home";
import Layout from "@/layout/Layout";
import Login from "@/login/Login";
import LearnEnglish from "@/learning/LearnEnglish";
import ListMusic from "@/listmusic/ListMusic";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="learning-english" element={<LearnEnglish />} />
      <Route path="login" element={<Login />} />
      <Route path="list-music" element={<ListMusic />} />
    </Route>,
  ),
);
