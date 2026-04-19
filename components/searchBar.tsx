import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

type SearchbarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="What do you want to search?"
        placeholderTextColor="black"
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity>
        <Ionicons
          name="search-outline"
          size={30}
          color="black"
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: "auto",
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  textInput: {
    flex: 1,
    color: "black",
    fontSize: 16,
  },

  searchIcon: {
    marginLeft: 10,
  },
});

export default Searchbar;
