import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProductList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="roomslist">
        <div className="roomslist-center">
        {
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article className="room">
                <div className="img-container">
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  ) : null}
                  <div className="price-top">
                    <h6><span styled={{
                      fontSize: "small"
                    }}>Rp</span>{post.frontmatter.price}</h6>
                    <p>in stock</p>
                  </div>
                  <Link
                    className="btn-primary room-link"
                    to={post.fields.slug}
                  >
                    features
                  </Link>
                </div>
                <p className="room-info">{post.frontmatter.title}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

ProductList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                price
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductList data={data} count={count} />}
  />
)
