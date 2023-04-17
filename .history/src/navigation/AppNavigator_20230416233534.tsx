import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={ListNews} />
            <Stack.Screen name="Details" component={DetailsNews} />
        </Stack.Navigator>
    )
}

export default AppNavigator