import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Badge } from "../../shadcn/badge";
import { ArrowUpRight } from "lucide-react";

const EntryCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fixing EF Core migration error</CardTitle>
        <CardDescription>
          {'"Got Database is in use when running dotnet ef database drop…"'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-wrap gap-1 items-center">
          <span className="text-xs">Tags:</span>
          <Badge>Badge</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full">
          <ArrowUpRight className="!h-5 !w-5" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default EntryCard;
