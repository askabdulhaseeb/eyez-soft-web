import React, { useState, useEffect ,useRef} from 'react';
import './Button.css';
import { useMediaQuery } from 'react-responsive';

function Creativity(props) {
    // const creativitySession = useRef(null);
    // const gotoCreativitySession = () => window.scrollTo({top: creativitySession.current.offset,behavior:"smooth"})


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


    const titles = [
        'Fast', 'Responsive', 'Trendy', 'Custom', 'Quality', 'Create'
    ]
    let value = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            if (value < titles.length) {
                setTitle(titles[value]);
                value++;
                // setValue(value+1);
            } else {
                value = 0;
                // setValue(0);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);
    const [title, setTitle] = useState("");


    const styles = {
        belowSlider: {
            background: '#FAFAFA',
            display: 'flex',
            flexDirection: isTabletOrMobile&&'column',
            paddingTop: "5%",
            paddingBottom: isTabletOrMobile?"15%":"5%",
            paddingLeft: isTabletOrMobile&&'14%',

        },
        textAnimation: {
            flex: 1,
            textAlign: !isTabletOrMobile&&"center",
            alignSelf: !isTabletOrMobile&&"center",
            fontSize: 45,
            fontWeight: 800
        },
        multiButton: {
            textAlign: 'justify',
            paddingRight: '14%',
            flex: 1.5
        },
        btnContainer: {
            display: 'flex',
            marginTop: "6%"
        },
        creativity: {
            flex: 1
        },
        technology: {
            flex: 1
        },
        btn: {
            backgroundColor: props.state.buttonColor,
            borderRadius:'4%',
            color: "white",
            width: "70%",
            height: "40%",
            fontSize: 17,
            fontWeight: 800,
            marginBottom:'4%'
        },
        separator: {
            width: "20%",
            marginLeft: "31%",
            color: "#6723DB"
        }
    }


    return (
        <div style={styles.belowSlider}  >
            <div style={styles.textAnimation}>
                <hr style={styles.separator} />
                {title}
            </div>

            <div style={styles.multiButton}>
                <p style={{ fontWeight: 500 }}>
                    The Eyez hallmark is enterprise-level, bespoke digital products development. We are one of the leading software and app development companies in USA backed by a strong workforce of software, app and web developers. Eyez started its journey 8 years ago to fulfill the purpose of developing quality digital products in real terms. Our primary business model is based on custom software development projects delivered at competitive cost
                </p>
                <div style={styles.btnContainer}>
                    <div style={styles.creativity}>
                        <button style={styles.btn}>Creativity</button>

                        <p style={{ paddingRight: "11%" }}>Trendy, Modish, Interactive, Stylish, Posh, Trendsetter, Super Cool, Elegant, Classy & Modern Designs & User Experiences</p>
                    </div>
                    <div style={styles.technology}>
                        <button style={styles.btn}>Technology</button>
                        <p>Custom Website Design, Native Mobile Apps Development, E-Commerce Development, Bespoke Software Development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creativity;