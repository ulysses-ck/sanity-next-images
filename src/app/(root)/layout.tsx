export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <head>
        <title>Sanity Next Images</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
