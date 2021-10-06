import React, { useState, useEffect } from 'react';
import { COLORS } from '../../../GlobalVariables';
import WorkColumn from './WorkColumn';
import Coquimbo from '../../../images/Coquimbo.jpg';
import North from '../../../images/north.jpg';
import Vishvavahini from '../../../images/Vishvavahini.jpg';
import Gurumeya from '../../../images/Gurumeya.jpg';
import './Work.css'

function OurPortfolio(props) {
    return (
        <div style={styles.ourWork}>
            <div style={styles.leftCard} className="moveArrow card">
                <WorkColumn image={Coquimbo} title='Coquimbo FC' desc='Promover y facilitar los rodajes en toda la Región de Coquimbo
Promover y facilitar los rodajes en toda la Región de Coquimbo La Film Commission Coquimbo es una corporación sin fines de lucro, que tiene como objetivo promover y facilitar los rodajes en toda la Región de Coquimbo y de estimular el área audiovisual y sus servicios derivados en todo el territorio.' />
            </div>
            <div style={styles.rightCard} >
                <WorkColumn image={North} title='Northwest Reverse Mortgage' desc='Calculate your available proceeds from an FHA Reverse Mortgage.
Whether you are looking to refinance your current mortgage with a reverse mortgage to get rid of your monthly mortgage payments, or purchase a new home with reverse mortgage, this calculator does it all. This is constantly being updated with current rates and FHA County Lending Limits. This application will calculate the actual FHA Principal Lending Limits. This DOES not include closing costs and fees. Disclaimers are available in the application.' />
            </div>
            <div style={styles.leftCard} >
                <WorkColumn image={Vishvavahini} title='Vishvavahini TV/Radio' desc='Vishvavahini is a multiethnic TV and Radio delivering live streaming service. Vishvavahini TV / Radio App provides you with the latest breaking news on happenings around the World as well as, free TV shows, TV series episodes, talk shows, movies, sports, cartoons, music, travel all in one app! One of the best free TV / Radio apps. Download now and start streaming today!' />
            </div>
            <div style={styles.rightCard} className="moveArrow card">
                <WorkColumn image={Gurumeya} title='Gourmet-ya' desc='Easy online shopping from all of our Fresh Grocery product at great price One place all grocery products. Order grocery and food online with same-day home delivery. Save money, save time.' />
            </div>
        </div>
    )
}
const styles = {
    ourWork: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    rightCard: {
        flex: '50%',
        margin: 5,
        padding: 10,
        border: 'none'

        // justifyContent:'flex-start'
    },
    leftCard: {
        border: 'none',
        flex: '40%',
        margin: 5,
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingLeft: '4%'

    }

}
export default OurPortfolio;