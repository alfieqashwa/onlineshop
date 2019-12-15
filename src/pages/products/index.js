import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import ProductsContainer from '../../components/ProductsContainer'

export default class ProductIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <ProductsContainer />
      </Layout>
    )
  }
}
