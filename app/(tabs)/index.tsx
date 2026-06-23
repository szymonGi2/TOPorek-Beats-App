import BeatModal from "@/components/beatModal";
import { Beat } from "@/components/beatsData";
import RecentBeatsList from "@/components/recentBeatsList";
// import RecentNewsSection from "@/components/recentNewsSection";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const isDark = useColorScheme() === "dark";
  const themeColors = isDark ? Colors.dark : Colors.light;
  const styles = getStyles(themeColors);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
      >
        <RecentBeatsList onPress={(beat) => setSelectedBeat(beat)} />
        {/* <RecentNewsSection /> */}
      </ScrollView>
      <BeatModal
        beat={selectedBeat}
        isVisible={selectedBeat !== null}
        onClose={() => setSelectedBeat(null)}
      />
    </SafeAreaView>
  );
};

type ThemeColors = typeof Colors.light;

const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: themeColors.background,
    },
    scroll: {
      width: "100%",
    },
    scrollContent: {
      alignItems: "center",
      paddingBottom: 20,
      backgroundColor: themeColors.background,
    },
  });

export default App;
