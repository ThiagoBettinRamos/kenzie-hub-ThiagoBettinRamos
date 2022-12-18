import { Form } from "../../components/Form"
import { StyledLogin } from "./style"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button, PseudoButton } from "../../components/Button"
import { Link } from "react-router-dom"
import { loginSchama } from "./loginSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../components/Context/UserContext"


export function Login(){
    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver : yupResolver (loginSchama)
    })
    
    const { login } = useContext(UserContext);

    return(
        <StyledLogin>
            <Header
                size = "low"
            />
            <Form 
                onSubmit={handleSubmit(login)}
                noValidate
            >
             <h2>Login</h2>
                <Input
                    label       = "Email"
                    name        = "email"
                    type        = "text"
                    placeholder = "Digite seu email"
                    functionInput = {register("email")}
                    error = {errors.email?.message}
                />
                <Input
                    label       = "Senha"
                    name        = "email"
                    type        = "password"
                    placeholder = "Digite seu email"
                    functionInput = {register("password")}
                    error = {errors.password?.message}
                />
                <Button
                theme = "pink"
                size     = "long"
                large   = "long"
                type      = "submit"
                >
                    Entrar 
                </Button>
                <span>Ainda não possui um aconta?</span>
                <Link to="/Cadastro">
                    <PseudoButton
                    theme  = "default"
                    size      = "long"
                    large    = "long"
                    >
                    Cadastre-se
                    </PseudoButton>
                </Link> 
                
            </Form>
        </StyledLogin>
    )
}
