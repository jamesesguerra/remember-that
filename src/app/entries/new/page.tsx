import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import TipTap from "@/components/ui/tiptap/tiptap";

export default function Home() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-8">
      <div className="py-8 gap-8 flex flex-col">
        <div className="flex flex-col gap-3">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="problem">Problem</Label>
          <Input id="problem" name="problem" />
        </div>

        <div>
          <Label htmlFor="solution" className="pb-3">
            Solution
          </Label>
          <TipTap />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="tags">
            Tags
          </Label>
          <Input id="tags" name="tags" />
        </div>

        <div className="flex justify-end">
          <Button>Save</Button>
        </div>

      </div>
    </section>
  );
}
