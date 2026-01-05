import { useSelector } from "react-redux" 
function useGetUser(){
    const user = useSelector((state)=>state.auth.user)
    return user
}

export default useGetUser