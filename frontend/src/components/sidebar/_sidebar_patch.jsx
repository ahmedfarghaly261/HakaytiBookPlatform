import React, { useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CATEGORY_OPTIONS = [
  "Fiction",
  "Non-fiction",
  "Science",
  "History",
  "Fantasy",
  "Biography",
  "Other"
];

const Sidebar = () => {
  // ...existing code...
};

export default Sidebar;
