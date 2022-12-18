import { StyledHome } from "./style"
import { Header } from "../../components/Header"
import { useContext, useEffect, useState} from "react"
import { treatModule } from "./treatModule"
import { StyledList } from "./style"
import { Button } from "../../components/Button"
import { UserContext } from "../../components/Context/UserContext"
import { Navigate } from "react-router-dom"
import { TechsContext } from "../../components/Context/TechsContext"
import { Card } from "../../components/Card"
import { Modal } from "../../components/Modal"

export function Home(){
    const { user } = useContext(UserContext)
    const { techs } = useContext(TechsContext)
    const [module, setModule] = useState()
    const [ modal , setModal] = useState(false)

    useEffect(() => {
        if(user) {
            setModule(treatModule(user.course_module))
        }
    },[])

    return(
        <>
        {
            user ?
            (
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
                            Tecnologias
                        </h2>
                    
                        <Button
                            large = "default"
                            theme = "grey"
                            size  = "default"
                            onClick={() => setModal(true)}
                        >
                            +
                        </Button>
                    </div>
                    {
                        techs.length > 0  ?
                        (
                            <StyledList>
                                <li>

                                </li>
                                {
                                    techs.map(tech => (
                                        <Card 
                                            key={`tech_${tech.id}`}
                                            title={tech.title}
                                            status={tech.status}
                                            id={tech.id}
                                        />
                                    ))
                                }
                            </StyledList>
                        )
                        :
                        <h3>
                            Você ainda não tem tecnologias registradas.
                        </h3>
                    }
                </div>
                { modal && <Modal setModal={setModal} />}
            </StyledHome>
            )
            :
            <Navigate to="/" />
            }
        </>
    )
}