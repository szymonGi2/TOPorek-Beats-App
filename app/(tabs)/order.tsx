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

import { orderData } from "@/components/ordersData";
import { useIsFocused } from "@react-navigation/native";

const Order = () => {
  const isFocused = useIsFocused();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
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
    color: "#555",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  estimatedPrice: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
});

export default Order;
