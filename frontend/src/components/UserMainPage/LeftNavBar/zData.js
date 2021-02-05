import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


export const Data = [
    {
        title: "Add Parts House",
        path: "/user/:userId/partshouse/form",
        icon: <IoIcons.IoIosAddCircle />
    },
    {
        title: "Parts House 1",
        path: "/user/:userId/partshouse/:partshouse/appliances",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Parts House 1",
                path: "/user/:userId/partshouse/:partshouse/appliances",
                icon: <img src="https://i.ibb.co/dmLJrvJ/Appliance-Icon.png" alt="Appliance-Icon" border="0" width="50px" />,
            }
        ]
    },
    {
        title: "Electronics",
        path: "/user/:userId/partshouse/:partshouse/electronics",
        icon: <img src="https://i.ibb.co/WsL9W1c/Electronic-Icon.png" alt="Electronic-Icon" border="0" width="50px" />,
    },
    {
        title: "other",
        path: "/user/:userId/partshouse/:partshouse/other",
        icon: <IoIcons.IoIosAddCircle />
    },

]