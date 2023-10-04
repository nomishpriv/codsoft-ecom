import React, { useEffect } from "react";
import Slider from "../components/Slider";
import HomeCategory from "../components/HomeCategory";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../app/slices/productSlice'
import Men from '../assets/Men.jpg';
import Women from '../assets/Women.jpg';
import Fragrance from '../assets/Fragrance.jpg';
import Kids from '../assets/Kids.jpg';
import MenUnstitched from '../assets/Men unstitched.jpg';
import WomenUnstitched from '../assets/Women unstitched.jpg';


const Home = () => {

    const dispatch = useDispatch()
    const {error, loading, data} = useSelector((state) => state.posts)

    useEffect(()=> {
        // dispatch(getProducts())
    },[])


  return (
    <>
    
        <Slider />
      <div className="d-flex flex-wrap justify-content-center ">
        <HomeCategory name="Women" img={Women} />
        <HomeCategory name="Men" img={Men} />
        <HomeCategory name="Fragrance" img={Fragrance} />
        <HomeCategory name="Kids"  img={Kids}/>
        <HomeCategory name="Men unstitched" img={MenUnstitched} />
        <HomeCategory name="Women unstitched" img={WomenUnstitched}/>
      </div>
    </>
  );
};

export default Home;
