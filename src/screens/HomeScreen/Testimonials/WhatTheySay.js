import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';
import { useMediaQuery } from 'react-responsive';
import client from '../../../images/mudarib.jpg'


function WhatTheySay(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1100px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })
    const styles = {
        Review: {
            background: `linear-gradient(to bottom, ${props.state.midGrey} 0%,  ${props.state.midGrey} 50%, ${props.state.secondaryColor} 50%, ${props.state.secondaryColor} 100%)`,

        },
        WhatTheySay: {

            display: 'flex',
            background: props.state.midGrey,
            alignItems: isTabletOrMobile ? 'left' : isDesktopOrLaptop && 'left',
            alignItems: !isTabletOrMobile && !isDesktopOrLaptop && 'center',
            flexDirection: isTabletOrMobile ? 'column' : isDesktopOrLaptop ? 'column' : 'row',
            paddingLeft: '3%',
            paddingBottom: '4%'
            // height: '30vh'
        },
        ourService: {
            fontSize: 15,
            fontWeight: 800
        },
        leftSide: {
            flex: 1,
            paddingTop: '2%',
            textAlign: isTabletOrMobile ? 'left' : isDesktopOrLaptop && 'left',
            textAlign: !isTabletOrMobile && !isDesktopOrLaptop && 'center',
        },
        title: {
            fontSize: isTabletOrMobile ? '2rem' : '3.5rem',
            fontWeight: 800
        },
        multiButton: {
            flex: 1.5,
            paddingLeft: !isTabletOrMobile && !isDesktopOrLaptop && '10%',
        },
        desc: {
            fontSize: '0.8rem',
            width: '70%'
        }
    }
    return (
        <div>
            <div style={styles.WhatTheySay} >
                <div style={styles.leftSide}>
                    <div style={styles.title}>
                        <span>What <br /> &emsp; &nbsp; They Say</span>
                    </div>
                </div>
                <div style={styles.multiButton}>
                    <div style={styles.desc}>
                        <p>
                            Happy Clients Whom We Were Pleased To Work With
                        </p>
                    </div>
                </div>
            </div>
            <div style={styles.Review}>
                <Reviews state={props.state} title="M.MUHAMMAD MUDARRIB" image={client} desc="Eyezsoft helped me to excel and integrate multiple tasks of my trading business in to one piece of software.Now I can manage all activities of geographical distant warehouse from the comfort of my home.On time desicion of working with eyez soft helped to become Market leader in shortest period of time" />
            </div>
        </div>
    )
}

export default WhatTheySay;













// import React, { useState, useEffect } from 'react';
// import { COLORS } from '../../GlobalVariables';
// import { useMediaQuery } from 'react-responsive';

// function OurWork() {

//     const isDesktopOrLaptop = useMediaQuery({
//         query: '(max-width: 980px)'
//     })
//     const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })

//     const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//     const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

//     const isLargeScaleTablet = useMediaQuery({ query: '(max-width: 1092px)' })
//     const styles = {
//         ourWork: {
//             display: 'flex',
//             background: COLORS.white,
//             alignItems: isTabletOrMobile ?'left':isDesktopOrLaptop &&'left',
//             alignItems: !isTabletOrMobile && !isDesktopOrLaptop &&'center',
//             flexDirection: isTabletOrMobile ?'column':isDesktopOrLaptop?'column':'row',
//             paddingLeft: '3%'
//         },
//         ourService: {
//             fontSize: 15,
//             fontWeight: 800
//         },
//         leftSide: {
//             flex: 1,
//             paddingTop: '2%',
//         },
//         title: {
//             fontSize: isTabletOrMobile ? '2rem' : '3.5rem',
//             fontWeight: 800
//         },
//         multiButton: {
//             flex: 1.5,
//             paddingLeft: '10%',
//         },
//         desc: {
//             fontSize: '0.8rem',
//             width: '70%'
//         }
//     }
//     return (
//         <div style={styles.ourWork} >
//             <div style={styles.leftSide}>
//                 <div style={styles.ourService}>
//                     <p>OUR WORK</p>
//                 </div>
//                 <div style={styles.title}>
//                     <span>We Love <br /> &emsp; &nbsp; Our Work</span>
//                 </div>
//             </div>
//             <div style={styles.multiButton}>
//                 <div style={styles.desc}>
//                     <p>
//                         With hundreds of projects completed for industry-leading clients, we’ve done almost every type of project. Many of which became award winners and made us proud.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurWork;