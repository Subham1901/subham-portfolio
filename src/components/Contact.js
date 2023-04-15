import React, { useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Img,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { emailKey, emailService, emailTemp } from "../utils/helper";
import gif from "../assets/sending.gif";
const Contact = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  var templateParams = {
    name: name,
    email: email,
    message: message,
  };

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !message) {
      setLoading(false);
      return toast({
        description: "name/email/message can't be empty!",
        status: "warning",
      });
    }
    if (!validator.isEmail(email)) {
      setLoading(false);
      return toast({
        description: "Invalid mail!",
        status: "error",
      });
    }

    emailjs.send(emailService, emailTemp, templateParams, emailKey).then(
      (response) => {
        if (response.status == "200") {
          setLoading(false);
          toast({
            status: "success",
            description: "Email sent successfully",
          });
        }
      },
      (error) => {
        setLoading(false);
        toast({
          status: "warning",
          description: "Server issue, please try later!",
        });
      }
    );
  };
  return (
    <Container p={5} bgColor={"brand.primary"} mt={10} maxW={"100%"}>
      <Container maxW={"container.lg"}>
        <Heading
          p={5}
          textAlign={"center"}
          fontFamily={"font"}
          fontWeight={"extrabold"}
          color={"brand.secondary"}
        >
          Connect with me!
        </Heading>
        <HStack
          display={"flex"}
          flexDirection={["column", "column", "column", "row", "row"]}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box p={5}>
            <Text
              color={"brand.outline"}
              textAlign={"center"}
              fontSize={"xl"}
              fontFamily={"font"}
              fontWeight={"medium"}
            >
              If you're seeking someone who can build reliable, fast, and modern
              web applications, get in touch with me!
            </Text>
            <Img w={"xs"} objectFit={"cover"} h={"250px"} src={gif} />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <form>
              <Input
                type="text"
                required
                className="input-area"
                w={["xs", "sm", "md"]}
                placeholder="Enter Name"
              />
              <Input
                required
                type="email"
                className="input-area"
                w={["xs", "sm", "md"]}
                placeholder="Enter Email"
              />
              <Textarea
                type="text"
                required
                className="input-area"
                w={["xs", "sm", "md"]}
                placeholder="Enter Name"
              />
              <Button
                ml={8}
                className="contact-button"
                type="submit"
                w={["xs", "sm", "md"]}
              >
                Send
              </Button>
            </form>
          </Box>
        </HStack>
      </Container>
    </Container>
  );
};

export default Contact;
