import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { client } from "../config/sanityClient";

import "./BlogSection.scss";

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// BlogPostCard Component
const BlogPostCard = ({ post }) => {
  return (
    <div className="blog-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/blog/${post.slug.current}`}>
        <img
          src={
            post.mainImage?.asset?.url ||
            "https://placehold.co/600x400/cccccc/ffffff?text=Blog+Image"
          }
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
          <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          By {post.author?.name} on {formatDate(post.publishedAt)}
        </p>
        {/* Displaying first few words of the body or a summary */}
        <p className="text-gray-700 text-base line-clamp-3">
          {post.body && post.body[0]?.children[0]?.text
            ? `${post.body[0].children[0].text.substring(0, 100)}...`
            : "No description available."}
        </p>
        <div className="mt-4 blog-tags">
          {post.tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${post.slug.current}`}
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

// BlogPage Component
const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sanity query to fetch blog posts
    const blogQuery = `*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{
          url
        }
      },
      author->{name}, // Fetch author's name
      body, // Fetch block content, you'll need to render this with Portable Text later
      tags
    }`;

    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        // Using the actual client.fetch assuming it's correctly configured
        const data = await client.fetch(blogQuery);
        console.log("blogQuery: ",data);
        
        setBlogPosts(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Your existing spinner CSS */}
        <p className="ml-4 text-gray-700">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="blog-page-container">
        <div className="section-title rounded-lg">
          <h1 className="text-anime-style-3 heading" data-cursor="-opaque">
            Our Latest Insights & News
          </h1>
          <p className="para">
            Stay informed with the latest from Sangeeta Orthopedic Hospital.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
          {blogPosts.length === 0 && !loading && !error && (
            <div className="col-span-full text-center py-10 text-gray-600">
              No blog posts found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
