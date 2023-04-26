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
import { TbSend } from "react-icons/tb";
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
  console.log(templateParams);
  function sendMail(e) {
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
        setEMail("");
        setName("");
        setMessage("");
      },
      (error) => {
        setLoading(false);
        toast({
          status: "warning",
          description: "Server issue, please try later!",
        });
      }
    );
  }
  return (
    <Container
      id="contact"
      p={5}
      bgColor={"brand.primary"}
      mt={10}
      maxW={"100%"}
    >
      <Heading
        p={5}
        textAlign={"center"}
        fontFamily={"font"}
        fontWeight={"extrabold"}
        color={"brand.secondary"}
      >
        Connect with me!
      </Heading>
      <Container maxW={"container.xl"}>
        <HStack
          display={"flex"}
          flexDirection={["column", "column", "column", "row", "row"]}
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems={"center"}
        >
          <Box
            w={["xs", "sm", "lg", "2xl"]}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={5}
          >
            <Text
              color={"brand.outline"}
              textAlign={"center"}
              fontSize={["md", "lg"]}
              fontFamily={"font"}
              fontWeight={"medium"}
            >
              If you're seeking someone who can build reliable, fast, and modern
              web applications, get in touch with me!
            </Text>
            <Img w={"xs"} objectFit={"cover"} h={"250px"} src={gif} />
          </Box>
          <Box
            p={2}
            overflow={"hidden"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <form onSubmit={(e) => sendMail(e)}>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                type="text"
                required
                className="input-area"
                width={[290, 400]}
                placeholder="Enter Name"
              />
              <Input
                onChange={(e) => setEMail(e.target.value)}
                value={email}
                name="email"
                required
                type="email"
                className="input-area"
                width={[290, 400]}
                placeholder="Enter Email"
              />
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                type="text"
                required
                className="input-area"
                width={[290, 400]}
                placeholder="Enter Message"
              />
              <Button
                ml={8}
                isLoading={loading}
                colorScheme="blue"
                letterSpacing={"5px"}
                loadingText="Sending..."
                className="contact-button"
                type="submit"
                width={[290, 400]}
                leftIcon={<TbSend />}
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
