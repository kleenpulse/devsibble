import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
	title: "Devsibble",
	description: "Showcase and discover incredible developer projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
