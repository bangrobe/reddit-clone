import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import AuthInputs from "./Inputs";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
type Props = {};

const AuthModal = () => {
  const [ modalState, setModalState] = useRecoilState(authModalState);
  const [ user, loading, error ] = useAuthState(auth)

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    setModalState((prev)=> ({
      ...prev,
      open: false,
    }))
  }

  useEffect(()=> {
    if (user) handleClose();
    console.log(user);
  }, [ user ])
  return (
    <>
      <Modal isOpen={ modalState.open } onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            { modalState.view === 'login' && 'Login' }
            { modalState.view === 'signup' && 'Sign Up' }
            { modalState.view === 'resetPassword' && 'Reset Password' }
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Flex direction="column" align="center" justify="center" width="70%">
              { modalState.view === 'login' || modalState.view === 'signup' ? (
                <>
                  <OAuthButtons />
                  <AuthInputs />
                </>
              ) : <ResetPassword /> }
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
