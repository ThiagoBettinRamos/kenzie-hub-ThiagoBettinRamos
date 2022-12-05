import { StyledForm } from "./style"
import { Input } from "../Input"
import { Button } from "../Button"

export function Form( ){
    return(
        <StyledForm>
            <h2>Login</h2>
            <Input
                label       = "Email"
                name        = "email"
                type        = "text"
                placeholder = "Digite seu email"
             />
             <Input
                label       = "Senha"
                name        = "email"
                type        = "password"
                placeholder = "Digite seu email"
             />
            <Button
            theme = "pink"
            text     = "Entrar"
            size     = "long"
            large   = "long"
            />
            <span>Ainda não possui um aconta?</span>
            <Button
            theme = "grey"
            text     = "Cadastre-se"
            size     = "long"
            large   = "long"
            />
        </StyledForm>
    )
}