"use client";
import { Navbar } from "@/components/layout/navbar/navbar";
import EntryCard from "@/components/ui/features/entries/entry-card";
import { Input } from "@/components/ui/shadcn/input";

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />

      <div className="container mx-auto p-8 pt-24">
        <h1 className="mb-4 text-center text-lg tracking-tight">
          Welcome back, James <br />
          <span className="text-3xl font-extrabold tracking-tight ">
            What did you figure out today?
          </span>
        </h1>
        <div className="mb-10 mt-5 text-center text-sm text-zinc-500 max-w-2xl mx-auto">
          <Input type="text" placeholder="Add something quick..." />
        </div>
      </div>

      <section className="container mx-auto px-8">
        <h2 className="font-bold text-lg py-4">Recently Added</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </div>
      </section>
    </div>
  );
}
