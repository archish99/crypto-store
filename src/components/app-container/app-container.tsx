import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

const AppContainer: React.FC = (props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
