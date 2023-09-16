import { useGetNextPesonsQuery } from "../store/slices/APIslice"
import PersonItem from "../components/PersonItem"
import LoadMore from "../components/LoadMore"
import { useState, useEffect } from "react"
import { loding, loaded } from "../store/slices/stateSlice"
import { useDispatch } from "react-redux"

const Home = () => {
  const [heroesList, setHeroesList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useGetNextPesonsQuery(currentPage)
  const dispatcher = useDispatch()

  useEffect(() => {
    if (!isLoading) {
      setHeroesList([...heroesList, ...data.results])
      dispatcher(loaded())
    } else {
      dispatcher(loding())
    }
  }, [data])

  const LoadMoreData = () => {
    dispatcher(loding())
    let curPage = currentPage
    setCurrentPage((curPage += 1))
  }

  return (
    <div>
      <h1 className="text-6xl font-bold">Star Wars</h1>
      <h2 className="text-2xl underline"> persons:</h2>
      <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 w-full">
        {isLoading ? (
          <div>
            <h1 className="text-2xl"> Loading ...</h1>
          </div>
        ) : (
          heroesList.map((item, index) => {
            return <PersonItem key={index} index={index} item={item} />
          })
        )}
        {!isLoading && data.next ? (
          <LoadMore isLoading={isLoading} LoadMoreEvent={LoadMoreData} />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Home
