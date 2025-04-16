import React from 'react';
import "./CharlieDrink.css";

const CharlieDrink = () => {
  return (
    <div>
            <header className='charlie-drink-header'>
               
<div className="h-top">
    <div className="circle" >
    <img src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dad3c38b4909b55d36eaf5_Instagram.svg" alt="instagram" width={16} height={16}></img>
    </div>
    <img src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cea500e52540fc4346f61b_Charlie%20organics.svg" alt="cd logo" width={160} height={68}></img>
<button className="order-btn">ORDER</button>
</div>
<div className="h-bottom">
    <a href="">PRODUCTS</a>
    <a href="">OUR STORY</a>
    <a href="">FAQ</a>
    <a href="">CONTACT</a>
    <a href="">ORDER</a>

</div>

            </header>
            <section className="cd-hero">
                <div className="cd-hero-wrapper">

                <img class="hero-bg" src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif" alt="" sizes="(max-width: 4422px) 100vw, 4422px" data-w-id="4b2aa2c9-4cc5-ed73-db87-c615f79b8c62" loading="lazy" srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-500.png 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-800.png 800w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1080.png 1080w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1600.png 1600w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-2000.png 2000w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif 4422w"/>
<div className="tap"><span>TAP</span></div>
<video className="cd-hero-video" autoPlay loop muted playsInline width={660} height={660}>
    <source src="https://pub-fb9062f1fe2444cd88ae29118656462c.r2.dev/Charlies_casis_%5B001-128%5D-vp9-chrome.webm" type="video/mp4"></source>
    </video>
                </div>
            </section>
    </div>
  )
}

export default CharlieDrink