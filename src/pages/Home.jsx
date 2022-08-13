import React ,{useEffect , useState} from 'react';
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero.png";
import "../styles/home.css"
import {Link} from "react-router-dom";
import Category from "../components/UI/category/Category";
import "../styles/category.css";
import featureData1 from '../assets/images/service-01.png';
import featureData2 from '../assets/images/service-02.png';
import featureData3 from '../assets/images/service-03.png';
import products from "../assets/fake-data/products.js";
import foodCategoryImg1 from "../assets/images/hamburger.png";
import foodCategoryImg2 from "../assets/images/bread.png";
import foodCategoryImg3 from "../assets/images/pizza.png";
import "../styles/productCard.css";
import ProductCard from "../components/UI/product card/productCard.jsx";
import location from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';


const featureData=[
    {
        title:'Quick Delivery',
        imgUrl:featureData1,
        description:'lorem innwe djnweoi aonwij dcnd iqwe scooinnedi dnweiow'
    },
    {
        title:'Super Dine In',
        imgUrl:featureData2,
        description:'lorem innwe djnweoi aonwij dcnd iqwe scooinnedi dnweiow'
    },
    {
        title:'Easy Pick Up',
        imgUrl:featureData3,
        description:'lorem innwe djnweoi aonwij dcnd iqwe scooinnedi dnweiow'
    },
]
const Home = () => {
    const [category, setCategory] = useState('ALL');
    const [allProducts, setAllProducts] =  useState(products);

    const [hotPizza, setHotPizza] = useState([])
    useEffect(()=>{
        const filteredPizza = products.filter(item=> item.category === 'Pizza')
        const slicePizza = filteredPizza.slice(0,4)
        setHotPizza(slicePizza)
    },[])

    useEffect(()=>{
        if (category === 'ALL'){
            setAllProducts(products);
        }

        if (category === 'BURGER'){
            const filteredProducts = products.filter(item=>item.category==='BURGER')
            setAllProducts(filteredProducts);
        }

        if (category === 'BREAD'){
            const filteredProducts = products.filter(item=>item.category==='BREAD')
            setAllProducts(filteredProducts);
        }

        if (category === 'PIZZA'){
            const filteredProducts = products.filter(item=>item.category==='PIZZA')
            setAllProducts(filteredProducts);
        }

       
    },[category])

    return(
        <div>
            <Helmet title="Home">
                <section>
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                                <div className='hero__content'>
                                    <h5>Easy way to make an order</h5>

                                    <h1 className='hero-title'><span>Hungry?</span> Just wait, food <span>at your doors</span></h1>

                                    <p>lorem innwe djnweoi aonwij dcnd iqwe scooinnedi dnweiowednc
                                    jnnfjwfjn sdocnwddpokd z.dckofif koiwje</p>

                                    <div className='home__button'>
                                         <button type='button' className='btn btn-danger order__button'><Link to="/cart">Order now</Link></button>
                                         <button type='button' className='btn btn-danger order__button'><Link to="/foods">See all foods</Link></button>
                                    </div>

                                    <div className='shipping-charge'>
                                    <Row>
                                        <Col>
                                            <div><i class="ri-car-line shipping-icon"></i><p>No shipping charge</p></div>
                                        </Col>
                                        <Col>
                                            <div><i class="ri-shield-flash-line shipping-icon"></i><p>100% Secure</p></div>
                                        </Col>
                                    </Row>
                                    </div>
                                </div>
                            </Col>

                            <Col lg='6' md='6'>
                                <div className='hero__img'>
                                    <img src={heroImg} alt='hero-img' className='w-100 hero-img'></img>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Category/>
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col>
                                <div className='what_we_serve'>
                                    What we serve
                                    <p>Just sit back at home we will <span>take care </span></p>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutrum. Donec commodo </div>
                                </div>
                            </Col>

                            <Row className='feature__row'>
                                {
                                    featureData.map((item,index)=>(
                                        <Col>
                                            <div>
                                                <img src={item.imgUrl} alt="feature" className='feature__img '/>
                                                <p className='feature__title'>{item.title}</p>
                                                <p className='feature__des'>{item.description}</p>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className='text-center'>Popular Foods</h2>
                            </Col>

                            <Col lg='12'>
                                <div className='food__category'>
                                    <button className='all_btn foodbBtnActive' onClick={()=>setCategory('ALL')}>All</button>
                                    <button><img src={foodCategoryImg1} alt="foodCategoryImg1"  onClick={()=>setCategory('BURGER')}/>Burger</button>
                                    <button><img src={foodCategoryImg2} alt="foodCategoryImg2"  onClick={()=>setCategory('BREAD')}/>bread</button>
                                    <button><img src={foodCategoryImg3} alt="foodCategoryImg3"  onClick={()=>setCategory('PIZZA')}/>pizza</button>
                                </div>
                            </Col>
                                {
                                    allProducts.map(item=>(
                                        <Col lg='3' md='4' key={item.id} className='mt-5 product__card w-50'>
                                            <ProductCard item={item}/>
                                        </Col>
                                    ))
                                }
                        </Row>
                    </Container>
                </section>

                <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' >
                                <img src={location} alt='location' className='location__img'/>
                        </Col>

                        <Col lg='6' md='6' className='tasty__treat'>
                            <h2 >Why <span>Tasty Treat?</span></h2>
                            <p className='tasty__treat__des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutrum. Donec commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutrum. Donec commodo</p>
                        </Col>

                        <Col lg='4' md='6' sm='12' className='tasty__treat__sub__cat'>
                            <div className='check__icon'><h6><i class="ri-checkbox-circle-fill"></i>Fresh and tasty foods</h6></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
                        </Col>

                        <Col lg='4' md='6' sm='12' className='tasty__treat__sub__cat'>
                            <div className='check__icon'><h6><i class="ri-checkbox-circle-fill"></i>Quality support</h6></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
                        </Col>

                        <Col lg='4' md='6' sm='12' className='tasty__treat__sub__cat'>
                            <div className='check__icon'><h6><i class="ri-checkbox-circle-fill"></i>Order from any location</h6></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
                        </Col>
                    </Row>
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2>Hot Pizza</h2>
                            </Col>

                            {
                                hotPizza.map(item=>(
                                    <Col lg='3' md='4' sm='6' className='g-5' key={item.id}>
                                        <ProductCard item={item}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col lg='6' md='6' className='testmonial__head'>
                                <div className='testimonial'>Testimonial</div>
                                <h2 className='testimonial__title'>What our <span>customers</span> are saying</h2>
                                <p className='testimonial__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
                                <div><TestimonialSlider/></div>
                            </Col>

                            <Col lg='6' md='6'>
                                <img src={networkImg} alt='networkImg' className='w-100'/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </div>
    )           
}

export default Home;