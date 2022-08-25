import Head from 'next/head'

import Layout from '../components/common/Layout'
import SearchFilter from '../components/core/search-filter'
import PropertyList from '../components/core/property-list'

const Home = () => {

  return (
    <div className=" py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SearchFilter />
        <PropertyList />
      </Layout>
      
    </div>
  )
}

export default Home



