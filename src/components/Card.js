import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg="white">
      <Image src={imageSrc} alt='img' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          color='black'
        >
          {title}
        </Box>

        <Box>
          <Box as='span' color='gray.600' fontSize='sm'>
           {description}
          </Box>
        </Box>
        <Text color='black'fontSize='sm' >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>
    </Box>
  );
};

export default Card;
