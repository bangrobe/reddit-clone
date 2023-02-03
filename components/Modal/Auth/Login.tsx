import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import InputItem from "@/components/Base/InputItem";
import { ModalView } from "@/atoms/authModalAtom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
type LoginProps = {
  toggleView: (view: ModalView) => void;
};

const Login: React.FC<LoginProps> = ({ toggleView }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [signInWithEmailAndPassword, user, loading, useError] =
    useSignInWithEmailAndPassword(auth);
  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(form.email, form.password);
  };
  return (
    <form onSubmit={onSubmit}>
      <InputItem
        name="email"
        placeholder="email"
        type="text"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
      />
      {formError ||
        (useError && (
          <Text textAlign="center" color="red">
            {formError ||
              FIREBASE_ERRORS[
                useError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </Text>
        ))}
      <Button
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        type="submit"
        isLoading={loading}
      >
        Log In
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() => setAuthModalState((prev)=> ({
            ...prev,
            view: 'resetPassword'
          }))}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {}}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
