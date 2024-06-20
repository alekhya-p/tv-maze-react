import React, { useEffect, useState } from 'react'
import { IShowDetails } from '../../types/showDetailsResults'
import { getTvShowDetails } from '../../services/tvMazeServices'

export type ShowDetailsState = {
    loading: boolean,
    showDetails: IShowDetails[],
    errorMessage: string
}
export type id = number;
const MovieDetails = () => {
    const [details, setDetails] = useState<ShowDetailsState>({
        loading: false,
        showDetails: [] as IShowDetails[],
        errorMessage: ''
    })
    const [id, setId] = useState<id>()
    useEffect(() => {
        setDetails({...details, loading: true})
        getTvShowDetails(id).then((res) => setDetails({
            ...details, loading: false, showDetails: res.data
        })).catch((err) => setDetails({
            ...details, loading: false, errorMessage: err.message
        }))
    },[id])
  return (
    <div>
      
    </div>
  )
}

export default MovieDetails
