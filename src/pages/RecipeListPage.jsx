import {
  Center,
  Image,
  Flex,
  Button,
  Box,
  Text,
  Heading,
  Grid,
  Wrap,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/RecipeLabel";
import { Nutrition } from "../components/ui/Nutrition";
import logo from "../img/logo.png";

export const RecipeListPage = ({ item, clickFn }) => {
  return (
    <Center>
      <Box w="60vw" flexDirection="column" bg="white">
        <Box>
          <Flex p={3} justifyContent="space-between" pb={3}>
            <Box w={100}>
              <Button
                color="#467fc2"
                w="fit-content"
                h="4em"
                onClick={() => clickFn()}
              >
                Back
              </Button>
            </Box>
            <Box w={100}>
              <Image boxSize="4em" src={logo} alt="logo"></Image>
            </Box>
            <Box w={100}></Box>
          </Flex>
          <Box>
            <Image h={80} w="100%" objectFit="cover" src={item.image} />
            <Grid gridTemplateColumns="1fr 1fr" gap={10} p={3} px={16}>
              <Flex flexDirection="column">
                <Text
                  textTransform="uppercase"
                  color="gray"
                  fontSize="md"
                  fontWeight={500}
                >
                  {item.mealType}
                </Text>
                <Heading mb={3} size="md">
                  {item.label}
                </Heading>
                <Text>Total cooking time: {item.totalTime}</Text>
                <Text>Servings: {item.yield}</Text>
                <Heading size="md" my={3}>
                  Ingredients:
                </Heading>
                <Text>
                  {item.ingredientLines.map((ingriedients) => (
                    <Text mb={3} key={ingriedients}>
                      {ingriedients}
                    </Text>
                  ))}
                </Text>
              </Flex>
              <Flex flexDirection="column">
                <Text>Health Labels:</Text>
                <Wrap mb={3} gap={2}>
                  {item.healthLabels.map((healtLabel) => (
                    <Tag size="lg" bgColor="#ecd7fc" key={healtLabel}>
                      {healtLabel}
                    </Tag>
                  ))}
                </Wrap>
                <Text>Diet:</Text>
                <Wrap mb={3} gap={2}>
                  {item.dietLabels.map((diet) => (
                    <Tag size="lg" bgColor="#bdf8cf" key={diet}>
                      {diet}
                    </Tag>
                  ))}
                </Wrap>
                <Text>Cautions:</Text>
                <Wrap mb={3} gap={2}>
                  {item.cautions.map((caution) => (
                    <Tag size="lg" bgColor="#ffdcdb" key={caution}>
                      {caution}
                    </Tag>
                  ))}
                </Wrap>
                <Nutrition item={item}></Nutrition>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
