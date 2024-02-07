import { Wrap } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipePage = ({ items, clickFn }) => {
  return (
    <Wrap justify="center" spacing={38}>
      {items.map((item) => (
        <RecipeCard
          item={item.recipe}
          clickFn={clickFn}
          key={item.recipe.label}
        />
      ))}
    </Wrap>
  );
};
