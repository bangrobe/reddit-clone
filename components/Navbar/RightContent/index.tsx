import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import { useSignOut } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import ActionIcons from "./Icons";
import UserMenu from "./UserMenu";
type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        {user ? (
          <ActionIcons />
        ) : (
          <AuthButtons />
        )}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
