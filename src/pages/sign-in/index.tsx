import { Main, Section } from "@/components/common";
import { Button, Input } from "@/components/ui";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Label } from "@/components/ui";
import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <Main>
      <Section>
        <Card className="w-full max-w-sm m-auto mt-20 rounded-none border-none shadow-none bg-background!">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>나만을 위한 블로그 로그인 페이지</CardDescription>
            <CardAction>
              <Button variant="link" onClick={() => navigate("/sign-up")}>
                Sign Up
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">비밀번호</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </Section>
    </Main>
  );
}
