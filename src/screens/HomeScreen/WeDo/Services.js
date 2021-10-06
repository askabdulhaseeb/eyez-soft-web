import React, { useState, useEffect } from 'react';

function Services(props) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            padding: '7%',
            color: props.state.primaryText,
        },
        title: {
            fontSize: 20,
            fontWeight: 700
        },
        desc: {
            fontSize: '0.8rem'
        }

    }
    return (
        <div style={styles.container}>
            <div>
                <img src={props.image} />
            </div>
            <div style={styles.title}>
                <h3>{props.title}</h3>
            </div>
            <div style={styles.desc}>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Services;