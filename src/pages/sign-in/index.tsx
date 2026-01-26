import { Main, Section } from "@/components/common";
import { Button, Input } from "@/components/ui";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui";

export default function SignIn() {
  return (
    <Main>
      <Section>
        <form action={() => {}} className="mt-20 min-w-80 w-80 m-auto">
          <FieldSet>
            <FieldLegend>로그인 페이지</FieldLegend>
            <FieldDescription></FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">이메일</FieldLabel>
                <Input
                  id="email"
                  autoComplete="off"
                  placeholder="ex) username@gmail.com"
                />
                {/* <FieldDescription>
                  This appears on invoices and emails.
                </FieldDescription> */}
              </Field>
              <Field>
                <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                <Input id="password" autoComplete="off" /*aria-invalid*/ />
                {/* <FieldError>Choose another username.</FieldError> */}
              </Field>
            </FieldGroup>
          </FieldSet>
          <div className="mt-6 w-full">
            <Button
              variant="secondary"
              className="w-full text-muted-foreground hover:text-foreground transition-all duration-500"
            >
              로그인
            </Button>
          </div>
        </form>
      </Section>
    </Main>
  );
}
