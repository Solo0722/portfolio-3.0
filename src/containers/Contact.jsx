import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from '../components/ui/form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {Icon} from '@iconify/react';
import { Textarea } from "../components/ui/textarea";
import TitleBar from "../components/TitleBar";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2,"Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address!"),
  message:z.string().min(2,"Message must be at least 2 characters")

});


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form =
    useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email: "",
          message:""
        },
    });
  
   const sendEmail = async (values) => {
     console.log(values);
     setLoading(true);
     console.log(import.meta.env.VITE_SERVICE_ID);
     console.log(import.meta.env.VITE_TEMPLATE_ID);
     await emailjs
       .send(
         import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID,
         {
           from_name: values.fullName,
           to_name: "Solomon",
           message: values.message,
           from_email: values.email,
         },
         {
           publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
         }
       )
       .then(
         () => {
           form.reset();
         },
         (error) => {
           console.log("FAILED...", error);
         }
       ).finally(() => setLoading(false));
   };
  

  return (
    <section id="contact" className="px-8 md:px-24 lg:px-36 py-12 w-full">
      <TitleBar title1="Let's get" title2={"in touch"} />
      <div className="flex flex-row w-full">
        <div className="w-[70%] flex pr-20">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(sendEmail)}
              className="space-y-4 w-full"
            >
              <div className="flex flex-row gap-5 w-full">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          {...field}
                          className="input-field"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          {...field}
                          className="input-field"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        {...field}
                        className="message-field"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">{loading ? "Loading..." : "Submit"}</Button>
            </form>
          </Form>
        </div>
        <div className="w-[30%] flex flex-col">
          <p style={{ lineHeight: "1.6rem" }}>
            Let&apos;s make something new, different and more meaningful or make
            something more visual and conceptual. I am also available for a job.
          </p>
          <div className="w-full h-[60px] my-2 rounded-md flex flex-row items-center justify-start">
            <div className="contact-logo">
              <Icon icon="solar:phone-calling-outline" />
            </div>
            <div className="contact-content">
              <p>+233 (0) 599171142</p>
              <p>+233 (0) 504339488</p>
            </div>
          </div>
          <div className="w-full h-[60px] my-2 rounded-md flex flex-row items-center justify-start">
            <div className="contact-logo">
              <Icon icon="solar:letter-unread-outline" />
            </div>
            <div className="contact-content">
              <p>
                owusuansahsolomon39
                <br />
                @gmail.com
              </p>
            </div>
          </div>
          <div className="w-full h-[60px] my-2 rounded-md flex flex-row items-center justify-start">
            <div className="contact-logo">
              <Icon icon="solar:map-point-outline" />
            </div>
            <div className="contact-content">
              <p>Kentinkrono</p>
              <p>Kumasi - Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact