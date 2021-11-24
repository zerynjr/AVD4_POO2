import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../styles/colors";

import { BemVindo } from "../pages/PessoaNova";
import { Identidade } from "../pages/Identidade"
import { Confirmacao } from "../pages/Confirmacao";
import { SelecaoPlanta } from "../pages/SelecaoPlanta";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  const [userHelp, setUserHelp] = useState(false);

  AsyncStorage.getItem("@plantmanager:help").then((help) => {
    setUserHelp(Boolean(help));
  });

  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      {!userHelp && <stackRoutes.Screen name="PessoaNova" component={BemVindo} />}
      {!userHelp && (
        <stackRoutes.Screen
          name="Identificacao"
          component={Identidade}
        />
      )}
      {!userHelp && (
        <stackRoutes.Screen name="Confirmacao" component={Confirmacao} />
      )}

      <stackRoutes.Screen name="SelecaoPlanta" component={SelecaoPlanta} />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
