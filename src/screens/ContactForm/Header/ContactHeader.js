import React from "react";
import ContactFooter from "../../Footer/Contact";
import ContactForm from "../FormSection/Form";
import Footer from "../../Footer/Footer";
function ContactHeader(props) {

    const styles = {
        textLogoWrapper: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            margin: '5%',
            // margin: '3vw',
            fontSize: 20
        },
        ContactHeader: {
            background: props.state.primaryColor,
            flexWrap: 'wrap'
        },
        ContactHeaderText: {
            flex: 1,
            color: props.state.primaryText,
            flexWrap: 'wrap'
        }, container: {
            display: 'flex',
            flexDirection: 'Column'
        },
        form: {
            flex: 1,
            padding:'2%'
        }

    }


    return (
        <div style={styles.container}>
            <div style={styles.ContactHeader}>
                <div style={styles.textLogoWrapper}>
                    <div style={styles.ContactHeaderText}>

                        <h1>Contact US </h1>
                        <p>Please help us to respond better to your query by filling out the relevant form.</p>    
                                    </div>

                </div>
            </div>
            <div style={styles.form}>
                <ContactForm  state={props.state}/>
            </div>
            <ContactFooter state={props.state}/>
            <Footer state={props.state}/>
        </div>
    )

}


export default ContactHeader;

