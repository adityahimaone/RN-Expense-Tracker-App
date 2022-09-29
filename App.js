import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { SelectProvider } from '@mobile-reality/react-native-select-pro';

import ManageExpense from 'screens/ManageExpense';
import RecentExpenses from 'screens/RecentExpenses';
import AllExpenses from 'screens/AllExpenses';
import { GlobalStyles } from 'constants/style';
import ButtonIcon from 'components/UI/ButtonIcon';
import store from 'store/store';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary300,
        },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary300,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent100,
        tabBarInactiveTintColor: GlobalStyles.colors.primary200,
        headerRight: ({ tintColor }) => (
          <ButtonIcon
            iconName="add"
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <SelectProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="ExpensesOverview"
              screenOptions={{
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary300,
                },
                headerTintColor: GlobalStyles.colors.primary50,
              }}
            >
              <Stack.Screen
                name="ExpensesOverview"
                component={ExpensesOverview}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ManageExpense"
                component={ManageExpense}
                options={{
                  // title: 'Manage Expense',
                  presentation: 'modal',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SelectProvider>
      </Provider>
    </>
  );
}
