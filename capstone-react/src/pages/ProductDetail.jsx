import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { http } from '../util/config';
import { ShoppingCartOutlined, HeartFilled } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Space, message } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAction } from '../Redux/Reducer/productReducer';
const { Meta } = Card;
const ProductDetail = () => {

    const [productDetail, setProductDetail] = useState({})
    const params = useParams();
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Add to Cart Success',
            duration: 5,
        });
    };

    const getProductDetail = async () => {
        const res = await http.get(`/api/product/getbyid?id=${params.id}`);
        if (res) {
            setProductDetail(res.data.content);

        }
    }
    // const handleChangeSize = (e) => {
    //     setProductDetail(e.target.size);
    // };

    console.log(params.id);
    useEffect(() => {
        //Call api
        getProductDetail();

    }, [params.id])


    return (

        <div className='container mt-3'>
            {contextHolder}
            <Row gutter={[20, 20]} >
                <Col lg={8}>
                    <Card hoverable cover={<img alt="example" src={productDetail.image} />}>
                    </Card>
                </Col>
                <Col lg={16}>
                    <h3>{productDetail.name}</h3>
                    <p>{productDetail.description}</p>
                    <p>{productDetail.shortDescription}</p>
                    <h3>Quantity: {productDetail.quantity}</h3>
                    <h3>Price: {productDetail.price} $</h3>
                    <Space wrap className='mt-3'>

                        <select class="form-select" aria-label="Default select example"  >
                            <option selected>Choose your size</option>
                            {productDetail.size?.map((item) => {
                                return <option value={item}>{item}</option>
                            })}
                        </select>
                    </Space>
                    <Button size='large' className='mt-4 d-block ' onClick={() => {

                        const action = addCartAction(productDetail);
                        dispatch(action);
                        success(action);
                        console.log(action)
                    }} > <ShoppingCartOutlined /> <a>Add to carts</a> </Button>
                </Col>
            </Row>
            <div className='mt-5'>
                <h2>Related Product</h2>
                <Row gutter={[15, 20]}>
                    {productDetail.relatedProducts?.map((item) => {
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
                                    <NavLink to={`/productdetail/${item.id}`}> <p>More Detail</p></NavLink>,

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
        </div >
    )
}

export default ProductDetail