import { useState } from "react";
import { data } from "./utils/data";
import { SearchFunction } from "./components/SearchFunction";
import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Box mx="2vw">
      {selectedItem ? (
        <RecipeListPage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <SearchFunction items={data.hits} clickFn={setSelectedItem} />
      )}
    </Box>
  );
};
