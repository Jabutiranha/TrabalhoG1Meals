import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryMeals } from "../screen/detail";


const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={CategoryMeals} />
            <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
    )
}

export default AppNavigator