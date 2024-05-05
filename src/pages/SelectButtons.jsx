import Button from "../components/Button/Button";
import { useState } from "react";

const SelectButtons = () => {
  
  const [click, setclick] = useState(null);

  return (
    <div className="selectBtns">
      <Button onClick={()=>{setclick(1)}} style={click === 1 ? { backgroundColor: "lightpink" } : null}>Primary</Button>
      <Button onClick={()=>{setclick(2)}} style={click === 2 ? { backgroundColor: "lightpink" } : null}>Secondary</Button>
      <Button onClick={()=>{setclick(3)}} style={click === 3 ? { backgroundColor: "lightpink" } : null}>Default</Button>
    </div>
  );
};

export default SelectButtons;