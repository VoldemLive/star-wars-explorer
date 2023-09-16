import React, { useEffect, useState } from "react"
import unsplash from "../common/unsplash"

const PersonImage = (props) => {
  const item = props.item
  const [curImage, setCurImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    unsplash.photos
      .getRandom({
        query: `${item.name}`,
        count: 1,

        orientation: "portrait",
      })
      .then((result) => {
        setIsLoading(false)
        setCurImage(result.response[0])
      })
      .catch(() => {
        setIsLoading(false)
        console.log("something went wrong!")
      })
  }, [])

  return (
    <div>
      <div className="border rounded min-w-[290px] border-yellow-600 p-3">
        {isLoading ? (
          <div className="text-2xl">Loading ...</div>
        ) : (
          <img src={curImage?.urls?.small} alt="" />
        )}
      </div>
    </div>
  )
}

export default PersonImage
