import React from 'react';
import {Container, Row, Col} from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";


const categoryData =[
    {
        display: "Fast Food",
        imgUrl: categoryImg01
    },
    {
        display: "Pizza",
        imgUrl: categoryImg02
    },{
        display: "Asian Food",
        imgUrl: categoryImg03
    },{
        display: "Raw Meat",
        imgUrl: categoryImg04
    }
]

const Category = () => {
  return <Container>
        <Row>
                {
                    categoryData.map((item,index)=>(
                        <Col lg='3' md='4'>
                            <div className='category'>
                                <div className='category__item '>
                                    <div className='category__img'>
                                        <img src={item.imgUrl} alt='category__img'/>
                                    </div>
                                    <h4 className='category__name'>{item.display}</h4>
                                </div>                         
                            </div>
                        </Col>
                    ))
                }
            
        </Row>
    </Container>
}


export default Category