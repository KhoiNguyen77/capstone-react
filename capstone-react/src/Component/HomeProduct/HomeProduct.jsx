import React, { useEffect, useState } from 'react'
import { Avatar, Card, Col, Row } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductApi } from '../../Redux/Reducer/productReducer';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;
const HomeProduct = () => {
    const { arrProduct } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();


    //Cart
    // const [cart, setCart] = useState([]);
    // const handleClickCart = (item) => {
    //     if (cart.indexOf(item) !== -1) return
    //     setCart([...cart, item]);
    //     console.log(cart);
    // }


    const getProductApi = async () => {
        const actionAsync = getAllProductApi();
        dispatch(actionAsync);
    }
    useEffect(() => {
        getProductApi();

    }, [])
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Product Categories</h1>
            <Row gutter={[15, 20]}>
                {arrProduct?.map((item) => {
                    return <Col lg={8} key={item.id}>
                        <Card hoverable
                            style={{
                                width: 400,
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={item.image}
                                />
                            }
                            actions={[
                                <p><NavLink to={`/productdetail/${item.id}`}>More Detail </NavLink></p>,

                                <HeartFilled />,
                            ]}
                        >
                            <Meta

                                title={item.name}
                                description={item.shortDescription}
                            />
                        </Card>
                    </Col>
                })}


            </Row>





        </div>
    )
}

export default HomeProduct