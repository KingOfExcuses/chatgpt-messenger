import { getServerSession } from "next-auth";
import Login from "../Components/Login";
import ProvidersWrapper from "../Components/ProvidersWrapper";
import Sidebar from "../Components/Sidebar";
import { authOptions } from "../server/auth";
import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <ProvidersWrapper session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <Sidebar />

              {/* Loading Notification */}

              <div className="flex-1 bg-dark">{children}</div>
            </div>
          )}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
