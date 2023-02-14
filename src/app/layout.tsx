import Sidebar from "../Components/Sidebar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          <Sidebar />

          {/* Loading Notification */}

          <div className="flex-1 bg-slate-700">{children}</div>
        </div>
      </body>
    </html>
  );
}
