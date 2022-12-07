import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .min(8, "A senha precisa ter no minimo 8 caracteres")
        .matches(/(?=.*?[a-z])/i, "Precisa ter pelo menos 1 letra")
        .matches(/(?=.*?[0-9])/, "Precisa ter pelo menos 1 numero")
        .matches(/(?=.*?[@$!%*#?&])/, "Precisa ter pelo menos 1 caractere especial"),
    confirm: yup.string().required("Confirme sua senha").oneOf([yup.ref("password")], "A senha não é compativél"),
    bio: yup.string().required("Bio obrigatório"),
    contact: yup.string().required("Telefone obrigatório"),
    course_module: yup.string().required("Modulo obrigatório")
})