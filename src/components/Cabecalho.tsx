import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

import { Feather } from "@expo/vector-icons";

import { useUser } from "../contexts/User";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import avatar from "../assets/avatar/image.jpg";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { user, changeImage } = useUser();

  const { image, name } = user;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{title ? title : "Olá,"}</Text>
        <Text style={styles.userName}>{subtitle ? subtitle : name}</Text>
      </View>
      <TouchableHighlight onPress={() => {}} style={styles.image}>
        <Image source={avatar} style={styles.image} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  imageUpload: {
    color: colors.white,
    zIndex: 11,
  },
  imageUploadContainer: {
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  image: {
    borderRadius: 40,
    height: 70,
    width: 70,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
