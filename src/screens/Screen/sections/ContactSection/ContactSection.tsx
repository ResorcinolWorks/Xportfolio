import { SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  const formFields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "input",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      type: "input",
    },
    {
      id: "subject",
      label: "Subject",
      placeholder: "Enter the subject",
      type: "input",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Enter your message",
      type: "textarea",
    },
  ];

  return (
    <section className="relative w-full min-h-[900px] bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative h-full flex flex-col items-center px-4">
        <div className="mt-20 md:mt-[150px] w-full md:w-[751px] text-center">
          <h2 className="font-['Inter',Helvetica] font-normal text-white text-4xl md:text-[63.2px] leading-tight md:leading-[60px] heading-glow">
            GET IN TOUCH WITH ME
          </h2>
        </div>

        <Card className="mt-12 md:mt-[106px] w-full max-w-[700px] bg-[#ffffff05] rounded-lg shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-none backdrop-blur-sm">
          <CardContent className="p-6 md:p-8 md:pt-[54px]">
            <div className="flex flex-col space-y-5">
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <label
                    htmlFor={field.id}
                    className="font-['Montserrat',Helvetica] font-semibold text-white text-sm leading-5"
                  >
                    {field.label}
                  </label>

                  {field.type === "input" ? (
                    <Input
                      id={field.id}
                      placeholder={field.placeholder}
                      className="h-[42px] bg-neutral-900/50 border-neutral-700 text-white placeholder:text-gray-400 text-[13.8px] font-['Inter',Helvetica] font-normal focus:border-white/50 transition-colors"
                    />
                  ) : (
                    <Textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      className="h-[114px] bg-neutral-900/50 border-neutral-700 text-white placeholder:text-gray-400 text-[13.8px] font-['Inter',Helvetica] font-normal focus:border-white/50 transition-colors"
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-center mt-5">
                <Button className="w-[154px] h-[50px] rounded-full border border-gray-600 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white flex items-center justify-center gap-2 transition-all duration-300 group">
                  <SendIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <span className="font-['Montserrat',Helvetica] font-medium text-base">
                    Submit
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};