import {useSearchParams} from "react-router-dom"

const useSearchTerm = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || ""
  const setSearchTerm = (newTerm) => setSearchParams({q:newTerm})
  
  return [searchTerm,setSearchTerm];
};
export default useSearchTerm;
