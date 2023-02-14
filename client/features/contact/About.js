/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
    return(
        <div>
            <h1 className="text-salmon text-5xl text-center font-bold underline mt-6 mb-4">Our Founders</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center mb-10">
            <div className="flex flex-col w-80 border-2 border-salmon rounded shadow-md text-center p-4 my-2 mx-4">
                <img src="https://media.licdn.com/dms/image/D5603AQEnswIkasYZpg/profile-displayphoto-shrink_800_800/0/1670797469174?e=1681344000&v=beta&t=Vq3AXf3iSAFL28uzKvytsFg9psB4lIASeTmk0Kbdxoc" className="rounded-full m-2 border border-salmon"></img>
                <hr></hr>
                <h1 className="text-stone-500 text-3xl mt-2">Andrew Spencer</h1>
                <p className="text-stone-400 mt-2">Full-stack developer based out of Jacksonville Florida who enjoys making intuitive applications and working alongside talented people on challenging projects.</p>
                <a href="https://www.linkedin.com/in/andrewspencer44/" className="mt-2 underline text-salmon hover:text-rose-300 font-bold">Andrew's LinkedIn</a>
            </div>
            <div className="flex flex-col w-80 border-2 border-salmon rounded shadow-md text-center p-4 my-2 mx-4">
                <img src="https://media.licdn.com/dms/image/C4E03AQFicE_679c67g/profile-displayphoto-shrink_800_800/0/1563983597235?e=1681344000&v=beta&t=Ox_QZa8zd9EgFHhgcQFx1Q5vXFRwHu8u56cGejCSm2Q" className="rounded-full m-2 border border-salmon"></img>
                <hr></hr>
                <h1 className="text-stone-500 text-3xl mt-2">David Zeng</h1>
                <p className="text-stone-400 mt-2">With so many programming languages and softwares that are available (and many that have yet to be invented!), there is never a shortage of things to learn and create. My interest in continuing down this journey of building my knowledge of all things programming is super exciting!</p>
                <a href="https://www.linkedin.com/in/davidzeng-hello/" className="mt-2 underline text-salmon hover:text-rose-300 font-bold">David's LinkedIn</a>
            </div>
            <div className="flex flex-col w-80 border-2 border-salmon rounded shadow-md text-center p-4 my-2 mx-4">
                <img src="https://www.linkpicture.com/q/dj_1.jpg" type="image" className="rounded-full m-2 border border-salmon"></img>
                <hr></hr>
                <h1 className="text-stone-500 text-3xl mt-2">DJ Douglas</h1>
                <p className="text-stone-400 mt-2">Full time fantasy and sci-fi nerd with an avid love of software development, videogames, and all forms of animation.</p>
                <a href="https://www.linkedin.com/in/dj-dj/" className="mt-2 underline text-salmon hover:text-rose-300 font-bold">DJ's LinkedIn</a>
            </div>
            <div className="flex flex-col w-80 border-2 border-salmon rounded shadow-md text-center p-4 my-2 mx-4">
                <img src="https://www.linkpicture.com/q/IMG_3839.jpg" className="rounded-full m-2 border border-salmon"></img>
                <hr></hr>
                <h1 className="text-stone-500 text-3xl mt-2">Josephine Hightower</h1>
                <p className="text-stone-400 mt-2">has a passion for front-end development, travel, and chili cheese dogs. Believes she's the main character when she looks out the window while it's raining. You'll likely find Josephine posting photos of her travels along with an obnoxious amount of food.</p>
                <a href="https://www.linkedin.com/in/johightower/" className="mt-2 underline text-salmon hover:text-rose-300 font-bold">Josephine's LinkedIn</a>
            </div>
            <div className="flex flex-col w-80 border-2 border-salmon rounded shadow-md text-center p-4 my-2 mx-4">
                <img src="https://i.ibb.co/xqPvtmQ/maria.jpg" className="rounded-full m-2 border border-salmon"></img>
                <hr></hr>
                <h1 className="text-stone-500 text-3xl mt-2">Maria Segarra</h1>
                <p className="text-stone-400 mt-2">Software engineer from NYC,  who enjoys designing and creating apps., while collaborating with others and is looking forward to start a career as a software engineer.</p>
                <a href="https://www.linkedin.com/in/maria-segarra-37782925a/" className="mt-2 underline text-salmon hover:text-rose-300 font-bold">Maria's LinkedIn</a>
            </div>
        </div>
    </div>
    );
};

export default About;