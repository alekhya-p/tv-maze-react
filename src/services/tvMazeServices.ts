import axios from "axios";

export async function getAllShows() {
    return await axios.get('http://api.tvmaze.com/shows')
}