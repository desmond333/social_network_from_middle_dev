import React from "react"
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox"
import { PaletteTree } from "./palette"
import LoginForm from "@/e-features/AuthByUsername/ui/LoginForm/LoginForm"

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/LoginForm">
        <LoginForm onSuccess={() => console.log("222")} />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews