export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body style={{backgroundColor: '#FAF1F9'}}>{children}</body>
      </html>
    )
  }
  