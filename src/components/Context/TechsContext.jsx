import { upload } from "@testing-library/user-event/dist/upload";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
    const {user} = useContext(UserContext)
    const [techs, setTechs] = useState(user?.techs)


    async function createTech(data){
        const AUTH_TOKEN = JSON.parse(localStorage.getItem("@thiaguinmito/kenziehub/token"));
        api.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
        try{
            const requisition = await api.post("users/techs", data)
            .then((resp) => {
                toast.success("Tecnologia criada com sucesso")
                console.log(resp)
                let newTechs = [...techs, resp.data]
                setTechs(newTechs)
            })
        }
        catch{
            toast.error("Falha ao criar tecnologia")
        }
    }

    async function deleteTech(techId){
        const AUTH_TOKEN = JSON.parse(localStorage.getItem("@thiaguinmito/kenziehub/token"));
        api.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
        try{
            const requisition = await api.delete(`users/techs/${techId}`)
		    .then(() => {
                toast.success("Tecnologia removida com sucesso")
                console.log(techs)
                let newTechs = techs.filter(tech => tech.id !== techId)
                setTechs(newTechs)
            })
        }
        catch{
            toast.error("Falha ao deletar tecnologia")
        }
    }
    return(
        <TechsContext.Provider value={{techs, createTech, deleteTech }}>
            {children}
        </TechsContext.Provider>
    )

}