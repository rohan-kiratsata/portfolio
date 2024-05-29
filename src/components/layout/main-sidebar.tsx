import { ScrollArea } from "@/components/ui/scroll-area";
import { site } from "@/config";

export default function MainSidebar() {
  return (
    <>
      <div className="w-[250px] p-5">
        <h1 className="text-xl font-semibold">{site.name}</h1>
        <ScrollArea className="w-full"></ScrollArea>
      </div>
    </>
  );
}
