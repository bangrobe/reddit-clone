import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { auth } from "@/firebase/clientApp";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
      <Flex direction="column" mb={4} width="100%">
        <Button
          variant="oauth"
          mb={2}
          onClick={()=> signInWithGoogle()}
          isLoading={loading}
        
        >
          <Image src="/images/googlelogo.png" height="20px" mr={4} alt="google login" />
          Continue with Google
        </Button>
        {
          error &&  <Text>{ error.message }</Text>
        }
        <Button variant="oauth">Some Other Provider</Button>
      </Flex>
    );
  };
  export default OAuthButtons;