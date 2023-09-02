import React, { useEffect, useState } from "react";
import Banner from "./../../components/banner/Banner";
import Category from "./../../components/category/Category";
import SpecialOffers from "./../../components/special-offers/SpecialOffers";
import HeadingTitle from "./../../components/heading-title/HeadingTitle";
import Slider from "./../../components/slider/Slider";
import Brands from "./../../components/brands/Brands";
import Cart from "./../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من الابتوبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجديد من الجوالات" />
      <Slider data={mobiles} />
      <HeadingTitle title="تسوق حسب الماركة" />
      <Brands />
    </>
  );
};

export default Home;
