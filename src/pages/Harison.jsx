import  {useEffect} from 'react';
import "./harison.css";
import gsap from 'gsap';
import harison from "../images/harison.avif"
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const Harison = () => {


    useEffect(() => {
        const bottoms = ['.logo-bottom1', '.logo-bottom2', '.logo-bottom3'];
      
        bottoms.forEach((cls, index) => {
          gsap.fromTo(
            cls,
            { scaleY: 0 },
            {
              scaleY: 1,
              opacity: 1,
              transformOrigin: "center center", // or "bottom center" for a rising stretch
              ease: 'none',
              scrollTrigger: {
                trigger: '.logo-wrapper',
                start: `top+=${index } top`, // staggered start
                end: `top+=${index * 100 + 130} top`, // longer scroll window for smoother reveal
                scrub: true,
              }
            }
          );
        });
      }, []);
      

  return (
    <div>
    <header>
        <div className="boxx">
            <div className='
    header'>
<div className="left">
    <img src="https://framerusercontent.com/images/E4ICFTxGKZdn6E6cf8MfRB6M5Ak.png?scale-down-to=512" alt="logo" width={100} height={16} />
</div>
<div className="right">
    <div className="work-box">
        <p className='header-anchor'>Work</p>
    </div>
    <p className='header-anchor'>Archive</p>
    <p className='header-anchor'>Studio</p>
    <p className='header-anchor'>Press</p>
    <p className='header-anchor'>Contact</p>
    <p className='header-anchor'>Buy Template</p>
</div>
</div>
</div>
</header>
    
    <div class="logo-wrapper">
      
  <img src={harison} className="harison logo-top" sizes="max(100vw - 40px, 1px)" width={1452} height={236} />
  <img src={harison} className="harison logo-bottom1" width={1452} height={236} />
  <img src={harison} className="harison logo-bottom2" width={1452} height={236}/>
  <img src={harison} className="harison logo-bottom3"  width={1452} height={236}/>
</div>
</div>
  )
}

export default Harison