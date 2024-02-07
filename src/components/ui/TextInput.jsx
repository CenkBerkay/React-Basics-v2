import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input
    placeholder="Search Recipes"
    bg={"white"}
    onChange={changeFn}
    {...props}
  />
);
