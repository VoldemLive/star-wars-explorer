import { Link, useNavigate } from "react-router-dom"

const PersonItem = (props) => {
  const navigator = useNavigate()
  const { name } = { ...props.item }
  const { index } = { ...props }

  const openDetailPage = () => {
    const path = `/person/${index + 1}`
    navigator(path, { state: { item: props.item } })
  }

  return (
    <div>
      <div className="relative min-w-[150px] h-[150px] m-2 p-3 rounded border border-yellow-500">
        {name}
        <div className="absolute bottom-2 right-2">
          <button
            onClick={openDetailPage}
            className="self-baseline border p-2 border-yellow-600 rounded hover:bg-yellow-500 hover:text-black"
          >
            more info
          </button>
        </div>
      </div>
    </div>
  )
}

export default PersonItem
