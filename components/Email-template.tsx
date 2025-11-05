import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
interface EmailTemplateProps {
  message: string;
}

export function EmailTemplate({ message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Event Registration Confirmation</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Event Registration Confirmation</Heading>
          <Text style={text}>{message}</Text>
          <Text style={footer}>© 2025 Eventry. All rights reserved.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "1.4",
  margin: "16px 0",
};

const text = {
  color: "#1d1c1d",
  fontSize: "16px",
  lineHeight: "1.4",
  margin: "24px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginTop: "48px",
};
