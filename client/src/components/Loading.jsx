import { Spinner , Box , Center} from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";

export function Loading() {
  const isFetching = useIsFetching();
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      pointerEvents="none"  // allow clicks to pass through
      zIndex="overlay"
      display={isFetching ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        color="blue.500"
        emptyColor="gray.200"
      />
    </Box>
   /* <Spinner
      aria-label="loading"
      pos="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      margin="auto"
      display={isFetching > 0 ? "inherit" : "none"}
      zIndex={1}
    />
    */
  );
}
