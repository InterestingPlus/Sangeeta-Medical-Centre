import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import BlogSection from "../components/BlogSection";

const BlogPage = () => {
  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/about-us-1.webp"
        title="Blog"
        page="Blog"
      />
      <BlogSection />
    </>
  );
};

export default BlogPage;
