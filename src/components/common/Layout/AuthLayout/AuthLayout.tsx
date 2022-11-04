import { ReactNode } from "react";
import { useMediaQuery } from "@mui/material";
import theme from "@src/theme";
import * as Styles from "./styles";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Styles.Wrapper>
      <Styles.LeftSide>{children}</Styles.LeftSide>
      {!isMobile && <Styles.SideImg img="/assets/sideimg.png" />}
    </Styles.Wrapper>
  );
}
