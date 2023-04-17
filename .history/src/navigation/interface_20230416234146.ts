import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
    List: undefined,
    Details: DetailsNewsScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
