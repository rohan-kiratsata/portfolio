import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Freelance() {
  return (
    <>
      <Card className="p-0 border-none hover:bg-neutral-900">
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-lg">Card Title</CardTitle>
        </CardHeader>
        <CardContent className="text-base p-3 text-neutral-500">
          <p>Card Content</p>
        </CardContent>
      </Card>
    </>
  );
}
