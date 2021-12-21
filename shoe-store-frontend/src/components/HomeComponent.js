import {Component} from 'react';
import {Container, Carousel} from 'react-bootstrap';


function Welcome() {
   
        return(
            <div>
            <Container  className="res">
                <Carousel fade>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src="https://2.kixify.com/sites/default/files/imagecache/product_full/product/2019/05/01/p_26641561_145887566_249352.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="black">Air Jordan 4s Bred 2019</h3>
                            <p className="black">$250</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_air-jordan-11-concord-2018-0.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="black">Air Jordan 11s Concord 2018</h3>
                            <p className="black">$250</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1?fimg-ssr-default"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="black">Nike Air Forces White</h3>
                            <p className="black">$90</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            </div>
        );
    }


export default Welcome;