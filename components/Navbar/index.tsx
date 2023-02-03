import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent";
import AuthModal from "../Modal/Auth/AuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import Directory from "./Directory";

const Navbar = () => {
  const [ user, loading, error ] = useAuthState(auth)
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
        onClick={() => {}}
      >
        <Image src="/images/redditFace.svg" height="30px" alt="RedditFace" />
        <Image
          display={{ base: "none", md: "unset" }}
          src="/images/redditText.svg"
          height="46px"
          alt="reddit text"
        />
      </Flex>
      { user && <Directory /> }
      
      <SearchInput user={user} />
      <RightContent user={user} />
      <AuthModal />
    </Flex>
  );
};

export default Navbar;
