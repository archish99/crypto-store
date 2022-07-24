import { Button } from "native-base";
import React from "react";

interface Props {
  title: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <Button
      bg="black"
      color="white"
      mt={4}
      rounded="full"
      _text={{ fontSize: 15 }}
      _pressed={{ bg: "black", color: "white", opacity: 0.7 }}
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
};

export default PrimaryButton;
