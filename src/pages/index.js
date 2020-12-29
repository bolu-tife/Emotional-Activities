import React from "react"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import EmoLayout from "../layouts/emo-layout"
import ThemeToggler from '../ThemeToggler'
import SEO from "../components/seo"
export default function Home() {
  return (
    <Layout>
     <SEO title="Emotivities" />
      <div
      css={css`
            display: inline-block;
            font-size: 30px;
            font-weight: 300;
          `}>
        
         How are you feeling today?
        
        
      </div>

      
      <EmoLayout/>
    </Layout>
  )
}
export { ThemeToggler }
