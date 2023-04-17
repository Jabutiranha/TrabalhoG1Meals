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

            <Sta            <Stack.Screen name="DetailsMeals" component={DetailsMeals} />ck.Screen name="Meals" component={Meals} />
        </Stack.Navigator>
    )
}

export default AppNavigator