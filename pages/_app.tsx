import "@/styles/globals.css";
import { theme } from "../chakra/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
