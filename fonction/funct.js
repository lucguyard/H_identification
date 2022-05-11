const bodyParser = require ("body-parser");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");
const express = require ('express');
const Post = require("../models/post");
const app = express();



exports.register = async (req, res) => {
    fs.readFile(__dirname + "/register.html")
    .then((contents) => {
        res.setHeader("Content-Type", "text/html").writeHead(200).end(contents);      
    })
    .catch((err) => {
        res.setHeader("Content-Type", "text/html").writeHead(500).end('wow');
    })
}

exports.createPost = async (req,res) =>{
    const{name ,password, password2} = req.body;
    let err = []
    let hash = await bcrypt.hash(password,10);
    let post = new Post(name, hash); 
    let searchUser = await post.searchName();
    console.log(searchUser)
    if(!name || !password || !password2)
    {
        err.push({msg : "tu n'as pas tout remplis"});
        console.log("tu n'as pas tout remplis");
    }
    else if(password != password2)
    {
        err.push({msg : "tu n'as pas rentré le meme mot de passe"});
        console.log("tu n'as pas rentré le meme mot de passe");

    }
    else if (password.length < 6)
    {
        err.push({msg : "mdp trop court"});
        console.log("mot de pass trop court");
    }
    else if(searchUser){
        console.log("deja le même nom dans la base");
    }
    else
    {
    post = await post.save();
   // console.log (hash);   //console.log (password);
    res.send({name : name});
    }

}

exports.login = async (req,res) => {
    fs.readFile(__dirname + "/login.html")
    .then((contents) => {
        res.setHeader("Content-Type", "text/html").writeHead(200).end(contents);      
    })
    .catch((err) => {
        res.setHeader("Content-Type", "text/html").writeHead(500).end('wow');
    })


}

exports.connection = async (req,res) => {
    let {name ,password} = req.body;
    console.log( name);
    



}