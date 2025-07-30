import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

// Assuming 'client' is imported from your Sanity client configuration
// Ensure this path is correct:
import { client } from "../config/sanityClient";
import BreadCrumb from "../components/BreadCrumb";

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Sanity Block Content Serializers (Optional but recommended for custom rendering)
// This example uses default serializers.
const serializers = {
  types: {
    block: (props) => {
      switch (props.node.style) {
        case "h1":
          return <h1 className="text-4xl font-bold my-4">{props.children}</h1>;
        case "h2":
          return (
            <h2 className="text-3xl font-semibold my-3">{props.children}</h2>
          );
        case "h3":
          return (
            <h3 className="text-2xl font-semibold my-2">{props.children}</h3>
          );
        case "h4":
          return (
            <h4 className="text-xl font-semibold my-2">{props.children}</h4>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic my-4">
              {props.children}
            </blockquote>
          );
        default:
          return (
            <p className="text-gray-700 leading-relaxed my-2">
              {props.children}
            </p>
          );
      }
    },
    image: (props) => (
      <img
        src={props.node.asset.url}
        alt={props.node.alt || "Blog Image"}
        className="w-full h-auto rounded-lg my-6"
      />
    ),
    // Add other custom types if you have them in your portable text
  },
  list: (props) => {
    const { type } = props;
    if (type === "bullet") {
      return (
        <ul className="list-disc list-inside text-gray-700 my-2">
          {props.children}
        </ul>
      );
    }
    if (type === "number") {
      return (
        <ol className="list-decimal list-inside text-gray-700 my-2">
          {props.children}
        </ol>
      );
    }
    return null;
  },
  listItem: (props) => <li className="mb-1">{props.children}</li>,
  marks: {
    link: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a
          href={href}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    // Add other marks if needed
  },
};

const BlogPostDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add Google Fonts and Tailwind CSS CDN links (if not already global)

    // GROQ query to fetch a single blog post by slug
    const query = `*[_type == "blog" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      publishedAt,
      mainImage{
        asset->{
          url
        }
      },
      author->{
        name
      },
      body, // This fetches the Portable Text array
      tags
    }`;

    const fetchPost = async () => {
      try {
        setLoading(true);
        // Ensure your 'client' object from Sanity is correctly configured and imported
        const data = await client.fetch(query, { slug });
        if (data) {
          setPost(data);
          setError(null);
        } else {
          setPost(null); // No post found
          setError("Blog post not found.");
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    } else {
      setLoading(false);
      setError("No blog post slug provided in the URL.");
    }
  }, [slug]); // Re-run effect if slug changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Your existing spinner CSS */}
        <p className="ml-4 text-gray-700">Loading blog post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>{error}</p>
        <Link to="/blog" className="mt-4 text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-700">
        <p>Blog post not found.</p>
        <Link to="/blog" className="mt-4 text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Inline CSS based on your website's design */}
      <style>
        {`
          body {
            font-family: "Inter", sans-serif;
            background-color: #f0f2f5; /* Light gray background */
            color: #333;
          }
          .blog-detail-container {
            max-width: 960px;
            margin: 2rem auto;
            padding: 2rem;
          }
          .blog-header-section {
            text-align: center;
            margin-bottom: 2rem;
          }
          .blog-header-section h1 {
            font-size: 2.5rem; 
            color: #720e18;
            margin-bottom: 1rem;
          }
          .blog-meta {
            font-size: 0.9rem;
            color: #720e18;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem 1.5rem;
          }
          .blog-meta span {
            display: flex;
            align-items: center;
          }
          .blog-meta span svg {
            margin-right: 0.5rem;
          }
          .blog-cover-image {
            width: 100%;
            height: auto;
            max-height: 450px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 2rem;
          }
          .blog-content-body h2, .blog-content-body h3, .blog-content-body h4 {
            color: #1f2937;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          .blog-content-body h2 { font-size: 2rem; }
          .blog-content-body h3 { font-size: 1.75rem; }
          .blog-content-body h4 { font-size: 1.5rem; }
          .blog-content-body p {
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          .blog-content-body ul, .blog-content-body ol {
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          .blog-content-body ul li, .blog-content-body ol li {
            margin-bottom: 0.5rem;
          }
          .blog-tags-section {
            margin-top: 2rem;
            border-top: 1px solid #e5e7eb;
            padding-top: 1.5rem;
          }
          .blog-tags-section .tag {
            background-color: #720e18;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 500;
            margin-right: 0.75rem;
            margin-bottom: 0.75rem;
            display: inline-block;
          }
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #720e18;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .blog-detail-container {
              padding: 1rem;
              margin: 1rem auto;
            }
            .blog-header-section h1 {
              font-size: 1.8rem;
            }
          }
        `}
      </style>

      <BreadCrumb
        // image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/about-us-1.webp"
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Our Blogs"
        page="Blog"
      />

      <div className="blog-detail-container">
        {/* Header Section */}
        <div className="blog-header-section">
          <h1>{post.title}</h1>
          <div
            className="blog-meta"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <svg
                style={{ width: "20px", height: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>

              <p style={{ margin: 0 }}>
                By {post.author?.name || "Unknown Author"}
              </p>
            </span>

            <span style={{ display: "flex", alignItems: "center" }}>
              <svg
                style={{ width: "20px", height: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <p
                  style={{
                    whiteSpace: "nowrap",
                    margin: 0,
                    marginRight: ".3rem",
                  }}
                >
                  Published on
                </p>
                <p
                  style={{
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </span>
          </div>
        </div>

        {/* Cover Image */}
        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="blog-cover-image"
          />
        )}

        {/* Blog Content Body */}
        <div className="blog-content-body">
          {post.body && (
            <BlockContent
              blocks={post.body}
              projectId={client.projectId} // Ensure client.projectId is available
              dataset={client.dataset} // Ensure client.dataset is available
              serializers={serializers}
            />
          )}
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="blog-tags-section">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Tags:</h3>
            <div className="flex flex-wrap">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog Button */}
        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            &larr; Back to all Blog Posts
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;
