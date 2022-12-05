import { StyledButton } from "./style"


export function Button( { theme, text, size, large} ){
    return(
        <StyledButton
        theme = {theme}
        size     = {size}
        large   = {large}
        >
            {text}
        </StyledButton>
    )
}