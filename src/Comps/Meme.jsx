import "./Meme.css"
import React,{useState} from "react";
export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(e){
        setMeme((prevState)=>{
            return { ...prevState,
                 [e.target.name]:e.target.value
            }
        })
    }



    return(

        <div id={"meme_container"}>
        <div>
            <div>
            <input onChange={handleChange} value={meme.topText} name={"topText"} type={"text"} id={"Field-1"} placeholder={"Top text"}/>
            <input onChange={handleChange} value={meme.bottomText} name={"bottomText"} type={"text"} id={"Field-2"} placeholder={"Bottom text"}/>
            </div>
            <input type={"submit"} value={"Get your Meme Image"}/>
        </div>
            <div className={"meme"}>
                <p className={"meme_text top"}>Hello everyone</p>
                <p className={"meme_text bottom"}>How are you</p>
            <img src={meme.randomImage} id={"meme_img"}/>
            </div>
            </div>
    )
}