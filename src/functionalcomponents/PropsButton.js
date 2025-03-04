import React from "react";

function PropsButton({ onPress, label, style }) {
  return (
    <div className="PropsButton">
      <button className="props-button" onClick={onPress} style={style}>
        {label}
      </button>
    </div>
  );
}

export default PropsButton;