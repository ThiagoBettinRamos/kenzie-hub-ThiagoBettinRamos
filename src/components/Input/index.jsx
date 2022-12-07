import { StyledInput } from "./style";

export function Input({ label, name, type, placeholder, value, functionInput, options, error}) {
    return (
      <StyledInput>
        <label htmlFor = {name}>{label}</label>
        {
          type === "select" ? 
          (
            <div className="select">
              <select id={name} {...functionInput}>
                {options.map((op, i) => <option key = {i} value = {op.value}> {op.text} </option>)}
              </select>
            </div>
          ) 
          : ( <input value = {value} id = {name} type = {type} placeholder = {placeholder} {...functionInput}/>)
        }
       {error && <span>{error}</span>}
      </StyledInput>
    )
  }
  