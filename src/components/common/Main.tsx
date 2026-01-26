function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full min-h-180 flex p-6 gap-6">{children}</main>
  );
}
export { Main };
