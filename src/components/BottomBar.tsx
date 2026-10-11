import React from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";

const BottomBar = () => {
  const tabs = [
    { id: "home", icon: "https://img.icons8.com/ios/100/000000/home--v1.png" },
    { id: "search", icon: "https://img.icons8.com/ios/100/000000/search--v1.png" },
    { id: "reels", icon: "https://img.icons8.com/ios-glyphs/90/000000/clapperboard.png" },
    { id: "shop", icon: "https://img.icons8.com/ios/100/000000/shopping-bag--v1.png" },
    { id: "profile", icon: "https://img.icons8.com/ios-filled/100/000000/user-male-circle.png" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Pressable style={styles.tabButton}>
            <Image source={{ uri: item.icon }} style={styles.tabIcon} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  listContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  tabButton: {
    padding: 8,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});