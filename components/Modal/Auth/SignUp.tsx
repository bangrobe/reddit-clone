import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import InputItem from "@/components/Base/InputItem";
import { ModalView } from "@/atoms/authModalAtom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
type SignUpProps = {
  toggleView: (view: ModalView) => void;
};

const SignUp: React.FC<SignUpProps> = ({ toggleView }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  //https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth
  const [createUserWithEmailAndPassword, user, loading, useError] =
    useCreateUserWithEmailAndPassword(auth);

  const [formError, setFormError] = useState("");
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
    if (form.password !== form.confirmPassword) {
      //Set error
      setFormError("Password do not match");
      return;
    }
    createUserWithEmailAndPassword(form.email, form.password);
    // createUserWithEmailAndPassword()
  };
  return (
    <form onSubmit={onSubmit}>
      <InputItem
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        onChange={onChange}
      />
      {
        formError || useError && (
          <Text textAlign="center" color="red">
          {formError || FIREBASE_ERRORS[useError?.message as keyof typeof FIREBASE_ERRORS]} 
        </Text>
        )
      }


      <Button width="100%" height="36px" mb={2} mt={2} type="submit">
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Have an account?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => toggleView("login")}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
