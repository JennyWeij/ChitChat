import mongoose from "mongoose";
import { app } from "./app";

// HÄR SKRIVER NI KODEN FÖR ATT ANSLUTA TILL DATABASEN OCH STARTA SERVERN!

async function main() {
  await mongoose.connect(
    "mongodb+srv://madeleinegu:Om9dTiap66EwFguo@chitchat.f8a7vqs.mongodb.net/chitchat"
  );
  console.log("Connected to Database");

  app.listen(3000, () => {
    console.log("server is running: http://localhost:3000");
  });
}

main().catch(console.error);
