import React from "react"
import { csvOnload } from "../utilities/csv-functions"
import "./DropZone.css"
import FileInput from "./FileInput"

let selectedFile = ""

const dragOver = e => {
  e.preventDefault()
}

const dragEnter = e => {
  e.preventDefault()
}

const dragLeave = e => {
  e.preventDefault()
}

const fileDrop = (e:React.DragEvent) => {
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  const reader = new FileReader()
  if (file) {
    reader.onload = csvOnload(reader);
    reader.readAsText(file);
  }
}

const onClick = (e:React.FormEvent<HTMLDivElement>) => {
  document.getElementById("file-input").click()
}

const DropZone = () => {
  return (
    <div className="container">
      {FileInput()}
      <div
        className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={onClick}
      >
        <div className="drop-message">
          <div className="upload-icon" />
          Drag & Drop files here or click to upload
        </div>
      </div>
    </div>
  )
}
export default DropZone
