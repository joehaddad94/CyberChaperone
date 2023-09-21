import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles";
import NestedHeader from "../Components/NestedHeader";

export default function CreateUserScreen () {
    return(
        <SafeAreaView style = {globalStyles.container}>
            <NestedHeader
                headerTitle = "Create User"
                backgroundColor= "#00B69B"
                showButton= {false}
            />
        </SafeAreaView>
    )
}