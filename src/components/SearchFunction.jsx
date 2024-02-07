import { useState } from "react";
import { RecipePage } from "../pages/RecipePage";
import { TextInput } from "./ui/TextInput";
import { Text, Flex } from "@chakra-ui/react";

export const SearchFunction = ({ items, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = items.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Flex align="center" direction="column" py={10}>
      <Text color={"white"} fontWeight={"bold"} fontSize={"3xl"}>
        Winc Recipe Checker
      </Text>
      <TextInput onChange={handleChange} w={500} mb={10} />
      <RecipePage clickFn={clickFn} items={matchedRecipes} />
    </Flex>
  );
};
