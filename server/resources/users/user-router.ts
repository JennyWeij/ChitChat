import express from 'express';
import { UserModel } from '../../src';
import { isAdmin } from './isAdmin';
import { getSession, loginUser, logoutUser, registerUser } from './user-controller';

const userRouter = express.Router()

//-------------USER-------------//

//Registrera ny användare
.post("/api/users/register", registerUser)

//Logga in (ej klar)
.post("/api/users/login", loginUser)

//Logga ut (Bör nog vara .delete men testet vill inte)
//.delete("/api/users/logout", logoutUser)
.post("/api/users/logout", logoutUser)

//Hämta kaka
.get("/api/users/session", getSession)

//TODO
//x spara inloggade användare (session, cookie) 
//x logga ut ordentligt, inte bara i kontexten (delete)
//ta emot id i kontexten?
//x skicka tillbaka user-objekt utan att inkludera lösenordet (davids metod)
//skicka ej med isAdmin, validera ?

//-------------ADMIN-------------//

//Hämta alla användare
.get("/api/users", isAdmin, async (req, res) => {
  const users = await UserModel.find({}).select('-password');
  res.json(users);
})

//Ändra användarroll


export default userRouter;