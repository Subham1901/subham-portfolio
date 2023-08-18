import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const Blog = () => {
  return (
    <Container>
      <Box>
        <Heading
          textAlign={"center"}
          fontFamily={"font"}
          color={"brand.secondary"}
        >
          My Blogs
        </Heading>
      </Box>
    </Container>
  );
};

export default Blog;
