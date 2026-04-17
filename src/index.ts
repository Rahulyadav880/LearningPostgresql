import express from "express";
import { pgClient } from "./db.js";

const app = express();
app.use(express.json());

pgClient.connect();

app.post("/signup", async(req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(req.body)
    try{
        
    //these are called placeholders or parameters ($1, $2, $3)
    const insertQuery = await pgClient.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [username, email, password])
    
    res.json({
        message : "You are signed up"
    })

    }catch(e){
        console.log(e)
        res.json({
            message : "error while signing up"
        })
    }
    
})
 
app.listen(3000);

//SQL INJECTION
//const insertQuery = await pgClient.query(`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})`);
//if we write the above syntax for the database query then anyone can inject sql
//via let's say password something like
//  {
//       username : "Rahul",
//       email : "rahul@gmail.com",
//       password : "123123'); DELETE FROM users; INSERT INTO users (username, email, password) VALUES 
//        ('123', '1234', '12345"
//    }

// this query will be injected through the loophole