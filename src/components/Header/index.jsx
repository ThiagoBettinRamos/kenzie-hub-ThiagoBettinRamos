import { StyledHeader } from "./style"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom"
import Logo from "../../Logo.svg"

export function Header({ haveBackButton, haveCloseButton }){
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("@thiaguinmito/kenziehub/userId")
        setTimeout(() => {
            navigate('/')
        }, 200);
    } 
   return(
   
    <StyledHeader>
        <img src={Logo} alt="logo" />
        {haveBackButton ? <Button
            large = "default"
            theme = "grey"
            size  = "default"
            onClick = {() => navigate(-1)} 
        >
            Voltar
        </Button> : ''}
        {haveCloseButton && <Button
            large = "default"
            theme = "grey"
            size  = "default"
            onClick = {handleClick} 
        >
            Sair
        </Button>}
    </StyledHeader>
   )
}