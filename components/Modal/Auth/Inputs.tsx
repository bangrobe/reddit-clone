import React from "react";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import Login from "./Login";
import SignUp from "./SignUp";
type AuthInputsProps = {
  toggleView: (view: any) => void;
};

const AuthInputs: React.FC<AuthInputsProps> = ({ toggleView }) => {
  const modalState = useRecoilValue(authModalState)
  return (
  <Flex direction="column" alignItems="center" width="100%" mt={4}>
         {modalState.view === "login" ? (
        <Login toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
</Flex>
  );
};
export default AuthInputs;
