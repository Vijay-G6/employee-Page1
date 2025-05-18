import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"  
import {Heading, HStack, Image, Text, VStack} from "@chakra-ui/react"

const Employee =() => {
    const { id } = useParams()
    console.log(id)
    const { isLoading, data } = useQuery(["employee", id], async () => {
        const response = await fetch(`http://localhost:3030/employees/${id}`)
        return response.json()
    })
    // console.log("employee data", data)
    // return (
    //  <h1>Employee Data</h1>
    //   )

    if (isLoading) return <p>Loading...</p>;
    
    console.log("Employees Data", data)
    return (
      <>
      <HStack spacing={10} alignItems="center" justifyContent="center">
        <Image
          boxSize="175px"
          src={`http://localhost:3030/${data.imageFilePath}`}
          alt={`${data.firstName} ${data.lastName}`}
        />
        <VStack alignItems="flex-start">
          <HStack>
            <Heading fontSize="4xl">{data.firstName}</Heading>
            <Text fontSize="2xl">{data.lastName}</Text>
          </HStack>
          <HStack alignItems="baseline">
            <Text fontSize="xl" textAlign="right">
              {data.jobTitle}
            </Text>
            <Text>|</Text>
            <Text fontSize="md" textAlign="right">
              {data.teamName}
            </Text>
            </HStack>
          </VStack>
          <Text color="white" />
        </HStack>
      </>
      );
}
export default Employee;
