import express from "express";
import { Company } from "../models/Company.js";
const router = express.Router();

/* Get company */
router.get('/', async function(req, res, next) {
  try {
    const company = await Company.find({});
    res.send(company);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Create company */
router.post('/', async function(req, res, next) {
  const { name, vacancies } = req.body;
  const company = new Company({ name, vacancies });
 
  try {
    await company.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Delete company */
router.delete('/:id', async function(req, res, next) {
  const { id } = req.params;
 
  try {
    await Company.deleteOne({ _id: id });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Add vacancy */
router.post('/:id/vacancy', async function(req, res, next) {
  const { vacancy } = req.body;
  const { id } = req.params;

  try {
    const company = await Company.findById(id).exec();
    company.vacancies.push(vacancy);
    await company.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Update vacancy */
router.put('/:companyId/vacancy/:id', async function(req, res, next) {
  const { vacancy: { position, description, city, experience, salary } } = req.body;
  const { companyId, id } = req.params;
  try {
    const company = await Company.findById(companyId).exec();
    company.vacancies = company.vacancies.map((el) => {
      if (el._id.equals(id)) {
        el.city = city || el.city;
        el.position = position || el.position;
        el.description = description || el.description;
        el.experience = experience || el.experience;
        el.salary = salary || el.salary;
      }
      return el;
    });
    await company.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Delete vacancy */
router.delete('/:companyId/vacancy/:id', async function(req, res, next) {
  const { companyId, id } = req.params;
  try {
    const company = await Company.findById(companyId).exec();
    company.vacancies = company.vacancies.filter((el) => !el._id.equals(id));
    await company.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Send respond to company */
router.post('/:id/respond', async function(req, res, next) {
  const { respond } = req.body;
  const { id } = req.params;

  try {
    const company = await Company.findById(id).exec();
    company.responded.push(respond);
    await company.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

/* Send respond to company */
router.post('/:id/review', async function(req, res, next) {
  const { review } = req.body;
  const { id } = req.params;

  try {
    const company = await Company.findById(id).exec();
    company.reviews.push(review);
    await company.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

export default router;
