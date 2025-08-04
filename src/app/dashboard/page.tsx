"use client";
import EntryCard from "@/components/ui/features/entries/entry-card";
import { EntryDialog } from "@/components/ui/features/entries/entry-dialog";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="container mx-auto p-8 pt-24">
        <h1 className="mb-4 text-center text-lg tracking-tight">
          Welcome back, James <br />
          <span className="text-3xl font-extrabold tracking-tight">
            What did you figure out today?
          </span>
        </h1>

        <EntryDialog />
      </div>

      <section className="w-full max-w-7xl md:min-w-[800px] mx-auto px-8">
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
