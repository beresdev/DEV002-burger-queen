import React from "react"

export const Button = ({type, clasName, onClick, children}) => {
  return (
    <ButtonComponent
      type = {type ? type: "button"}
      clasName = {clasName}
      onClick = {onClick}
    >
      {children}
    </ButtonComponent>
  )
}
