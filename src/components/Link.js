import React from "react";
import Button from 'react-bootstrap/Button';

const Link = ({ active, onClick, children }) => (
  <Button
    onClick={onClick}
    disabled={active}
    style={{
        width:"10%",
      marginLeft: "1em",
    }}
  >
    {children}
  </Button>
);

export default Link;
