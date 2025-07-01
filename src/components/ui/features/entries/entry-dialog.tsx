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
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="mb-10 mt-5 text-center text-sm text-zinc-500 max-w-2xl mx-auto">
            <Input type="text" placeholder="Add something quick..." />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a new entry</DialogTitle>
            <DialogDescription>
              Save a quick entry — you can refine it later.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 my-3">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="solution">Solution</Label>
              <Input id="solution" name="solution" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" name="tags" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
