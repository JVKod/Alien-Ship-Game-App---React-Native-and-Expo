import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
import Images from "./Images";


const Physics = (entities, { touches, dispatch, events, time }) => {
  let engine = entities.physics.engine;
  let world = engine.world;

  /*
  let randomColor = () => {
    const colorArray = ['blue', 'purple', 'black', 'yellow', 'green', 'gray', 'orange', 'pink', 'brown'];
    let generatedColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    return (
      generatedColor
    );
  }
  */
  

  // let xArr = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350];

  // let generatedXVal = xArr[Math.floor(Math.random()*xArr.length)];

  // Asteroid initial movement
  // Matter.Body.setVelocity(entities.Asteroid.body, { x: 1, y: 1 });

  // Children Ships initial movement
  
  Matter.Body.setVelocity(entities.ChildShip1.body, { x: -3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip2.body, { x: 3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip3.body, { x: -3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip4.body, { x: 3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip5.body, { x: -3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip6.body, { x: 3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip7.body, { x: -3, y: 0 });
  Matter.Body.setVelocity(entities.ChildShip8.body, { x: 3, y: 0 });
  //Matter.Body.setVelocity(entities.ChildShip1.body, { x: -4, y: 0 });

  //Matter.Body.setVelocity(entities.Ship2.body, { x: -1, y: 0 });
  //Matter.Body.setVelocity(entities.Ship3.body, { x: 1, y: 0 });
  //Matter.Body.setVelocity(entities.Ship4.body, { x: -1, y: 0 });
  //Matter.Body.setVelocity(entities.Ship5.body, { x: 1, y: 0 });
  
  
  
  ////////////////////////////////////////////////////////////////////////////


  /*************TOUCH CONTROLS WITH ARROW KEY ****************/
  
  if (events.length) {

    //Sleeping.set(entities.Player1.body, false);

    for (let i = 0; i < events.length; i++) {

      if (events[i].type === "move-up") {
        Matter.Body.setVelocity(entities.Player.body, { x: 0, y: -4 });
      }

      if (events[i].type === "move-down") {
        Matter.Body.setVelocity(entities.Player.body, { x: 0, y: 4 });
      }

      if (events[i].type === "move-left") {
        Matter.Body.setVelocity(entities.Player.body, { x: -4, y: 0 });
      }

      if (events[i].type === "move-right") {
        Matter.Body.setVelocity(entities.Player.body, { x: 4, y: 0 });
      }

      //entities.Player1.extraOptions.image = Images["player"];
    }
  }

  /********************************PLAYER ASTEROID COLLISION*****************************************/
  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

      if (objALabel === "Player" && objBLabel === "Asteroid") {
        //Matter.Body.scale(objB, 1.01, 1.01);
        //Matter.Body.setVelocity(entities.Enemy.body, { x: 3, y: 0 });

        Matter.Body.setVelocity(objB, {
          x: 0,
          y: -6
        });
        //Sleeping.set(objA, true);
  
        //Sleeping.set(objB, true);
      
        //Sleeping.set(objA, true);
  
        //Sleeping.set(objB, true);
      }
  });

  /******************************UPDATE SCORE*****************************************************************/

  Sleeping.set(entities.AlienMotherShip.body, false);

  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

      if (objALabel === "Player" && objBLabel === "AlienMotherShip") {

        Matter.Body.setVelocity(objB, {
          x: 3,
          y: 0
        });

        if (!objB.isSleeping) {
          dispatch({ type: "updateScore" });
        }
        Sleeping.set(objB, true);
      }
  });

  /*****************************************GAME OVER COLLISION****************************************************/
  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

      if  
      (
        objALabel === "Player" && objBLabel === "ChildShip1" ||
        objALabel === "Player" && objBLabel === "ChildShip2" ||  
        objALabel === "Player" && objBLabel === "ChildShip3" ||
        objALabel === "Player" && objBLabel === "ChildShip4" ||
        objALabel === "Player" && objBLabel === "ChildShip5" ||
        objALabel === "Player" && objBLabel === "ChildShip6" ||
        objALabel === "Player" && objBLabel === "ChildShip7" ||
        objALabel === "Player" && objBLabel === "ChildShip8" ||
        objALabel === "Player" && objBLabel === "ChildShip9" ||
        objALabel === "Player" && objBLabel === "ChildShip10" ||
        objALabel === "Player" && objBLabel === "ChildShip11" ||
        objALabel === "Player" && objBLabel === "ChildShip12" 
      ) 
      { 
        dispatch({ type: "gameOver" });
      }
  });

  
  /******************************CHILDSHIP 1 COLLISION WITH CHILDSHIP 2*******************************************/
  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

      if (objALabel === "ChildShip1" && objBLabel === "ChildShip2") {
        //Matter.Body.scale(objB, 1.01, 1.01);
        //Matter.Body.setVelocity(entities.Enemy.body, { x: 3, y: 0 });

        Matter.Body.setVelocity(objB, { x: -4, y: 0 });
      }
  });

  /*************TOUCH CONTROLS DRAGGING IN THE SCREEN ****************/
  
  /*
  let x = entities.Asteroid.body.position.x;
  let y = entities.Asteroid.body.position.y;
  touches
      .filter((t) => t.type === "move")
      .forEach((t) => {
          x += t.delta.pageX;
          y += t.delta.pageY;
          Matter.Body.setPosition(entities.Asteroid.body, {
              x: x,
              y: y,
      });
    });
  */

  /*************TOUCH CONTROLS WITH SCREEN TAP ****************/

  /*
  touches
     .filter((t) => t.type === "press")
     .forEach((t) => {
         Matter.Body.setPosition(entities.Player1.body, {
          x: generatedXVal,
          y: 40
         });
         Sleeping.set(entities.Player1.body, false);
     });
  */  
  
  
  //Sleeping.set(entities.Square.body, false);
  //Matter.Events.on(engine, "collisionStart", (event) => {
    //var pairs = event.pairs;
    //let velY = entities.Square.body.velocity;
    //var objA = pairs[0].bodyA;
    //var objB = pairs[0].bodyB;
    //var objALabel = pairs[0].bodyA.label;
    //var objBLabel = pairs[0].bodyB.label;
    //if (objALabel === "Asteroid" && objBLabel === "Player") {
      //Matter.Body.scale(objB, 1.01, 1.01);

      //Matter.Body.setVelocity(objA, { x: 3.0, y: -1.0 });

      //Matter.Body.setPosition(entities.Asteroid.body, { 
        //x: 180,
        //y: 40
      //});
      
      //Matter.Body.setPosition(entities.Square.body, {
        //x: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
        //y: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
      //});
      //if (!objA.isSleeping) {
        //dispatch({ type: "updateScore" });
      //}
      //Sleeping.set(objA, true);

      //Sleeping.set(objB, true);
    //}
    //if (objALabel === "Player" && objBLabel === "Boundary") {
      //entities.RedSquare.extraOptions.image = Images.sadPlayer;
      //dispatch({ type: "gameOver" });
    //}

    
  //});
  

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;

