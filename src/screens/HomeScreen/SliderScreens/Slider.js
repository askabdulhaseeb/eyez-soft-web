import React, { component } from "react";
import SliderText from "./SliderText";
import './Slider.css'
import { useMediaQuery } from 'react-responsive';
import Creativity from "./BelowSlider/Creativity";

function Slider(props) {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1114px)' })

    const isLargeScaleTablet = useMediaQuery({ query: '(min-width: 1092px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    // alert("Primary Color :- ",props.primaryColor)
    const styles = {
        textLogoWrapper: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        slider: {
            background: props.state.primaryColor,
            height: isBigScreen && '100vh',
            flexWrap: 'wrap',
            paddingTop:'10%',
            paddingBottom:'10%'

        },
        sliderText: {
            flex: 1,
            flexWrap: 'wrap'
        },
        sliderLogo: {
            flex: 1,
        }
    }


    return (
        <div style={styles.slider}>
            <div style={styles.textLogoWrapper}>
                <div style={styles.sliderText}>
                    <SliderText state={props.state}/>
                </div>
                <div className="moveArrow" style={styles.sliderLogo}>
                    <img src={props.state.logoImage} style={{ width: isTabletOrMobile ? '40%' : '50%',opacity:'0.2' }} />
                </div>
            </div>
        </div>
    )

}


export default Slider;