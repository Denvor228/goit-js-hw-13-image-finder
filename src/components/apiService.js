import axios from "axios";

const baseUrl = `https://pixabay.com/api/`;
const key = `16717162-aaf738d856ce69292bc1cd66b`;

export default function getData(searchValue, pageNumber) {
  return axios(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${key}`
  ).then(({
    data
  }) => data.hits);
}