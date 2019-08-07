import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not found</h1>
    <p>
      <Link to="/">try going back to the home page?</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
