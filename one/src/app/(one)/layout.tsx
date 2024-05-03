
export default function OneLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      {/* Nav */}
      


      <main>
        {children}
      </main>
    </>
  );
} 