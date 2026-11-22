import type { Metadata } from "next";
import { PortalProvider, PortalShell } from "../components/shared";
import "./portal.css";
export const metadata: Metadata = { title: { default: "LumaHacks | SASE at UCF", template: "%s · LumaHacks | SASE at UCF" }, description: "LumaHacks is a student hackathon hosted by the Society of Asian Scientists and Engineers at the University of Central Florida. Open to students from UCF and beyond." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><PortalProvider><PortalShell>{children}</PortalShell></PortalProvider></body></html>;
}
