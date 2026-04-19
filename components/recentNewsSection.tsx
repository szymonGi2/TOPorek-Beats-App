import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { News } from "./newsData";

const RecentNewsSection = () => {

  const [news, setNews] = useState<News[]>([]);

  const JSON_URL = "https://gist.githubusercontent.com/szymonGi2/eb7702eee9c673799703ac7243eeafb0/raw/31d703388c3ae8e7e6346dde4babf5bcf8cd0bef/gistfile1.txt"

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((data) => {
        setNews(data)
      })
      .catch((error) => {
        console.log("Błąd pobierania newsów: " + error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>See what I'm cooking right now:</Text>
      <FlatList
        data={news.slice(0, 2)}
        renderItem={({ item }) => (
          <View style={styles.articleItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.imageStyle} />
            <Text style={styles.header}>
              {item.article}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
