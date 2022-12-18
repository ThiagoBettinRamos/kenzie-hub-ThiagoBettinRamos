import { StyledModal } from "./style";
import { StyledInput } from "../Input/style";
import { Button } from "../Button";
import { useContext } from "react";
import { TechsContext } from "../Context/TechsContext";
import { Form } from "../Form";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

export function Modal({setModal}){

    const { createTech } = useContext(TechsContext)
    const { register, handleSubmit } = useForm()
    
    function onSubmitFunction(data){
        setModal(false)
        createTech(data)
    }

    return(
        <StyledModal>
            <div>
                <div>
                    <h2>Cadastrar Tecnologia</h2>
                    <Button
                        onClick={() => setModal(false)}
                        large = "default"
                        theme = "default"
                        size  = "default" 
                        type  = "submit"
                    >
                        X
                    </Button>
                </div>
                <Form onSubmit={handleSubmit(createTech)}>
                    <Input
                        label       = "Contato"
                        name        = "contact"
                        type        = "text"
                        placeholder = "Opção de contato"
                        functionInput = {register("title")}
                    />
                    <Input
                        label       = "Modulo"
                        name        = "module"
                        type        = "select"
                        functionInput = {register("status")}
                        options = {
                            [
                                {value : "" , text : "Qual é o status"},
                                {value : "Iniciante" , text : "Iniciante"},
                                {value : "Intermediário" , text : "Intermediário"},
                                {value : "Avançado" , text : "Avançado"},
                            ]
                        }
                    />
                    <Button
                        theme = "pink"
                        size  = "long"
                        large = "long"
                        onSubmit = {handleSubmit(onSubmitFunction)}
                    >
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </StyledModal>

    )


}