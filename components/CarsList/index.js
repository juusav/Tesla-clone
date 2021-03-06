import React from "react";
import { View, FlatList, Dimensions } from "react-native";

import CartItem from "../CarItem";
import styles from "./styles";
import cars from "../../data/cars";

const CartList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CartItem car={item} />}
        keyExtractor={(item) => item.id }
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CartList;
