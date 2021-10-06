import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { colorChange } from "./redux/actions/colorAction";
import store from './redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Switch from "react-switch";
import Routing from './screens/Routing';

function App() {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(true);
  useEffect(() => {
    dispatch(colorChange(true));
  }, []);
  const state = store.getState().color;
  const handleChange = () => {
    setIsToggled(!isToggled)
    dispatch(colorChange(!isToggled));
  }
  const styles = {
    container: {
      background: state.secondaryColor,
      width: '100vw',
      overflowX: 'hidden',

    },
    zIndexButton: {
      position: 'fixed',
      top: '50%',
      zIndex: 99999999,

      transform: 'rotate(90deg)',
    },
    paint: {
      fontSize: '1.5em',
      color: isToggled ? '#fad15f' : '#fff',
      padding: '3%',
      margin: '4%'
    }
  }
  return (
    <div style={styles.container} >
      <div style={styles.zIndexButton}>
        <Switch onChange={handleChange} checked={isToggled} width={58} uncheckedIcon={<FontAwesomeIcon style={styles.paint} icon={faLightbulb} />}  checkedIcon={<FontAwesomeIcon style={styles.paint} icon={faMoon} />} />
      </div>
      <Routing state={state} />
    </div>
  );
}



export default App;
