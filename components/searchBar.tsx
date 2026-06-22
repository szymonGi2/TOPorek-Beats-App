import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "../constants/theme";

type SearchbarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ value, onChangeText }) => {
  const isDark = useColorScheme() === "dark";
  const themeColors = isDark ? Colors.dark : Colors.light;
  const styles = getStyles(themeColors);

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="What do you want to search?"
        placeholderTextColor={themeColors.icon}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity>
        <Ionicons
          name="search-outline"
          size={30}
          color={themeColors.icon}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

type ThemeColors = typeof Colors.light;

const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    searchBar: {
      width: "90%",
      borderWidth: 1,
      borderColor: themeColors.icon,
      borderRadius: 20,
      padding: 12,
      marginBottom: 20,
      marginHorizontal: "auto",
      fontSize: 16,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColors.background,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.08,
      shadowRadius: 14,
      elevation: 4,
    },

    textInput: {
      flex: 1,
      color: themeColors.text,
      fontSize: 16,
    },

    searchIcon: {
      marginLeft: 10,
    },
  });

export default Searchbar;
