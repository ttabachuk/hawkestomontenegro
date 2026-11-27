import { Phone, MessageSquare, Mail, } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: MessageSquare, href: "sms:+15850000000", label: "Text"},
  { icon: Mail, href: "mailto:fake@gmail.com", label: "Email"},
  { icon: FaFacebook, href: "https://www.facebook.com/people/fake/", label: "Facebook"},
  { icon: FaInstagram, href: "https://www.instagram.com/fake", label: "Instagram"},
]

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-primary">
      {" "}
      <div className="container mx-auto-max-w-5xl">
        <h2 className="text-1xl md:text-2xl font-semibold tracking-tight mb-4">
          Let's get in touch
        </h2>
        <span>
          <p>
            todo
          </p>
        </span>
        
        <div className="flex flex-row justify-center items-center gap-8 mt-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
