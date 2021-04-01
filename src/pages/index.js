import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

// ...GatsbyImageSharpFluid

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects }, allStrapiBlogs:{nodes:blogs} } = data
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink/>
    </Layout>
  )
}

export const query = graphql`
         {
           allStrapiProjects(filter: { feature: { eq: true } }) {
             nodes {
               url
               title
               github
               description
               stack {
                 id
                 title
               }
               id
               image {
                 childImageSharp {
                   fluid {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
             }
           }
           allStrapiBlogs(sort: { fields: date }, limit: 3) {
             nodes {
               slug
               content
               desc
               date(formatString: "MM Do, YYYY")
               id
               title
               category
               image {
                 childImageSharp {
                   fluid {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
             }
           }
         }
       `