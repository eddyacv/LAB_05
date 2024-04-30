import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Box } from 'react-feather';
import { Code } from 'react-feather';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Basic from './layout/basic';
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap';
const feather = require('feather-icons');
import Single from './single';

function Navigator({name}){

}






import Header from "./layout/header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./layout/footer";
import Boton from "./boton";

const router = createBrowserRouter([
    {

        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);