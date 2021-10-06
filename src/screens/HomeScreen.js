import React, { useState, useEffect, useRef } from 'react';
import Slider from './HomeScreen/SliderScreens/Slider';
import Creativity from './HomeScreen/SliderScreens/BelowSlider/Creativity';
import WhatWeDo from './HomeScreen/WeDo/WhatWeDo';
import OurWork from './HomeScreen/OurWork/OurWork';
import OurPortfolio from './HomeScreen/OurWork/OurPortfolio';
import WhatTheySay from './HomeScreen/Testimonials/WhatTheySay';
import ContactFooter from './Footer/Contact';
import Footer from './Footer/Footer';
function HomeScreen(props) {
    return (
        <>
            <Slider state={props.state} />
            <div id={'about'}>
                <Creativity state={props.state} />
            </div>

            <div id={'ourServices'}>
                <WhatWeDo state={props.state} />
            </div>
            <div id="project">
                <OurWork state={props.state} />
                <OurPortfolio state={props.state} />
            </div>
            <WhatTheySay state={props.state} />
            <ContactFooter state={props.state} />
            <Footer state={props.state} />
        </>
    );
}



export default HomeScreen;
