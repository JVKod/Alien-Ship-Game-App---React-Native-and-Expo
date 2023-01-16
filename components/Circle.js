import { View } from "react-native";
import Matter from "matter-js";


const Circle = (props) => {
  const width = props.radius * 2;

  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - width / 2;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "white",
        borderStyle: "solid",
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: width,
        borderRadius: props.radius,
        backgroundColor: props.color,
      }}
    />
  );
};

export default (world, color, pos, radius, extraoptions) => {
  const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: "Circle",
    isStatic: extraoptions.isStatic,
    restitution: 1
  });
  Matter.World.add(world, theCircle);
  return { body: theCircle, color, radius, renderer: <Circle /> };
};
1;
