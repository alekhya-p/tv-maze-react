import axios from "axios";

export async function getAllShows() {
    return await axios.get('http://api.tvmaze.com/shows')
}
export async function getTvShowDetails(id: number) {
    return axios.get("http://api.tvmaze.com/shows/"+id);
}
export async function getSearchDetails(text: string) {
    return axios.get("http://api.tvmaze.com/search/shows?q="+text);
}