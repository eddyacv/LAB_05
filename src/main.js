import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import portadas from './data/portada.json';





const Main = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center box col-md-8">
            <div className="row">
            <div className="container-sm d-flex justify-content-center pt-5 pb-5">
                


        <Carousel>
          {portadas.map(it =>{

            return(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={it.url}
                  alt={it.name}
                  
                />
                <Carousel.Caption>
                  <h3>{it.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )

          })}
        </Carousel>

           
        

            
            </div>    
                
            </div>
            <div className="row text-white pt-4 pb-5 d-flex">
                <h3>VilandSaga</h3>
                
                <p>
                    Por esta página a su vez que hago la tarea, comparto mi gusto por esta serie y el estoicismo, el mensaje que deja esta serie trata de considerar que el individuo debe vivir en armonía con la razón y ser objetivos y no dejarnos llevar por los impulsos.
                    <br />
                    Saber cómo reaccionar y evitar conflictos innecesarios.
                    <br />
                    <br />
                    A su vez, el estoicismo nos dice que uno debe actuar con razón y evitar gastar recursos en cosas que no podemos cambiar. El estoicismo, una persona estoica es quien a pesar de todo lo bueno y malo está tranquilo. Eso es lo que busca.
                </p>
            </div>
        </div>
    );
}

export default Main;
