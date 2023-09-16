import React from "react"

const PersonInfo = (props) => {
  const item = props.item
  return (
    <div>
      <h1 className="text-4xl mb-3">{item.name}</h1>
      <div>
        <span className="mb-3 underline">
          Birth: <span className="font-semibold">{item.birth_year}</span>
        </span>
      </div>
      <div className="mt-4">
        <p>
          <span>mass: </span>
          <span className="font-bold">{item.mass} kg</span>
        </p>
        <p>
          <span>height: </span>
          <span className="font-bold">{item.height} cm</span>
        </p>
        <p>
          <span>skin color: </span>
          <span className="font-bold">{item.skin_color}</span>
        </p>
        <p>
          <span>eye color: </span>
          <span className="font-bold">{item.eye_color}</span>
        </p>
        <p>
          <span>gender: </span>
          <span className="font-bold">{item.gender}</span>
        </p>
        <p>
          <span>hair color: </span>
          <span className="font-bold">{item.hair_color}</span>
        </p>
      </div>
    </div>
  )
}

export default PersonInfo
