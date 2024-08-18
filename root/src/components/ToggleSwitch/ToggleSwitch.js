import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";
import SunIcon from "../../assets/svgs/SunIcon.svg"
import MoonIcon from "../../assets/svgs/MoonIcon.svg"

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  const onClick = () => {
    styleContext.changeTheme();
    setChecked(!isChecked);
  };

  return (
    <label className="switch">
      {isDark ? (<img
        src={SunIcon}
        alt="Sun Icon"
        className="icon sun"
        onClick={onClick}
      />) : (<img
        src={MoonIcon}
        alt="Moon Icon"
        className="icon moon"
        onClick={onClick}
      />)}
    </label>
  );
};
export default ToggleSwitch;
