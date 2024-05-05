import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <div>
      <Box boxColor ="red" text="text one"/>
      <Box boxColor ="blue" text="text two"/>
      <Box boxColor ="green" text="text three"/>
      <Box boxColor ="pink" text="text four"/>

      {circleColorArr.map(item => (
        <Circle color={item}></Circle>
      ))}
    </div>
  );
};

export default BoxAlign;

