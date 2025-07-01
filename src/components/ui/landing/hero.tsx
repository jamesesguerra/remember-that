import React from "react";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { ArrowUpRight } from "lucide-react";

import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            v1.0.0 is available now! 🚀
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Solve it. Log it. Never struggle with it again.
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg text-center">
            RememberThat helps you store, search, and organize the bugs and
            solutions you already solved — so you never waste time fixing the
            same thing twice.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base hover:cursor-pointer"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none hover:cursor-pointer"
            >
              Log in
              <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>
      <LogoCloud className="mt-24 max-w-3xl mx-auto" />
    </div>
  );
};

export default Hero;
