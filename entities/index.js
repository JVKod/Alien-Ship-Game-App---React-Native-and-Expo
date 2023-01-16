//index.js
import { Dimensions } from "react-native";
import Images from "../Images";
import Matter from "matter-js";
import Constants from "../Constants";
import Boundary from "../components/Boundary";
import Box from "../components/Box";
import Circle from "../components/Circle";



export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0;

  return {
    physics: { engine, world },
    
    // Player
    Player: Box(
      world,
      "green",
      { x: 200, y: 550 },
      { width: 40, height: 40 },
      { isStatic: false, label: "Player", image: Images.playerShip, restitution: 0 }
    ),
    
    // Asteroid
    Asteroid: Box(
      world,
      "green",
      { x: 185, y: 450 },
      { width: 40, height: 40 },
      { isStatic: false, label: "Asteroid", image: Images.asteroid, restitution: 0 }
    ),

    Asteroid2: Box(
      world,
      "green",
      { x: 195, y: 390 },
      { width: 40, height: 40 },
      { isStatic: false, label: "Asteroid2", image: Images.asteroid, restitution: 0 }
    ),

    Asteroid3: Box(
      world,
      "green",
      { x: 160, y: 400 },
      { width: 40, height: 40 },
      { isStatic: false, label: "Asteroid3", image: Images.asteroid, restitution: 0 }
    ),

    // Space Junk
    SpaceJunk: Circle(
      world,
      "grey",
      { 
        x: 175, 
        y: 445
      },
      10,
      {
        label: "SpaceJunk",
        isStatic: false
      }
    ),

    SpaceJunk2: Circle(
      world,
      "black",
      { 
        x: 185, 
        y: 445
      },
      10,
      {
        label: "SpaceJunk2",
        isStatic: false
      }
    ),

    SpaceJunk3: Circle(
      world,
      "gold",
      { 
        x: 195, 
        y: 445
      },
      10,
      {
        label: "SpaceJunk3",
        isStatic: false
      }
    ),

    // Alien MotherShip
    AlienMotherShip: Box(
      world,
      "green",
      { x: 190, y: 50 },
      { width: 95, height: 95 },
      { isStatic: false, label: "AlienMotherShip", image: Images.alienShip, restitution: 0 }
    ),

    // Alien Child Ships
    ChildShip1: Box(
      world,
      "green",
      { x: 200, y: 150 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip1", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip2: Box(
      world,
      "green",
      { x: 350, y: 120 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip2", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip3: Box(
      world,
      "green",
      { x: 150, y: 175 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip3", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip4: Box(
      world,
      "green",
      { x: 130, y: 130 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip4", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip5: Box(
      world,
      "green",
      { x: 130, y: 150 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip5", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip6: Box(
      world,
      "green",
      { x: 120, y: 250 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip6", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip7: Box(
      world,
      "green",
      { x: 120, y: 260 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip7", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip7: Box(
      world,
      "green",
      { x: 110, y: 270 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip7", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip8: Box(
      world,
      "green",
      { x: 100, y: 280 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip8", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip9: Box(
      world,
      "green",
      { x: 90, y: 290 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip9", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip10: Box(
      world,
      "green",
      { x: 220, y: 295 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip10", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip11: Box(
      world,
      "green",
      { x: 210, y: 270 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip11", image: Images.alienShip, restitution: 1.25 }
    ),

    ChildShip12: Box(
      world,
      "green",
      { x: 190, y: 275 },
      { width: 40, height: 40 },
      { isStatic: false, label: "ChildShip12", image: Images.alienShip, restitution: 1.25 }
    ),
    
    /*
    // Player
    Player: Player(
      world, 
      "yellow", 
      { x: 200, y: 550 },
      { width: 70, height: 10 },
      { isStatic: true, restitution: 0 }
    ),
    
    // MotherShip
    MotherShip: Mothership(
      world,
      "red",
      { x: 190, y: 50 },
      { width: 150, height: 10 },
      { isStatic: true, restitution: 0 }
    ),

    // Children Ship
    Ship1: Ship(
      world,
      "red",
      { x: 200, y: 150 },
      { width: 75, height: 10 },
      { isStatic: false, label: "Ship1", restitution: 0 }
    ),

    Ship2: Ship(
      world,
      "red",
      { x: 175, y: 175 },
      { width: 75, height: 10 },
      { isStatic: false, label: "Ship2", restitution: 0 }
    ),

    Ship3: Ship(
      world,
      "red",
      { x: 210, y: 200 },
      { width: 75, height: 10 },
      { isStatic: false, label: "Ship3", restitution: 0 }
    ),

    Ship4: Ship(
      world,
      "red",
      { x: 230, y: 120 },
      { width: 75, height: 10 },
      { isStatic: false, label: "Ship4", restitution: 0 }
    ),

    Ship5: Ship(
      world,
      "red",
      { x: 250, y: 100 },
      { width: 75, height: 10 },
      { isStatic: false, label: "Ship5", restitution: 0 }
    ),

    // Asteroid
    Asteroid: Asteroid(
      world,
      "brown",
      { x: 185, y: 450},
      { width: 15, height: 15 },
      { isStatic: false, restitution: 1 }
    ),

    */

    // CIRCLES /////////////////////////////////////////////////////////////
    /*
    CircleO: Circle(
      world,
      "blue",
      { 
        x: 85, 
        y: 500
      },
      8,
      {
        label: "CircleJ",
        isStatic: true
      }
    ),
    */

    ///////BOUNDARIES////////////////////////////////////////////////////////////////////

    TopBoundary: Boundary(
      world,
      "gray",
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 15, width: Constants.WINDOW_WIDTH },
      { label: "TopBoundary", isStatic: true, restitution: 3 }
    ),

    MidBoundary: Boundary(
      world,
      "gray",
      { x: 200, y: 620 },
      { height: 5, width: Constants.WINDOW_WIDTH },
      { label: "MidBoundary", isStatic: true, restitution: 3 }
    ),

    LeftBoundary: Boundary(
      world,
      "gray",
      { x: 0, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 30 },
      { label: "LeftBoundary", isStatic: true, restitution: 3 }
    ),

    RightBoundary: Boundary(
      world,
      "gray",
      { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 30 },
      { label: "RightBoundary", isStatic: true, restitution: 3 }
    ),

    BottomBoundary: Boundary(
      world,
      "gray",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT },
      { height: 15, width: Constants.WINDOW_WIDTH },
      { label: "BottomBoundary", isStatic: true, restitution: 3 }
    ),
  };
};
