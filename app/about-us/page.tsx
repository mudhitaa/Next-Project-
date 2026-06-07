import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orson Infotech || About Us",
  description: "Learn more about Orson Infotech and our mission.",
}

export default function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our about page!</p>
      <a href="/" className="text-blue-500 hover:underline">
        Back to Home
      </a>
    </div>
  );
}
