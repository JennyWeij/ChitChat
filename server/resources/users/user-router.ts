import express from 'express';
import { UserModel } from '../../src';
import { loginUser, registerUser } from './user-controller';

const userRouter = express.Router()

//Hämta alla användare
.get("/api/users", async (req, res) => {
  const users = await UserModel.find({})
  res.json(users);
})

//Registrera ny användare
.post("/api/users/register", registerUser)

//Logga in (ej klar)
.post("/api/users/login", loginUser)

//TODO
//spara inloggade användare (session, cookie)
//logga ut ordentligt, inte bara i kontexten (delete)
//skicka id till kontexten
//skicka tillbaka user-objekt utan att inkludera lösenordet (davids metod)
//skicka ej med isAdmin, validera 

export default userRouter;