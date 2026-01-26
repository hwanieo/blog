import { Button } from "../ui";
import { ChevronDown } from "lucide-react";
import { CLASS_CATEGORY } from "@/constants/category.constant";

function Sidebar() {
  return (
    <aside className="min-w-60 w-60 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <h4>카테고리</h4>
        <ChevronDown className="mt-1" />
      </div>
      <div className="flex flex-col gap-2">
        {CLASS_CATEGORY.map((menu) => (
          <Button
            key={menu.id}
            variant="ghost"
            className="justify-start text-muted-foreground hover:text-foreground hover:pl-6 hover:bg-blue-500/20!"
          >
            {menu.icon}
            {menu.label}
          </Button>
        ))}
      </div>
    </aside>
  );
}

export { Sidebar };
