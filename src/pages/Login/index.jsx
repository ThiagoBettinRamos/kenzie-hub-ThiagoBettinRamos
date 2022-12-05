import { Form } from "../../components/Form"
import { StyledLogin } from "./style"
import { Header } from "../../components/Header"

export function Login(){
    return(
        <StyledLogin>
            <Header/>
            <Form/>
        </StyledLogin>
    )
}
