import { CodeXml, DraftingCompass, Footprints, Goal, List } from "lucide-react";

export const CLASS_CATEGORY = [
  { id: 1, label: "전체", category: "", icon: <List /> },
  { id: 2, label: "IT 프로그래밍", category: "programming", icon: <CodeXml /> },
  { id: 3, label: "일정", category: "planning", icon: <Goal /> },
  {
    id: 4,
    label: "디자인 일러스트",
    category: "design",
    icon: <DraftingCompass />,
  },
  {
    id: 5,
    label: "자기계발",
    category: "self-development",
    icon: <Footprints />,
  },
] as const; // as const: 각 속성을 readonly
