import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { PortalProvider, PortalShell } from "../components/shared";
import "./portal.css";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const metadata: Metadata = { title: { default: "LumaHacks | SASE at UCF", template: "%s · LumaHacks | SASE at UCF" }, description: "LumaHacks is a student hackathon hosted by the Society of Asian Scientists and Engineers at the University of Central Florida. Open to students from UCF and beyond." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}><PortalProvider><PortalShell>{children}</PortalShell></PortalProvider></body></html>;
}
