import { Request, Response } from "express";
import createPropertyService from "../../services/properties/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const {
    value,
    size,
    categoryId,
    address: { district, zipCode, number, city, state },
  } = req.body;

  const createdProperty = await createPropertyService({
    value,
    size,
    categoryId,
    address: { district, zipCode, number, city, state },
  });

  return res.status(201).json(createdProperty);
};

export default createPropertyController;
