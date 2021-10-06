import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function OurWork(props) {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 980px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const isLargeScaleTablet = useMediaQuery({ query: '(max-width: 1092px)' })
    const styles = {
        ourWork: {
            display: 'flex',
            alignItems: isTabletOrMobile ?'left':isDesktopOrLaptop &&'left',
            alignItems: !isTabletOrMobile && !isDesktopOrLaptop &&'center',
            flexDirection: isTabletOrMobile ?'column':isDesktopOrLaptop?'column':'row',
            paddingLeft: '3%'
        },
        ourService: {
            fontSize: 15,
            fontWeight: 800,
            color:props.state.secondaryText

        },
        leftSide: {
            flex: 1,
            paddingTop: '2%',
        },
        title: {
            fontSize: isTabletOrMobile ? '2rem' : '3.5rem',
            fontWeight: 800,
            color:props.state.secondaryText
        },
        multiButton: {
            flex: 1.5,
            color:props.state.secondaryText,
            paddingLeft: '10%',
        },
        desc: {
            fontSize: '0.8rem',
            width: '70%'
        }
    }
    return (
        <div style={styles.ourWork} >
            <div style={styles.leftSide}>
                <div style={styles.ourService}>
                    <p>OUR WORK</p>
                </div>
                <div style={styles.title}>
                    <span>We Love <br /> &emsp; &nbsp; Our Work</span>
                </div>
            </div>
            <div style={styles.multiButton}>
                <div style={styles.desc}>
                    <p>
                        With hundreds of projects completed for industry-leading clients, we’ve done almost every type of project. Many of which became award winners and made us proud.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurWork;