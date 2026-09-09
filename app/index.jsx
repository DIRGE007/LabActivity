import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const index = () => {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player3, setPlayer3] = useState(0);
  const [resetCount, setResetCount] = useState(0);

  const winTarget = 10;

  const gameOver =
    player1 >= winTarget || player2 >= winTarget || player3 >= winTarget;

  let message = "No one is leading yet";

  if (player1 >= winTarget) {
    message = "Game Over! Player 1 Wins!";
  } else if (player2 >= winTarget) {
    message = "Game Over! Player 2 Wins!";
  } else if (player3 >= winTarget) {
    message = "Game Over! Player 3 Wins!";
  } else if (player1 > player2 && player1 > player3) {
    message = "Leading: Player 1";
  } else if (player2 > player1 && player2 > player3) {
    message = "Leading: Player 2";
  } else if (player3 > player1 && player3 > player2) {
    message = "Leading: Player 3";
  } else if (player1 === player2 && player1 > 0) {
    message = "Leading: Player 1 & Player 2";
  } else if (player1 === player3 && player1 > 0) {
    message = "Leading: Player 1 & Player 3";
  } else if (player2 === player3 && player2 > 0) {
    message = "Leading: Player 2 & Player 3";
  }

  const addPlayer1 = () => {
    if (!gameOver) {
      setPlayer1(player1 + 1);
    }
  };

  const addPlayer2 = () => {
    if (!gameOver) {
      setPlayer2(player2 + 1);
    }
  };

  const addPlayer3 = () => {
    if (!gameOver) {
      setPlayer3(player3 + 1);
    }
  };

  const resetAll = () => {
    setPlayer1(0);
    setPlayer2(0);
    setPlayer3(0);
    setResetCount(resetCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score Tracker</Text>

      <Text style={styles.target}>Win Target: {winTarget}</Text>

      <Text style={styles.message}>{message}</Text>

      <Text style={styles.player}>Player 1: {player1}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={addPlayer1}
        disabled={gameOver}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.player}>Player 2: {player2}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={addPlayer2}
        disabled={gameOver}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.player}>Player 3: {player3}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={addPlayer3}
        disabled={gameOver}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reset} onPress={resetAll}>
        <Text style={styles.resetText}>RESET ALL</Text>
      </TouchableOpacity>

      <Text style={styles.resetCount}>Game Reset: {resetCount} times</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 8,
  },

  target: {
    fontSize: 17,
    color: "#666",
    marginBottom: 15,
  },

  message: {
    backgroundColor: "#d32f2f",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 25,
    textAlign: "center",
  },

  player: {
    width: "90%",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 10,
    textAlign: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  button: {
    width: 55,
    height: 45,
    backgroundColor: "#d32f2f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  reset: {
    width: "90%",
    backgroundColor: "#d32f2f",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  resetText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  resetCount: {
    fontSize: 15,
    color: "#777",
    marginTop: 18,
  },
});
