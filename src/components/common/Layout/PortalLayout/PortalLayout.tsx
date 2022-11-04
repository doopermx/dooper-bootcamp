import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import Header from "@src/components/common/Header/Header";
import * as Styled from "./styles";

type Props = {
  children: ReactNode;
};

const PortalLayout = ({ children }: Props) => {
  return (
    <Styled.Wrapper>
      <Header />
      <Box component="main">
        <Container disableGutters maxWidth="md">
          <Box textAlign="left" p={{ xs: 0, sm: 2, md: 3 }}>
            {children}
          </Box>
        </Container>
      </Box>
    </Styled.Wrapper>
  );
};

export default PortalLayout;
