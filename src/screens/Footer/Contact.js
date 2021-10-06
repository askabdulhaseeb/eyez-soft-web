import React from 'react';
import { useMediaQuery } from 'react-responsive';

function ContactFooter(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })
    const styles = {
        wrapper: {
            backgroundImage: `url("https://htmlcssmonk.com/wp-content/uploads/2020/12/screen-post-LJUaTzKtFNc-unsplash-1024x640.jpg")`,
            objectFit: 'cover',
        },
        btn: {
            background: props.state.buttonColor,
            borderRadius: '9%',
            border: ' 1px solid white',
            color: props.state.primaryText,
            width: isTabletOrMobile?"100%":"32%",
            height: "40%",
            fontSize: 17,
            fontWeight: 800,
            padding: "2%"
        },
        ContactFooter: {
            background: props.state.primaryColor,
            opacity: 0.8,
            display: 'flex',
            flexDirection: isTabletOrMobile&&'column',
            paddingBottom:'5%',
            alignItems: !isTabletOrMobile&&'center',
    
        },
        ourService: {
            fontSize: 15,
            fontWeight: 800
        },
        leftSide: {
            flex: 1,
            color:props.state.primaryText,
            paddingTop: '2%',
            paddingLeft: isTabletOrMobile?'4%':'12%'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 800
        },
        multiButton: {
            flex: 1,
            paddingLeft: isTabletOrMobile?'2%':'10%',
            margin:'2%'
        },
        desc: {
            color:props.state.primaryText,
            fontSize: '0.8rem',
            textAlign: 'center'
        }
    }


    return (
        <div style={styles.wrapper}>
        <div style={styles.ContactFooter} >
            <div style={styles.leftSide}>
                <div style={styles.ourService}>
                    <h1>Let’s Start Something &nbsp;
                        Completely New Together</h1>
                </div>
                    <span>Drop Us A Line, And We’ll Get In Touch. We’ll See If
                        We’re A Match And How We Can Help Each Other.</span>
            </div>
            <div style={styles.multiButton}>
                <div style={styles.desc}>
                    <a style={styles.btn} href='/contact'>Creativity</a>
                      {/* <button  href="/contact">Creativity</button> */}

                </div>
            </div>
            <hr/>

        </div>
        </div>
    )
}

export default ContactFooter;