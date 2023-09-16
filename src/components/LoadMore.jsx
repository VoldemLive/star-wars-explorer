import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const LoadMore = (props) => {
  const loadingState = useSelector((state) => state.loadingState.value)
  const [isLoading, setLoading] = useState(false)
  const loadMoreContent = () => {
    props.LoadMoreEvent()
  }

  useEffect(() => {
    setLoading(loadingState)
  }, [loadingState])

  return (
    <div className="flex flex-col m-2 p-3 pl-10 items-start justify-center min-w-[150px] h-[150px]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <button onClick={loadMoreContent}>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="3em"
              width="3em"
            >
              <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default LoadMore
