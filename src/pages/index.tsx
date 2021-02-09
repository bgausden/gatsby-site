import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import "./index.css"
// @ts-ignore
import glow_corporate_logo from "../../static/Glow Corporate Vertical.svg"
import DropZone from "../components/DropZone"
import FileInput from "../components/FileInput"

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c",
        },
      }}
      className="App"
      gap={15}
    >
      <img src={glow_corporate_logo} alt="logo" width="33%" />
      <Text variant="xxLarge" styles={boldStyle}>
        HSBC Xero Converter
      </Text>
      {/* <Text variant="large">
        For a guide on how to customize this project, check out the UI Fabric
        documentation.
      </Text>
      <Text variant="large" styles={boldStyle}>
        Essential Links
      </Text> */}
      {/* {FileInput()} */}
      <Stack gap={15}>{DropZone()}</Stack>
      {/* <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
          Stack Overflow
        </Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">
          Github
        </Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design System
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
          Icons
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">
          Typography
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">
          Theme
        </Link>
      </Stack> */}
    </Stack>
  )
}

export default App
