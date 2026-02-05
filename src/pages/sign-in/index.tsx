import { Main, Section } from "@/components/common";
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
} from "@/components/ui";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import supabase from "../../utils/supabase";
import google from "../../assets/social/google.svg";
import { toast } from "sonner";
import { useAuthStore } from "@/stores";

const formSchema = z.object({
  email: z.email({ error: "올바른 형식의 이메일 주소를 입력하세요." }),
  password: z.string().min(8, {
    error: "비밀번호는 최소 8자 이상이어야 합니다.",
  }),
});

export default function SignIn() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        toast.error("로그인에 실패했습니다.", {
          style: { color: "red" },
        });
        return;
      }

      if (user && session) {
        setUser({
          id: user.id,
          email: user.email as string,
          role: user.role as string,
        });
        toast.success("로그인에 성공했습니다.", {
          style: { color: "green" },
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  };
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
            <form id="form-signin" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-signin-title">Email</FieldLabel>
                      <Input
                        {...field}
                        id="form-signin-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="m@example.com"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-signin-password">
                        Password
                      </FieldLabel>
                      <Input
                        {...field}
                        type="password"
                        id="form-signin-password"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Field>
              <Button type="submit" form="form-signin" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full relative">
                <img src={google} alt="google" className="h-full" />
                Login with Google
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </Section>
    </Main>
  );
}
