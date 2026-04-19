import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BeatModal from "@/components/beatModal";
import { Beat } from "@/components/beatsData";
import Searchbar from "@/components/searchBar";

const library = () => {
  const [search, setSearch] = useState("");
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);

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
        console.log("Błąd pobierania danych: " + error);
      });
  }, []);

  const filteredData = beats.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TOPorek beats library:</Text>
      <Searchbar
        value={search}
        onChangeText={(text: string) => setSearch(text)}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedBeat(item)}>
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
      <BeatModal
        beat={selectedBeat}
        isVisible={selectedBeat !== null}
        onClose={() => setSelectedBeat(null)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
  },

  header: {
    textAlign: "center",
    fontSize: 30,
  },

  searchbar: {
    marginHorizontal: "auto",
    marginVertical: 10,
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
    width: "100%",
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

export default library;
