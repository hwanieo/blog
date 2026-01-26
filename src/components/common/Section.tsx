function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex-1 w-full flex-col gap-12">{children}</section>
  );
}

export { Section };
