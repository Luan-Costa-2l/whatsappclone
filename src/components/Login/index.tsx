import { User } from "firebase/auth";
import { api } from "../../firebase"
import { LoginBody } from "./styles"

interface Props {
    onRecive: (userInfo: User) => void;
}

export const Login = ({ onRecive }: Props) => {
    const handleGoogleLogin = async () => {
        let result = await api.gPopup();
        if(result) {
            console.log(result);
            onRecive(result.user);
        } else {
            alert('error');
        }
    }

    return (
        <LoginBody>
            <button onClick={handleGoogleLogin}>Logar com o google</button>
        </LoginBody>
    )
}