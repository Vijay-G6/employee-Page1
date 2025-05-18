import { Heading, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useSearchTerm from "../hooks/useSearchTerm"
import EmployeeResult  from "./EmployeeResult";

const SearchResults = () => {
  //const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useSearchTerm();

  const { data: searchResults, isLoading } = useQuery(
    ["search", searchTerm],
    async () => {
      const response = await fetch(
        `http://localhost:3030/employees?q=${searchTerm}`
      );
      console.log(response)
      return response.json();
    }
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Heading size="md" pb={4}>
        {searchTerm ? "Search Results" : "All Employees"}{" "}
        {`(${searchResults.length})`}
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {searchResults.map((employee) => (
          <EmployeeResult key={employee.id} employee={employee} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default SearchResults;