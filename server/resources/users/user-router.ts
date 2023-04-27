import express from 'express';
import { UserModel } from '../../src';
import { isAdmin } from './isAdmin';
import { changeUserRole, deleteUser, getSession, loginUser, logoutUser, registerUser } from './user-controller';

const userRouter = express.Router()

//-------------USER-------------//

//Registrera ny användare
.post("/api/users/register", registerUser)

//Logga in
.post("/api/users/login", loginUser)

//Logga ut 
.post("/api/users/logout", logoutUser)

//Hämta session
.get("/api/users/session", getSession)

//-------------ADMIN-------------//

//Hämta alla användare
.get("/api/users", isAdmin, async (req, res) => {
  const users = await UserModel.find({}).select('-password');
  res.json(users);
})

//Ändra användarroll
.put("/api/users/:id", isAdmin, changeUserRole)

//Ta bort användare
.delete("/api/users/:id", isAdmin, deleteUser)


export default userRouter;