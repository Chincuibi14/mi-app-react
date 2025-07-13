import { Container,Carousel } from "react-bootstrap";
import Imagen from "../Imagenes/Imagenes";


function Carrusel ({path1,path2,path3}){
    return (

        <Container className="mt-4" style={{ maxWidth: '800px' }}>
            <Carousel>
                <Carousel.Item>

                    <Imagen
                        className="d-block w-100"
                        src={path1}
                    />
                       
                    <Carousel.Caption>
                      
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                    <Imagen
                        className="d-block w-100"
                        src={path2}
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                    <Imagen
                        className="d-block w-100"
                        src={path3}
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel> 

        </Container>

 
    );
}

export default Carrusel;