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
import { SafeAreaView } from "react-native-safe-area-context";

import { orderData } from "@/components/ordersData";
import { Colors } from "@/constants/theme";
import { useIsFocused } from "@react-navigation/native";

const Order = () => {
  const isFocused = useIsFocused();
  const isDark = useColorScheme() === "dark";
  const themeColors = isDark ? Colors.dark : Colors.light;
  const styles = getStyles(themeColors);
  const [localOrders, setLocalOrders] = useState([...orderData]);

  useEffect(() => {
    if (isFocused) {
      setLocalOrders([...orderData]);
    }
  }, [isFocused]);

  const totalPrice = localOrders.reduce(
    (total, beat) => total + (beat.price || 0),
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Save Your Beats</Text>
      <View style={styles.content}>
        <Text style={styles.subHeader}>
          These are chosen beats you want to buy:{" "}
        </Text>
        <FlatList
          style={{ width: "100%", marginHorizontal: -20 }}
          data={localOrders}
          renderItem={({ item }) => (
            <TouchableOpacity>
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
        <Text style={styles.estimatedPrice}>
          Estimated price: ${totalPrice}
        </Text>
      </View>
    </SafeAreaView>
  );
};

type ThemeColors = typeof Colors.light;

const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.background,
    },

    header: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      color: themeColors.text,
      paddingHorizontal: 20,
    },

    content: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 20,
    },

    subHeader: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10,
      color: themeColors.icon,
    },

    itemContainer: {
      paddingVertical: 14,
      paddingHorizontal: 18,
      borderWidth: 1,
      borderColor: themeColors.icon,
      backgroundColor: themeColors.background,
      marginVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 18,
      width: "100%",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
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
    estimatedPrice: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      color: themeColors.text,
    },
  });

export default Order;
