import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";  
import { Textarea } from "@/components/ui/textarea";
import AnimationContainer from "../utils";

const Contacts = () => {
  return (
    <AnimationContainer>
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" rows={4} required />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </section>
    </AnimationContainer>
  )
};

export default Contacts;

