import { StyledHome } from "./style"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { treatModule } from "./treatModule"

export function Home(){

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const module = treatModule(user.course_module)

    useEffect(() => {
        const userID = JSON.parse(localStorage.getItem("@thiaguinmito/kenziehub/userId"));
        axios.get(`https://kenziehub.herokuapp.com/users/${userID}`)
            .then((resp) => setUser(resp.data))
            .catch(() => navigate("/"))

    }, [])



    return(
        <StyledHome>
            <div>
                <Header
                haveCloseButton
                />
            </div>
            <div>
                <div>
                    <h2>
                        Olá, {user.name}
                    </h2>
                    <span>
                        {module}
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <h2>
                        Que pena! Estamos em desenvolvimento :(
                    </h2>
                    <span>
                        Nossa aplicação está em desenvolvimento, em breve teremos novidades
                    </span>
                </div>
            </div>
        </StyledHome>
    )
}