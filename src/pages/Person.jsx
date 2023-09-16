import { useState, useEffect } from "react"
import { useGetPersonByIdQuery } from "../store/slices/APIslice"
import { useParams, useLocation } from "react-router-dom"
import PersonImage from "../components/PersonImage"
import PersonInfo from "../components/PersonInfo"
const Person = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const { data, isLoading } = useGetPersonByIdQuery(state.item)
  const [item, setItem] = useState({})

  useEffect(() => {
    if (!isLoading) setItem(data)
  }, [data])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="p-10 flex flex-wrap flex-row">
      <div>
        <PersonImage item={item} />
      </div>
      <div className="p-3">
        <PersonInfo item={item} />
      </div>
    </div>
  )
}

export default Person
