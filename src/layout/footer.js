import React from 'react';
import { Facebook, Twitter, Instagram, Map, MapPin, Phone } from 'react-feather';


const Footer = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center aling-items-center">
                    
                    <div className="row text-center">
                        <h3>Redes Sociales</h3>

                        <div className="row align-items-start">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                    
                </div>


                <div className="col-md-4 d-flex justify-content-center aling-items-center">
                    
                    <div className="row text-center">
                        <h3>Ubicación</h3>

                        <div className="row align-items-start">
                            <Map />
                            <MapPin />
                            
                        </div>
                    </div>
                    
                </div>


                <div className="col-md-4 d-flex justify-content-center aling-items-center">
                    
                    <div className="row text-center">
                        <h3>Contactanos</h3>

                        <div className="row align-items-start">
                            <Phone />
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        
    );
}

export default Footer;
