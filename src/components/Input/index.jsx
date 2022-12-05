import { StyledInput } from "./style";

export function Input({ label, name, type, placeholder, value }) {
    return (
      <StyledInput>
        <label htmlFor = {name}>{label}</label>
        <input value    = {value} id = {name} type = {type} placeholder = {placeholder}  required = "true" />
      </StyledInput>
    )
  }
  