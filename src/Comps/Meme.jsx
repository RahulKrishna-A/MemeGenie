import "./Meme.css"
import React,{useState} from "react";
export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // function getMemeImage() {
    //     const memesArray = allMemeImages.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     setMemeImage(memesArray[randomNumber].url)
    // }


    return(

        <div id={"meme_container"}>
        <div>
            <div>
            <input type={"text"} id={"Field-1"}/>
            <input type={"text"} id={"Field-2"}/>
            </div>
            <input type={"submit"} value={"Get your Meme Image"}/>
        </div>
            <img src={meme.randomImage} id={"meme_img"}/>
            </div>
    )
}