import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Reviews(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1100px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })


    const styles = {
        image: {
            width: '25%',
            marginTop: '-8%',
            position: 'relative',
            borderRadius: '57%',
        },
        review: {
            display: 'flex',
            backgroundColor: props.state.primaryColor,
            flexDirection: isTabletOrMobile ? 'column' : isDesktopOrLaptop ? 'column' : 'row',
            margin: isTabletOrMobile ? '4%' : isDesktopOrLaptop ? '4%' : '',

            width: !isTabletOrMobile&&!isDesktopOrLaptop&&'70%',
            borderRadius: 6,
            justifyContent: 'center',
        },
        reviewLeftSide: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            paddingLeft: 20,
            color: props.state.primaryText,

        },
        review_Wrapper: {
            display: 'flex',
            // flexDirection: isTabletOrMobile ? 'column' : isDesktopOrLaptop ? 'column' : 'row',
            justifyContent: 'center',
            marginBottom: '3%'
        },
        multiButton: {
            flex: 1.5,
            paddingTop: "5%",
            alignSelf: 'end',
            textAlign: 'justify'

        },
        desc: {
            fontSize: '0.8rem',
            width: '80%',
            paddingLeft: '3%',
            color: props.state.primaryText
        }
    }
    return (
        <div style={styles.review_Wrapper}>
            <div style={styles.review}>

                <div style={styles.reviewLeftSide}>
                    <img style={styles.image} src={props.image} />
                    <h3>{props.title}</h3>
                </div>
                <div style={styles.multiButton}>
                    <div style={styles.desc}>
                        <img src="https://codingpixel.com/wp-content/themes/cp-theme/images/icons/inverted-comma.svg" />
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;