import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
// import FeaturedProducts from '../components/Features'

export default function Home() {
  return (
    <Layout>
      <Hero>
        <Banner
          title="Al-Hadi Karpet"
          subtitle="distributor sajadah, permadani, hambal & karpet masjid">
          <Link className="btn-primary" to="/products">
            our products
          </Link>
        </Banner>
      </Hero>
      <Services />
      {/* <FeaturesProducts /> */}
    </Layout>
  )
}

