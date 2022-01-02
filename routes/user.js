import express from "express";
import { User } from "../models/User.js";
const router = express.Router();

/* Get users */
router.get('/', async function(req, res, next) {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Create users */
router.post('/', async function(req, res, next) {
  const { name, cv } = req.body;
  const user = new User({ name, cv });
 
  try {
    await user.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Delete users */
router.delete('/:id', async function(req, res, next) {
  const { id } = req.params;
 
  try {
    await User.deleteOne({ _id: id });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Update users cv */
router.put('/:userId/cv/:id', async function(req, res, next) {
  const { cv: { email, position, skills, description, experience, salary } } = req.body;
  const { userId, id } = req.params;
  try {
    const user = await User.findById(userId).exec();
    user.cv = user.cv.map((el) => {
      if (el._id.equals(id)) {
        el.email = email;
        el.position = position;
        el.skills = skills;
        el.description = description;
        el.experience = experience;
        el.salary = salary;
      }
      return el;
    });
    await user.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Send respond to users */
router.post('/:id/respond', async function(req, res, next) {
  const { respond } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(id).exec();
    user.responded.push(respond);
    await user.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

export default router;
