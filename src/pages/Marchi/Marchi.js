import React from "react"
import arexon from "../../images/arexon-3.png"
import liquimoly from "../../images/liquimoly.png"
// import bardal from '../../images/bardal.png'
// import blue from '../../images/blue.png'
// import rothen from '../../images/rothen.png'
// import tunap from '../../images/tunap.png'

import styles from "./marchi.module.css"

const Marchi = () => {
  return (
    <div className={styles.marchi}>
      <div className={styles.marchiBox}>
        <img src={arexon} alt="arexon Logo" />
        <img src={liquimoly} alt="liquimoly Logo" />
      </div>
    </div>
  )
}

export default Marchi
