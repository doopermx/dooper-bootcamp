import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

export default function DocHeader({ title, children }: Props) {
  return (
    <Head>
      <title>{title}</title>
      {children && children}
    </Head>
  );
}
