import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/theme";
import { News } from "./newsData";

const RecentNewsSection = () => {
  const isDark = useColorScheme() === "dark";
  const themeColors = isDark ? Colors.dark : Colors.light;
  const styles = getStyles(themeColors);

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

type ThemeColors = typeof Colors.light;

const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "92%",
      margin: 20,
    },

    header: {
      fontSize: 20,
      marginVertical: 20,
      color: themeColors.text,
    },

    imageStyle: {
      height: 160,
      width: "100%",
      borderRadius: 18,
      marginBottom: 14,
      backgroundColor: themeColors.background,
    },

    articleItem: {
      width: "100%",
      backgroundColor: themeColors.background,
      padding: 16,
      borderRadius: 22,
      marginVertical: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.06,
      shadowRadius: 18,
      elevation: 6,
    },
  });

export default RecentNewsSection;
