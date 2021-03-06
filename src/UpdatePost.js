import React, { useState } from 'react'
import uuid from 'uuid'

export default function UpdatePost(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  console.log('props', props)
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Title"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="desc"
          placeholder="Description"
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="date"
          placeholder="Date"
          onChange={(event) => {
            setDate(event.target.value)
          }}
        />
      </div>
      <button
        onClick={async () => {
          //check if fields are ok
          const body = {
            id: props.match.params.id,
            title: name,
            text: description,
            dateCreated: date,
            dateStart: date
          }

          try {
            const response = await fetch('http://localhost:3002/posts', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            })
            console.log('status', response.status)
          } catch (error) {
            console.log('err', error)
          }
        }}
      >Submit</button>
    </>
  )
}