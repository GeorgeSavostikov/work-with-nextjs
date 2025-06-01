import "./styles/globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "Drag13 blog",
  description: "Super description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
