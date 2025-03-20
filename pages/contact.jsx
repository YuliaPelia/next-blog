import Head from "next/head";

import ContactForm from "@/components/contact/contact-form";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <h1>Contact Page</h1>
      <ContactForm />
    </>
  );
}

export default Contact;
