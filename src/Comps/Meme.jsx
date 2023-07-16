import "./Meme.css"
import React,{useState} from "react";



export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [memeData,changememeData] = React.useState("")
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => changememeData(data.data.memes))
    },[])



    function handleChange(e){

        setMeme((prevState)=>{
            return { ...prevState,
                 [e.target.name]:e.target.value
            }
        })
    }

    function handleSubmit(){
        setMeme((prevStat)=> {


            const url = memeData[Math.floor(Math.random()*memeData.length)].url
            return { ...prevStat,
                randomImage:url,

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
            <input type={"submit"} onClick={handleSubmit}  value={"Get your Meme Image"}/>
        </div>
            <div className={"meme"}>
                <p className={"meme_text top"}>{meme.topText}</p>
                <p className={"meme_text bottom"}>{meme.bottomText}</p>
            <img src={meme.randomImage} id={"meme_img"}/>
            </div>
            </div>
    )
}