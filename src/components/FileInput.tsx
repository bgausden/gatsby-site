import React from "react"
import "./FileInput.css"

const FileInput = () => {
  const fileInput = React.createRef<HTMLInputElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Selected file - ${fileInput.current.files[0].name}`)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    "name" in fileInput.current.files[0] ? console.log(`${fileInput.current.files[0].name}`) : console.log("Nothing changed/selected.")
  }

  return (
    <div>
      <input id="file-input" type="file" ref={fileInput} onChange={handleChange} accept=".csv,text/csv" className="hidden-input" />
    </div>
  )
}
export default FileInput