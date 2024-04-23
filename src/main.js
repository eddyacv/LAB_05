import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Main = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center box">
            <div className="row">
            <div className="container-sm d-flex justify-content-center pt-5 pb-5">
                


            <Carousel className='text-center'>
      <Carousel.Item>
      <img className="img-fluid w-50" src="https://m.media-amazon.com/images/S/pv-target-images/9deb37cdbdb22731096e44f9df44aa3b285e3a2d5e9407f8cf4a656eb009619e.jpg" alt="" />     

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="img-fluid " src="https://i.blogs.es/a99677/vinland-saga-temporada-2/1366_2000.jpeg" alt="" />     
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="img-fluid " src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/vinland-saga-season-2-visual.jpg" alt="" />     
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
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
