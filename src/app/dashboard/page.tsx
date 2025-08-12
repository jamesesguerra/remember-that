"use client";
import { Navbar } from "@/components/layout/navbar/navbar";
import EntryCard from "@/components/ui/features/entries/entry-card";
import { EntryDialog } from "@/components/ui/features/entries/entry-dialog";
import { Entry } from "@/models/entry";
import { getEntries } from "@/services/entries-service";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getEntries().then((entries: Entry[]) => {
      console.log(entries);
    });
  }, []);

  return (
    <>
      <Navbar />
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
    </>
  );
}
