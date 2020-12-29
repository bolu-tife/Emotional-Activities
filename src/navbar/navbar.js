import React from "react";
import styles from "../navbar/navbar.module.css";

import { useStaticQuery, Link, graphql } from "gatsby"

const Navbar = () => {
    const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return <ul  >
  
  
  <li><Link className={styles.titlelink} to={`/`}><h1>{data.site.siteMetadata.title}</h1></Link></li>
  
  <li className={styles.right} ><Link className={styles.link} to={`/about`}>About</Link></li>
  <li className={`${styles.dropdown} ${styles.right}`}>
   


 <button  aria-haspopup="true" className={`${styles.linkbutton} ${styles.dropbtn}`}  >Emotions</button>
    <div aria-hidden="true" aria-label="Emotions submenu" className={styles.dropdowncontent}>
      <Link to={`/cool/`} role="cool"><span role="img" aria-label="cool">&#128526;</span></Link>
      <Link to={`/happy/`}><span role="img" aria-label="happy">&#128514;</span></Link>
      <Link to={`/smile/`}><span role="img" aria-label="smile">&#128512;</span></Link>
      <Link to={`/neutral/`}><span role="img" aria-label="neutral">&#128528;</span></Link>
      <Link to={`/sad/`}><span role="img" aria-label="sad">&#128532;</span></Link>
      <Link to={`/angry/`}><span role="img" aria-label="angry">&#128544;</span></Link>
    </div>


  </li>
  <li className={styles.right} ><Link className={styles.link} to={`/`}>Home</Link></li>
  
</ul>;
};
export default Navbar;

