import React from "react";
import * as Styled from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function FormContainer({ children }: Props) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
}
