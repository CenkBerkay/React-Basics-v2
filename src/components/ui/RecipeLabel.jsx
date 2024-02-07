import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={1}
      size="sm"
      variant="solid"
      color="black"
      borderRadius={2}
      {...props}
    >
      {children}
    </CTag>
  );
};
