import { Request, Response } from 'express';

const users = [
  { id: 1, firstName: 'Jenny' },
  { id: 2, firstName: 'Jisu' },
  { id: 3, firstName: 'Lisa' },
  { id: 4, firstName: 'Rose' },
];

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: 'Users not found' });
  }
};

// post user
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await req.body;
    users.push(newUser);
    return res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: 'User cannot be created' });
  }
};

// put user
export const editUserInfo = async (req: Request, res: Response) => {
  try {
    const editUser = await req.body;
    const index = users.findIndex((user) => user.id === editUser.id);

    if (index !== -1) {
      users[index] = editUser;
      return res.status(200).json(users);
    } else {
      return res.json('cant find the user by this id');
    }
  } catch (err) {
    console.log(err);
  }
};

// delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = await req.params.id;
    const newUserArray = users.filter((user) => user.id.toString() !== id);
    res.status(200).json(newUserArray);
  } catch (err) {
    console.log(err);
  }
};
