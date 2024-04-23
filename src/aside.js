import React from 'react';

const Aside = () => {
        return (
                <div class="container d-flex flex-column justify-content-center align-items-center box text-white">

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo Electronico</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Consulta</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            
                <button type="button" class="btn btn-light">Consultar</button>
            
                </div>
            
        );
}

export default Aside;
