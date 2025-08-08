"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/shadcn/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";

export function EntryDialog() {
  const [formData, setFormData] = useState({
    title: "",
    solution: "",
    tags: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://api.james-esg.com/entries", formData);
      console.log("✅ Entry saved:", res.data);

      setFormData({ title: "", solution: "", tags: "" });
    } catch (err) {
      console.error("❌ Failed to save entry:", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mb-10 mt-5 text-center text-sm text-zinc-500 max-w-2xl mx-auto">
          <Input type="text" placeholder="Add something quick..." />
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new entry</DialogTitle>
            <DialogDescription>
              Save a quick entry — you can refine it later.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 my-3">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="solution">Solution</Label>
              <Input
                id="solution"
                name="solution"
                value={formData.solution}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}