"use client";

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagneticCursor } from "@/components/MagneticCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", services: "", message: "" });
      } else {
        toast.error("Something went wrong! please try again.")
      }
      toast.success("Message send Successfully!")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".contactRef");
      if (!titles) return;
      gsap.from(titles, {
        yPercent: 40,
        delay: 1.5,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // ✅ kills all animations on unmount
  }, []);
  return (
    <div className="min-h-screen w-full bg-black text-white border-b-2 border-gray-700">
      <div className="flex items-center justify-center py-24 mb-4 px-3">
        <p className="contactRef text-[85px] leading-20 font-semibold">
          Let&apos;s start a project together
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="contactRef flex gap-6 items-start">
                <span className="text-gray-400 text-lg font-light mt-2 min-w-[24px]">
                  01
                </span>
                <div className="flex-1">
                  <Label
                    htmlFor="name"
                    className="text-gray-300 text-xl md:text-2xl font-semibold block mb-4"
                  >
                    What&apos;s your name ?
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-14 bg-transparent border-0 border-b border-border/30 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-accent transition-colors text-3xl placeholder:text-xl placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div className="contactRef flex gap-6 items-start">
                <span className="text-gray-400 text-lg font-light mt-2 min-w-[24px]">
                  02
                </span>
                <div className="flex-1">
                  <Label
                    htmlFor="email"
                    className="text-gray-300 text-xl md:text-2xl font-semibold block mb-4"
                  >
                    What&apos;s your email ?
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="h-14 bg-transparent border-0 border-b border-border/30 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-accent transition-colors text-3xl placeholder:text-xl placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div className="contactRef flex gap-6 items-start">
                <span className="text-gray-400 text-lg font-light mt-2 min-w-[24px]">
                  03
                </span>
                <div className="flex-1">
                  <Label
                    htmlFor="services"
                    className="text-gray-300 text-xl md:text-2xl font-semibold block mb-4"
                  >
                    What services are you looking for ?
                  </Label>
                  <Input
                    id="services"
                    value={form.services}
                    onChange={handleChange}
                    placeholder="Web development, design, consulting..."
                    className="h-14 bg-transparent border-0 border-b border-border/30 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-accent transition-colors text-3xl placeholder:text-xl placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div className="flex contactRef gap-6 items-start">
                <span className="text-gray-400 text-lg font-light mt-2 min-w-[24px]">
                  04
                </span>
                <div className="flex-1">
                  <Label
                    htmlFor="message"
                    className="text-gray-300 text-xl md:text-2xl font-semibold block mb-4"
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Nikhil, can you help me with..."
                    rows={6}
                    className="bg-transparent border-0 border-b border-border/30 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-accent transition-colors text-3xl placeholder:text-xl placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                <MagneticCursor>
                  <Button
                    type="submit"
                    className="bg-[#ffb536] hover:bg-[#ffb536] text-white font-semibold w-36 h-36 rounded-full p-2 text-3xl tracking-wide transition-all duration-300 cursor-pointer"
                  >
                    {loading ? "Sending..." : "Send it!"}
                  </Button>
                </MagneticCursor>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="contactRef">
              <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">
                Email
              </h3>
              <a
                href="mailto:hello@dennissnellenberg.com"
                className="text-white transition-colors flex items-center gap-2 group text-lg"
              >
                web.coder.778@gmail.com
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="contactRef">
              <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">
                Location
              </h3>
              <p className="text-white text-lg">Nashik, India</p>
            </div>

            <div className="contactRef">
              <h3 className="text-sm font-medium mb-6 text-muted-foreground uppercase tracking-wider">
                Social
              </h3>
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/nikhil-mishra-outbreak"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-3 group"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://github.com/outbreak778"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-3 group"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="contactRef">
              <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">
                Availability
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
