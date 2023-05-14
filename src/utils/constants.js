import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv,MdOutlineSubscriptions,MdOutlineVideoLibrary } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle,FiShoppingBag,FiVideo } from "react-icons/fi";
import { BiHistory } from "react-icons/bi";

export const categories = [

        { name: "Home", icon: <AiFillHome />, type: "home"},
        { name: "Shorts", icon: <FiVideo />, type: "category",},
        { 
            name: "subscriptions",
             icon: <MdOutlineSubscriptions />,
              type: "category",
              divider: true,
            },

            { name: "Library", icon: <MdOutlineVideoLibrary />, type: "category",},
            { 
                name: "History",
                 icon: <BiHistory />,
                  type: "category",
                  divider: true,
                },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Shopping", icon: <FiShoppingBag/>, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];