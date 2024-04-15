import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return <div>SearchPage {city}</div>;
};

export default SearchPage;
