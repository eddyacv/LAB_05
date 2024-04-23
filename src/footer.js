import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-light mt-5">
            <div className="row d-flex pt-5">
                <div className="col-4 d-flex justify-content-center">
                    <div className="row d-flex align-items-center">
                        <h3 className="text-decoration-underline">VilandSaga</h3>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <h3 className="text-decoration-underline">Indices</h3>
                        <a href="#" className="text-decoration-none text-dark">- Inicio</a>
                        <a href="#" className="text-decoration-none text-dark">- Nosotros</a>
                        <a href="#" className="text-decoration-none text-dark">- Catalogo</a>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <h3 className="text-decoration-underline">Legal</h3>
                        <a href="#" className="text-decoration-none text-dark">- Terminos y Condiciones</a>
                    </div>
                </div>
            </div>
            <div className="row pt-10">
                <h4 className="text-black d-flex justify-content-center mt-10">@2024 Acevedo Villena Dylan Eddy - Todos los derechos de autor reservados</h4>
            </div>
        </div>
    );
}

export default Footer;
