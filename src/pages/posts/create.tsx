import { Editor, Main, Section } from "@/components/common";
import { Badge, Input, Label, Separator, Skeleton } from "@/components/ui";

export default function CreatePost() {
  return (
    <Main className="flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <Section className="flex-2">
        <div className="flex flex-col gap-6">
          <Badge variant="destructive" className="text-sm rounded-md">
            게시물 작성하기
          </Badge>
          <Separator />
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">제목</Label>
              <Input
                id="title"
                type="text"
                placeholder="제목을 입력하세요."
                required
                className="text-xl! py-6! border-none bg-foreground text-background dark:text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">본문</Label>
              <Editor />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-6">
          <Badge variant="destructive" className="text-sm rounded-md">
            게시물 작성하기
          </Badge>
          <Separator />
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">썸네일</Label>
              <Skeleton className="w-full h-60" />
              <Input
                id="title"
                type="file"
                placeholder="썸네일"
                required
                className="border-none"
              />
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
}
