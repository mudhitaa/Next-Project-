import Image from "next/image";

export default function Home() {
  return (<>
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsam nulla error voluptate minus laborum, provident nisi tempore, fugiat doloribus, assumenda ad quod? At numquam omnis deserunt. Placeat, iusto suscipit.
  </div>
  <a href="/about-us" className="text-blue-500 hover:underline">
    About Us
  </a>
  <a href="/our-services" className="text-blue-500 hover:underline">
    Our Services
  </a>
  <a href="/gallery" className="text-blue-500 hover:underline">
    Gallery
  </a>
  <a href="/blogs" className="text-blue-500 hover:underline">
    Blogs
  </a>
  <a href="/contact-us" className="text-blue-500 hover:underline">
    Contact Us
  </a>
  </>
  );
}
