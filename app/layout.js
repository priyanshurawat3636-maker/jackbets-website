import "./globals.css";

export const metadata = {
  title: "JackBets — Rewards & Live",
  description:
    "JackBets official hub for live streams, community updates and partner rewards.",
  icons: {
    icon: "/jackbets-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}