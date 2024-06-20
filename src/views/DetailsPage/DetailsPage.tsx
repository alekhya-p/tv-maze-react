import React, { useEffect, useState } from "react";
import { IShowDetails } from "../../types/showDetailsResults";
import { getTvShowDetails } from "../../services/tvMazeServices";
import { useParams } from "react-router-dom";

export type ShowDetailsState = {
  loading: boolean;
  showDetails: IShowDetails[];
  errorMessage: string;
};
interface Params {
 id?: number
}
const DetailsPage: React.FC = () => {
  const params: Params = useParams();
  const [details, setDetails] = useState<ShowDetailsState>({
    loading: false,
    showDetails: [] as IShowDetails[],
    errorMessage: "",
  });
  useEffect(() => {
    setDetails({ ...details, loading: true });
    if(params.id) {
      getTvShowDetails(params?.id)
      .then((res) =>
        setDetails({
          ...details,
          loading: false,
          showDetails: res.data,
        })
      )
      .catch((err) =>
        setDetails({
          ...details,
          loading: false,
          errorMessage: err.message,
        })
      );
    }
    
  }, []);
  return (
    <div className="detailsPage">
      <div className="movies-info">
        <img src="" alt="" />
        <div className="infos"></div>
      </div>
    </div>
  )
};

export default DetailsPage;
