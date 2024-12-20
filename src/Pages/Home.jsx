import React from 'react'
import './Home.css';
import bgvideo from '../assets/bgvideo.mp4';
import imgfarmer from '../assets/farmerimg.webp';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const transitionElements = document.querySelectorAll('.transition');
transitionElements.forEach((el) => observer.observe(el));


function Home() {
    return (
        <>
            <div className='videosection'>
                <div className="overlay"></div>
                <video src={bgvideo} autoPlay loop muted id=" indexvideo"></video>
                <div className='content'>
                    <h1>UrbanFarm</h1>
                    <h3>some text i want to check the display!!
                        hello how are you!!

                    </h3>
                </div>
            </div>

            {/* <div className='container'>
                <div className=' block block1'>1</div>
                <div className='block block2'>2</div>


                <div className='block block3'>3</div>
                <div className='block block4'>4</div>


                <div className='block block5'>5</div>
                <div className='block block6'>6</div>


                <div className='block block7'>7</div>
            </div> */}

            <div className='introduction'>
                <div>
                    <h1>something  about farming some para
                        asbcjhkasfgakdaskkjsgaskgaskjdgsakdashdas,jhfas.
                        dsajfascgsahdgaslhcdlscaljhc
                    </h1>
                    <h2>
                        farming farming farming
                    </h2>
                </div>

                <div className='imgfarmer'>
                    {/* <img src={imgfarmer} alt="img of farmer" /> */}
                </div>
            </div>

            <div className='section3'>


            </div>

        </>
    )
}

export default Home
