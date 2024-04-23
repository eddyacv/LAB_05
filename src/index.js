import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Box } from 'react-feather';
import { Code } from 'react-feather';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap';
const feather = require('feather-icons');

function Navigator({name}){

}


import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <Button className='btn btn-primary'>Hola</Button>
        <Box />
        <Code />
        <div className="container-fluid bg-dark p-0">
        <Header /> 
        <div className="container-fluid ">
            <div className="row align-items-center">
                <div className="col-md-8 py-4 d-flex">
                    <Main />
                </div>
                <div className="col-md-4">
                    <Aside />
                </div>
            </div>
        </div>
        <Footer />
        </div>
              
    </StrictMode>
);