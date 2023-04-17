import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryMeals } from "../screen/category";
import { DetailsMeals } from "../screen/detail";
import { AppStackParamList } from "./interface";


const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={CategoryMeals} />
            <Stack.Screen name="Details" component={DetailsMeals} />
            <Stack.Screen name="Details" component={DetailsMeals} />
        </Stack.Navigator>
    )
}

export default AppNavigator