import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryMeals } from "../screen/category";
import { DetailsMeals } from "../screen/detail";
import { AppStackParamList } from "./interface";
import Meals from "../screen/meals/Meals";


const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="Category" component={CategoryMeals} />
            <Stack.Screen name="DetailsMeals" component={DetailsMeals} />
            <Stack.Screen name="Details" component={Meals} />
        </Stack.Navigator>
    )
}

export default AppNavigator