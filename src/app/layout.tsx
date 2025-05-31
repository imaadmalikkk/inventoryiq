import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StageWiseDevTools } from "@/components/stagewise-toolbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "InventoryIQ - Modern Inventory Management",
  description: "Streamline your stock control, manage clients, and generate invoices with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <StageWiseDevTools />
        </ThemeProvider>
      </body>
    </html>
  );
}
