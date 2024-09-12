import FooterShowata from "./FooterShowata";

const Footer = () => {
  const footerData = [
    {
      name: "TechCorp Solutions",
      address: "1234 Innovation Drive, Suite 567, Tech City, CA 98765",
      email: "contact@techcorp.com",
      phone: "+1 (123) 456-7890",
      facebook: "https://www.facebook.com/alamin.cse.21",
      linkedIn: "https://www.linkedin.com/in/al-amin-8640b31a0/",
      github: "https://github.com/alamin71",
      phones: "+1 (123) 456-7890",
      copyright: "© 2024 TechCorp Solutions. All rights reserved.",
    },

    // links:
    //   { label: "About Us", url: "/about"
    //    label: "Careers", url: "/careers"
    //    label: "Contact", url: "/contact"
    //    label: "Privacy Policy", url: "/privacy-policy"
    //    label: "Terms of Service", url: "/terms-of-service"
    //   },
    //   copyright: "© 2024 TechCorp Solutions. All rights reserved.",
  ];

  return (
    <div className="my-5 py-4  bg-blue-950">
      <div className="mx-16 py-4">
        <h1 className="text-4xl underline">Contacts</h1>
        {footerData.map((footer, index) => (
          <FooterShowata key={index} footer={footer}></FooterShowata>
        ))}
      </div>
    </div>
  );
};

export default Footer;
