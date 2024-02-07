import { Flex, Text } from "@chakra-ui/react";

export const Nutrition = ({ item }) => {
  return (
    <>
      <Flex direction={"column"}>
        <Text fontSize={"lg"} fontWeight={"semibold"} mt={5}>
          Total nutrients:
        </Text>
        <Flex gap={8}>
          <Flex direction="column">
            <Text fontWeight={"bold"} fontSize={"sm"}>
              {Math.floor(item.totalNutrients.ENERC_KCAL.quantity)}
            </Text>
            <Text fontWeight={"bold"} fontSize={"xs"}>
              CALORIES
            </Text>
          </Flex>
          <Flex direction="column">
            <Flex>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {Math.floor(item.totalNutrients.CHOCDF.quantity)}
              </Text>
              <Text fontWeight={"bold"} fontSize={"sm"} ml={1}>
                {item.totalNutrients.CHOCDF.unit}
              </Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={"xs"}>
              CARBS
            </Text>
          </Flex>
          <Flex direction="column">
            <Flex>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {Math.floor(item.totalNutrients.PROCNT.quantity)}
              </Text>
              <Text fontWeight={"bold"} fontSize={"sm"} ml={1}>
                {item.totalNutrients.PROCNT.unit}
              </Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={"xs"}>
              PROTEIN
            </Text>
          </Flex>
          <Flex direction="column">
            <Flex>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {Math.floor(item.totalNutrients.FAT.quantity)}
              </Text>
              <Text fontWeight={"bold"} fontSize={"sm"} ml={1}>
                {item.totalNutrients.FAT.unit}
              </Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={"xs"}>
              FAT
            </Text>
          </Flex>
          <Flex direction="column">
            <Flex gap={1}>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {Math.floor(item.totalNutrients.CHOLE.quantity)}
              </Text>
              <Text fontWeight={"bold"} fontSize={"sm"} ml={1}>
                {item.totalNutrients.CHOLE.unit}
              </Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={"xs"}>
              CHOLESTEROL
            </Text>
          </Flex>
          <Flex direction="column">
            <Flex gap={1}>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {Math.floor(item.totalNutrients.NA.quantity)}
              </Text>
              <Text fontWeight={"bold"} fontSize={"sm"} ml={1}>
                {item.totalNutrients.NA.unit}
              </Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={"xs"}>
              SODIUM
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
