'use client'
import './TechHome.css'
export default  function TechHome(){
    const id='about'

    return(
        <div className=" w-full md:h-screen h-max" style={{background:'#111'}}>
            <div className="wrapper w-full h-full flex items-center justify-center">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className='flex items-center justify-center flex-col gap-10 my-5'>
                    <h1 className="font-bold md:text-8xl text-3xl">AQSA TECH</h1>
            <h2 className="font-normal text-3xl">provides</h2>
            <h3 className="font-bold md:text-6xl text-2xl">Dynamic and Interactive Websites</h3>
            <button
            onClick={()=>{
                const el=document.querySelector(`#${id}`);
                el?.scrollIntoView({
                    behavior:"smooth",
                    block:"start",
                    inline:"start",
                })
            }}
             className="bg-pink-600 px-30 py-10 rounded-full font-semibold text-xl cursor-pointer">View more</button>


                </div>
            </div>
            
        </div>
    )
}