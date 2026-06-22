import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "../constants/theme";
import { Beat } from "./beatsData";

const RecentBeatsList = ({ onPress }: { onPress: (beat: Beat) => void }) => {
  const isDark = useColorScheme() === "dark";
  const themeColors = isDark ? Colors.dark : Colors.light;
  const styles = getStyles(themeColors);
  const [beats, setBeats] = useState<Beat[]>([]);

  const JSON_URL =
    "https://gist.githubusercontent.com/szymonGi2/3c606ddea6685176d9cb570b2fda4a84/raw/4d8c860040a68f183a3caa2be126744f4e505db1/gistfile1.txt";

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((data) => {
        setBeats(data);
      })
      .catch((error) => {
        console.log("Błąd pobierania danych" + error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recently uploaded beats:</Text>
      <FlatList
        data={beats.slice(0, 5)}
        // data={beatsData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.textContainer}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.priceText}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

type ThemeColors = typeof Colors.light;

const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "92%",
      paddingTop: 10,
    },

    header: {
      fontSize: 30,
      margin: 10,
      color: themeColors.text,
    },

    itemContainer: {
      paddingVertical: 14,
      paddingHorizontal: 18,
      borderWidth: 1,
      borderColor: themeColors.icon,
      backgroundColor: themeColors.background,
      marginVertical: 6,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.08,
      shadowRadius: 18,
      elevation: 5,
    },
    itemText: {
      fontSize: 16,
      fontWeight: "600",
      color: themeColors.text,
    },
    itemImage: {
      width: 54,
      height: 54,
      borderRadius: 16,
    },
    textContainer: {
      flex: 1,
      marginLeft: 14,
    },
    priceText: {
      fontSize: 14,
      color: themeColors.tint,
      marginTop: 4,
    },
  });

export default RecentBeatsList;
