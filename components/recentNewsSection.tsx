import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RecentNewsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>See what I'm cooking right now:</Text>
      <View style={styles.articleItem}>
        <Image
          source={require("../assets/images/partial-react-logo.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.header}>
          This crazy underground BoomBap beat is slowly coming to live!
        </Text>
      </View>
      <View style={styles.articleItem}>
        <Image
          source={require("../assets/images/partial-react-logo.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.header}>
          Do you guys like Lo-Fi? Because this chill beat is really relaxing!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    margin: 20,
  },

  header: {
    fontSize: 20,
    marginVertical: 20,
  },

  imageStyle: {
    height: 150,
    width: "100%",
  },

  articleItem: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default RecentNewsSection;
