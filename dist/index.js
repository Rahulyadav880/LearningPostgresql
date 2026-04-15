import { Client } from "pg";
//const pgClient = new Client("postgresql://neondb_owner:npg_yzAW36oDMxvm@ep-sparkling-sea-anzgw2z9-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")
//if this feels jarring, we can also use it like above
const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_yzAW36oDMxvm",
    port: 5432,
    host: "ep-sparkling-sea-anzgw2z9-pooler.c-6.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users");
    console.log(response.rows);
}
main();
//# sourceMappingURL=index.js.map