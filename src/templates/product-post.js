import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

// import { kebabCase } from "lodash";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";

import defaultBcg from "../../static/img/images/room-1.jpeg";

export const ProductPostTemplate = ({
  content,
  contentComponent,
  title,
  featuredimage,
  price,
  tags,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <StyledHero img={featuredimage.childImageSharp.fluid.src || defaultBcg}>
        <Banner title={title}>
          <Link to="/products" className="btn-primary">
            back to products
          </Link>
        </Banner>
      </StyledHero>
      {/* === START IMAGES LIST === */}
      <section className="single-room">
        <div className="single-room-images">
          <img src={featuredimage.childImageSharp.fluid.src} alt={title} />
        </div>
        {/* === END IMAGES LIST === */}
        <div className="single-room-info">
          {helmet || ""}
          <article className="desc">
            <h3>details</h3>
            <p>description</p>
            <PostContent content={content} />
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : Rp{price}</h6>
            <h6>size : size SQFT</h6>
            {/* <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6> */}
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {tags.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

ProductPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  helmet: PropTypes.object
};

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Products">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        price={post.frontmatter.price}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProductPost;

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        price
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
