import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState() 

    function login(data){
        const requisition = api.post("sessions", data)

            .then((resp) => {
                localStorage.setItem("@thiaguinmito/kenziehub/userId", JSON.stringify(resp.data.user.id))   
                localStorage.setItem("@thiaguinmito/kenziehub/token", JSON.stringify(resp.data.token))
                setUser(resp.data.user)
                navigate("/Home")
            })
        
            toast.promise(
                requisition,
                {
                  pending: 'Analisando dados...',
                  success: 'Login feito com sucesso!👌',
                  error: 'Iiih, deu ruim 🤯'
                }
            )
    } 
    function registerUser(data){
        delete data.confirm
        const requisition = api.post("users", data)
            .then(() => navigate("/"))

        toast.promise(
                requisition,
                {
                  pending: 'Analisando dados...',
                  success: 'Conta criada com sucesso!👌',
                  error: 'Iiih, deu ruim 🤯'
                }
            )
    }

    useEffect(() => {
        async function autoLogin(){
            const AUTH_TOKEN = JSON.parse(localStorage.getItem("@thiaguinmito/kenziehub/token"));
            if(!AUTH_TOKEN){
                return 
            }
            api.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
            
            try{
                const requisition = await api.get("profile") 
                if(requisition.statusText === "OK"){
                    setUser(requisition.data)
                    navigate("/Home")
                } 
            }
            catch{
                localStorage.removeItem("@thiaguinmito/kenziehub/userId")   
                localStorage.removeItem("@thiaguinmito/kenziehub/token")
            }
        }
    
        autoLogin()
    }, [])

    return(
    <UserContext.Provider value={{navigate, login, registerUser, user}}>
        {children}
    </UserContext.Provider>
    )
}
