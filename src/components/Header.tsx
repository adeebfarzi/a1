import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable style={styles.iconButton}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-glyphs/60/000000/chevron-left.png" }}
            style={styles.navIcon}
          />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerHandle}>ootd_everyday</Text>
        </View>
        <Pressable style={styles.iconButton}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-glyphs/60/000000/plus-math.png" }}
            style={styles.navIcon}
          />
        </Pressable>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.avatarBorder}>
          <Image
            source={{ uri: "https://e7.pngegg.com/pngimages/659/813/png-clipart-old-german-shepherd-dog-dog-training-obedience-training-police-dog-ootd-television-logo.png" }}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>53</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Members</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>Admins</Text>
        </View>
      </View>
      <View style={styles.bioSection}>
        <Text style={styles.groupName}>OOTD Everyday</Text>
        <Text style={styles.bioText}>Fit check! 👕</Text>
        <Text style={styles.bioText}>You know we'll hype you up.</Text>
      </View>
      <Pressable style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Member</Text>
        <Image
          source={{ uri: "https://img.icons8.com/ios-glyphs/60/000000/chevron-down.png" }}
          style={styles.chevronIcon}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  iconButton: { padding: 4 },
  navIcon: { width: 24, height: 24 },
  titleContainer: { alignItems: "center" },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#000000" },
  headerHandle: { fontSize: 12, color: "#9CA3AF", fontWeight: "500" },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  avatarBorder: {
    padding: 3,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#EC4899",
  },
  avatarImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  statItem: { flex: 1, alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "700", color: "#000000" },
  statLabel: { fontSize: 12, color: "#6B7280" },
  bioSection: { marginBottom: 16 },
  groupName: { fontSize: 14, fontWeight: "700", color: "#000000", marginBottom: 2 },
  bioText: { fontSize: 14, color: "#000000" },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  actionButtonText: { fontSize: 14, fontWeight: "600", color: "#000000", marginRight: 6 },
  chevronIcon: { width: 16, height: 16 },
});