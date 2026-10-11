import React from "react";
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";

const POSTS_DATA = [
  { id: "1", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500" },
  { id: "2", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500" },
  { id: "3", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500" },
  { id: "4", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" },
  { id: "5", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500" },
  { id: "6", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500" },
  { id: "7", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500" },
  { id: "8", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500" },
  { id: "9", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500" },
  { id: "10", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500" },
  { id: "11", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500" },
  { id: "12", image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500" },
];

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  const handleAlertPress = () => {
    Alert.alert("Alert button pressed");
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <FlatList
        data={POSTS_DATA}
        numColumns={3}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Header />}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.gridImage} />
        )}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <Pressable style={styles.alertButton} onPress={handleAlertPress}>
              <Text style={styles.alertButtonText}>Alert Button</Text>
            </Pressable>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
      <BottomBar />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  gridImage: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  footerContainer: {
    paddingVertical: 20,
  },
  alertButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});