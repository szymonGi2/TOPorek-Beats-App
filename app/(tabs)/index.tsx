import BeatModal from "@/components/beatModal";
import { Beat } from "@/components/beatsData";
import RecentBeatsList from "@/components/recentBeatsList";
import RecentNewsSection from "@/components/recentNewsSection";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
      >
        <RecentBeatsList onPress={(beat) => setSelectedBeat(beat)} />
        <RecentNewsSection />
      </ScrollView>
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
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
});

export default App;
