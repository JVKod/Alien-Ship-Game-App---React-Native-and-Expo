import { StatusBar } from "expo-status-bar";
import {TouchableOpacity, StyleSheet, Text, View, Alert, Image} from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import React, { useEffect, useState } from "react";
import Physics from "./Physics";
import Images from "./Images";
import Constants from "./Constants";

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={Images.wall}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        style={styles.gameContainer}

        running={running}

        onEvent={(e) => {
          if (e.type === "gameOver") {
            setRunning(false);
          }
          if (e.type === "updateScore") {
            setScore(score + 1);

          }
        }}
        
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          position: 'absolute',
          right: 20,
          bottom: 20,
          backgroundColor: 'white',
          padding: 10,
        }}
      >
         {score}
      </Text>  

      {!running ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              padding: 15,
            }}
            onPress={() => {
              setScore(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 25, textAlign: 'center' }}>
              ALIEN SHIP KILLED YOU!!!
            </Text>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 25, textAlign: 'center' }}>
              GAME OVER
            </Text>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 25, textAlign: 'center' }}>
              RESTART GAME
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.controlRow}>

        <TouchableOpacity
          onPress={() => {
            gameEngine.dispatch({ type: "move-up" });
          }}
        >
          <View style={styles.controlUp}>
            <Text>Up</Text>
          </View>
        </TouchableOpacity>

      </View>
      
      <View style={styles.controlRow2}>

        <TouchableOpacity
          onPress={() => {
            gameEngine.dispatch({ type: "move-left" });
          }}
        >
          <View style={styles.controlLeft}>
            <Text>Left</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            gameEngine.dispatch({ type: "move-down" });
          }}
        >
          <View style={styles.controlDown}>
            <Text>Down</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            gameEngine.dispatch({ type: "move-right" });
          }}
        >
          <View style={styles.controlRight}>
            <Text>Right</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: "column",
  },
  controlRow: {
    height: 100,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: -25
  },
  controlRow2: {
    flexDirection: "row",
    marginBottom: 20,
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderColor: "white",
    borderWidth: 1,
  },
  centerText: {
    textAlign: "center",
    color: "white",
    lineHeight: 100,
  },
  watermark: {
    textAlign: "center",
    color: "yellow",
    fontSize: 15,
    paddingBottom: 10,
  },
  controlUp: {
    backgroundColor: "gray",
    padding: 25,
    marginLeft: 5,
    marginTop: 30,
  },
  controlLeft: {
    backgroundColor: "gray",
    padding: 25,
    marginRight: 5,
    marginTop: 30
  },
  controlRight: {
    backgroundColor: "gray",
    padding: 25,
    marginLeft: 5,
    marginTop: 30
  },
  controlDown: {
    backgroundColor: "gray",
    padding: 25,
    marginLeft: 5,
    marginTop: 30,
    marginBottom: -55
  },
  
});

