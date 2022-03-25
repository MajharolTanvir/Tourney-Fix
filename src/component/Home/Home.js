import React from 'react';
import './Home.css'
import firstImage from '../../Image/logo/1637854618301.png'
import secondImage from '../../Image/banner/pubg_mobile.jpg'
import thirdImage from '../../Image/banner/Garena-Free-Fire.jpg'
import fourthImage from '../../Image/banner/arena_of_valor.jpg'
import fifthImage from '../../Image/banner/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg'

const Home = () => {
    return (
        <div className="square-box">
            <div className="box">
                <span></span>
                <div className="content">
                    <div className="img_box w-50 mx-auto">
                        <img src={firstImage} alt="" />
                    </div>
                    <h6>KREE SCRIMS BATTLE</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                        voluptate?
                    </p>
                    <a className="w-100 text-center" href="/">Explore</a>
                </div>
            </div>
            <div className="box">
                <span></span>
                <div className="content">
                    <div className="img_box">
                        {/* <div className="container"> */}
                        <div className="row row-cols-2 gy-3">
                            <div className="col">
                                <img src={secondImage} alt="" />
                            </div>
                            <div className="col">
                                <img src={thirdImage} alt="" />
                            </div>
                            <div className="col">
                                <img src={fourthImage} alt="" />
                            </div>
                            <div className="col">
                                <img
                                    src={fifthImage}
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <h6>TOURNAMENT FIXTURE</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
                        fugit.
                    </p>
                    <a className="w-100 text-center" href="/">Explore</a>
                </div>
            </div>
        </div>
    );
};

export default Home;