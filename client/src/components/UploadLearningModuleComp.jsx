import React from 'react';

export default function UploadLearningModuleComp() {
  const [title, setTitle] = React.useState('');
  const [format, setFormat] = React.useState('');
  const [source, setSource] = React.useState('');
  
  async function uploadInputData(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/api/users/signupuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        format,
        source
      }),
    })
    const data = await response.json()
    console.log(data)
  }
  
  return (
    <React.Fragment>
      <div className="w-full">
        <form onSubmit={uploadInputData}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            type="text"
            placeholder="Format"
          />
          <input
            value={source}
            onChange={(e) => setSource(e.target.value)}
            type="text"
            placeholder="Source"
          />
          <input type="submit" value="Upload" />
        </form>
      </div>
    </React.Fragment>
  )
}