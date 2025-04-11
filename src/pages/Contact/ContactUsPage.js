import React, {useEffect} from "react";
import Contact from "./Contact";
import ContactSec1 from "./ContactSec1";
import ContactSec2 from "./ContactSec2";
function ContactUsPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  return (
    <>
      <ContactSec1 />
      <ContactSec2 />
      <Contact />
    </>
  );
}

export default ContactUsPage;
