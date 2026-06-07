export default function BlogDetailPage() {
    return(<>
    <a href="/" className="text-blue-500 hover:underline">
      Back to Home
    </a>
      <a href="/about-us" className="text-blue-500 hover:underline">
        About Us
        </a>
      <a href="/our-services" className="text-blue-500 hover:underline">
        Our Services
      </a>
      <a href="/gallery" className="text-blue-500 hover:underline">
        Gallery
      </a>
      
      <a href="/contact-us" className="text-blue-500 hover:underline">
        Contact Us
      </a>

      <div>
        <ol>
            <li>
                <a href="/blogs/first-blog-post" className="text-blue-500 hover:underline">
                    First Blog Post
                </a>
            </li>
            <li>
                <a href="/blogs/second-blog-post" className="text-blue-500 hover:underline">
                    Second Blog Post
                </a>
            </li>
        </ol>
      </div>
    </>)
}