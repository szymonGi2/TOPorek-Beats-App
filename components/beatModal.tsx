import React from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { Colors } from "../constants/theme";
import { Beat } from "./beatsData";
import { orderData } from "./ordersData";

interface BeatModalProps {
  beat: Beat | null;
  isVisible: boolean;
  onClose: () => void;
}

const BeatModal = ({ beat, isVisible, onClose }: BeatModalProps) => {
  const isDark = useColorScheme() === "dark";
  const themeColors = isDark ? Colors.dark : Colors.light;
  const styles = getStyles(themeColors);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeButton}
            activeOpacity={0.7}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>

          <Image source={{ uri: beat?.image }} style={styles.image} />
          <Text style={styles.title}>{beat?.title}</Text>
          <Text style={styles.beatInfo}>
            {beat?.genre} • {beat?.bpm} BPM
          </Text>
          <Text style={styles.price}>${beat?.price}</Text>

          <TouchableOpacity
            style={styles.buyButton}
            activeOpacity={0.8}
            onPress={addToCart}
          >
            <Text style={styles.buyBeatText}>Buy now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.whishlistButton}
            activeOpacity={0.8}
            onPress={addToCart}
          >
            <Text style={styles.whishlistText}>Add to whishlist</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  function addToCart() {
    if (beat) {
      const alreadyInCart = orderData.some((item) => item.id === beat.id);

      if (alreadyInCart) {
        alert("The beat is already in whishlist!");
        onClose();
      } else {
        orderData.push(beat);
        onClose();
        alert("Beat has been added to the whishlist.");
        console.log(orderData);
      }
    }
  }
};

type ThemeColors = typeof Colors.light;

const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.45)",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },

    modalContent: {
      width: "100%",
      maxWidth: 420,
      backgroundColor: themeColors.background,
      borderRadius: 28,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.18,
      shadowRadius: 24,
      elevation: 18,
    },

    closeButton: {
      alignSelf: "flex-end",
      paddingVertical: 6,
      paddingHorizontal: 10,
      marginBottom: 8,
    },
    closeText: {
      fontSize: 15,
      color: themeColors.icon,
      fontWeight: "600",
    },

    image: {
      width: "100%",
      height: 210,
      borderRadius: 20,
      marginBottom: 20,
      resizeMode: "cover",
      backgroundColor: themeColors.background,
    },

    title: {
      fontSize: 26,
      fontWeight: "800",
      color: themeColors.text,
      marginBottom: 8,
    },

    beatInfo: {
      fontSize: 15,
      color: themeColors.icon,
      marginBottom: 12,
    },

    price: {
      fontSize: 22,
      fontWeight: "700",
      color: themeColors.tint,
      marginBottom: 22,
    },

    buyButton: {
      backgroundColor: themeColors.tint,
      paddingVertical: 16,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
    },

    whishlistButton: {
      backgroundColor: themeColors.background,
      paddingVertical: 16,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: themeColors.icon,
      marginTop: 10,
    },

    buyBeatText: {
      color: themeColors.background,
      fontSize: 16,
      fontWeight: "700",
      letterSpacing: 0.2,
    },

    whishlistText: {
      color: themeColors.text,
      fontSize: 16,
      fontWeight: "700",
      letterSpacing: 0.2,
    },
  });

export default BeatModal;
