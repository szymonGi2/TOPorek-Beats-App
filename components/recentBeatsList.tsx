import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Beat } from "./beatsData";

const RecentBeatsList = ({ onPress }: { onPress: (beat: Beat) => void }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
  },

  header: {
    fontSize: 30,
    margin: 10,
  },

  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fff",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  priceText: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

export default RecentBeatsList;
