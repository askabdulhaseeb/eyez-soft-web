import React, { useState, useEffect } from 'react';
import { COLORS } from '../../../GlobalVariables';
function WorkColumn(props) {
    return (
        <div style={styles.ourWork}>
            <div style={styles.image}>
                <img src={props.image} style={{width: '100%'}}/>
            </div>
            <div style={styles.title}>
                <h1>{props.title}</h1>
            </div>
            <div style={styles.desc}>
                <p>SiteSeekr is a social experience app that facilitates a connection between tourists and expert guides for popular tourism locations around the world. The app features private and public livestreaming options as well a chat-based tourist guide service for people to get real-time views of popular tourist attractions. Guides are able to get paid for their</p>
            </div>
        </div>
    )
}
const styles = {
    ourWork: {
        background: COLORS.midGrey,
        flexDirection: 'column',
        padding:20,
        borderRadius:10,
        width: '50vh',
    },
    image:{
        flex: 1,
        alignItems:'center'
    },
    title:{
        flex: 1,
        fontSize: 10,
    },
    desc:{
        flex: 1,
        textAlign:'justify'
    }

}
export default WorkColumn;