import { StyledCadastro } from "./style"
import { Header } from "../../components/Header"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { registerSchema } from "./registerSchema"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { UserContext } from "../../components/Context/UserContext"
import { StyleSheetManager } from "styled-components"


export function Cadastro(){
        const { register, handleSubmit, formState : {errors} } = useForm({
            resolver : yupResolver( registerSchema )
        }) 


       const {registerUser} = useContext(UserContext)
    return(
        <StyledCadastro>
            <Header
             haveBackButton
             />
            <Form
                onSubmit = {handleSubmit(registerUser)}
                noValidate
            >
                <h2>Crie sua conta</h2>
                <Input
                    label       = "Name"
                    name        = "name"
                    type        = "text"
                    placeholder = "Digite aqui seu nome"
                    functionInput = {register("name")}
                    error = {errors.name?.message}
                />
                <Input
                    label       = "Email"
                    name        = "email"
                    type        = "email"
                    placeholder = "Digite aqui seu email"
                    functionInput = {register("email")}
                    error = {errors.email?.message}
                />
                <Input
                    label       = "Senha"
                    name        = "senha"
                    type        = "password"
                    placeholder = "Digite aqui sua senha"
                    functionInput = {register("password")}
                    error = {errors.password?.message}
                />
                <Input
                    label       = "Confirmar Senha"
                    name        = "confirm"
                    type        = "password"
                    placeholder = "Confirme sua senha"
                    functionInput = {register("confirm")}
                    error = {errors.confirm?.message}
                />
                <Input
                    label       = "Bio"
                    name        = "bio"
                    type        = "text"
                    placeholder = "Fale sobre você"
                    functionInput = {register("bio")}
                    error = {errors.bio?.message}
                />
                <Input
                    label       = "Contato"
                    name        = "contact"
                    type        = "text"
                    placeholder = "Opção de contato"
                    functionInput = {register("contact")}
                    error = {errors.contact?.message}
                />
                <Input
                    label       = "Modulo"
                    name        = "module"
                    type        = "select"
                    functionInput = {register("course_module")}
                    options = {
                        [
                            {value : "" , text : "Qual é seu modulo?"},
                            {value : "1" , text : "Primeiro modulo"},
                            {value : "2" , text : "Segundo modulo"},
                            {value : "3" , text : "Terceiro modulo"},
                            {value : "4" , text : "Quarto modulo"},
                            {value : "5" , text : "Quinto modulo"},
                            {value : "6" , text : "Sexto modulo"},

                        ]
                    }
                    error = {errors.module?.message}
                />
                <Button
                theme = "pink"
                size     = "long"
                large   = "long"
                >
                    Cadastrar
                </Button>
                </Form>
            
        </StyledCadastro>
    )
}


