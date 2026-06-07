export default function BlogDetailPage() {
    return(<>
    <a href="/" className="text-blue-500 hover:underline">
      Back to Home
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