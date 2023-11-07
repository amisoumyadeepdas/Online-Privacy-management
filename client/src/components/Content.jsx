import React from 'react'
import Sidebar from './Sidebar.jsx';
import styles from "../styles/Home.module.css";
import  P1 from './assets/P1.jpg'
import P2 from './assets/P2.jpg'
import P3 from './assets/P3.jpg'
import P4 from './assets/P4.jpg'
import P5 from './assets/P5.jpg'
import P6 from './assets/P6.jpg'

const Content = () => {
    function downloadImage(e) {
        e.preventDefault();
        const imageSrc = P2; // Use the imported image directly
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'image1.jpg'; // Specify the desired file name
        link.click();
    }
  return (
        <>
            <div className={styles.homeContainer}>
                <Sidebar />
                <div className={styles.content} style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                    <img src={P1} width={"300px"} height={"300px"} onClick={downloadImage} />
                    <img src={P2} width={"300px"} height={"300px"} />
                    <img src={P3} width={"300px"} height={"300px"} onClick={downloadImage} />
                    <img src={P4} width={"300px"} height={"300px"} onClick={downloadImage} />
                    <img src={P5} width={"300px"} height={"300px"}  />
                    <img src={P6} width={"300px"} height={"300px"} onClick={downloadImage} />
                    <img src={P1} width={"300px"} height={"300px"}  />
                    <img src={P4} width={"300px"} height={"300px"}  />
                </div>
            </div> 
        </>
    )
}

export default Content