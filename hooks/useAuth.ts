import { AuthContext } from "@/context/authContext"
import { useContext } from "react"

export const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);
    return {user, setUser};
}