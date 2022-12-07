import { Form } from "../../components/Form"
import { StyledLogin } from "./style"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { loginSchama } from "./loginSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import axios from "axios"

export function Login(){
    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver : yupResolver (loginSchama)
    })
    const onSubmit = (data) => {
        const requisition = axios.post("https://kenziehub.herokuapp.com/sessions", data)
        .then((resp) => localStorage.setItem("@thiaguinmito/kenziehub/userId", JSON.stringify(resp.data.user.id)))
        .then(() => navigate("/Home"))

        toast.promise(
            requisition,
            {
              pending: 'Analisando dados...',
              success: 'Login feito com sucesso!👌',
              error: 'Iiih, deu ruim 🤯'
            }
        )
    }
    
    const navigate = useNavigate()

    return(
        <StyledLogin>
            <Header
                size = "low"
            />
            <Form 
                onSubmit={handleSubmit(onSubmit)}
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
                <Button
                theme  = "default"
                size      = "long"
                large    = "long"
                onClick = {() => navigate("/Cadastro")} 
                type      = "button"
                >
                    Cadastre-se
                </Button>
            </Form>
        </StyledLogin>
    )
}
