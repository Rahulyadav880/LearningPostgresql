import { pgClient } from "./db.js";




 
async function main(){
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users");
    console.log(response.rows);
}

main();
