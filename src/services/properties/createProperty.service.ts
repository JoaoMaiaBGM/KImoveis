import { IPropertyRequest } from "./../../interfaces/properties/index";
import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entities";
import { Category } from "../../entities/category.entities";
import { Address } from "../../entities/address.entities";
import AppError from "../../errors/appError";

const createPropertyService = async ({
  value,
  size,
  categoryId,
  address: { district, zipCode, number, city, state },
}: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const categoryRepository = AppDataSource.getRepository(Category);
  const addressRepository = AppDataSource.getRepository(Address);

  if (state.length > 2) {
    throw new AppError(400, "State must be informed only with initials");
  }

  if (zipCode.length > 8) {
    throw new AppError(400, "ZipCode don't have eight numbers");
  }

  /* const stateLength = properties.find((property) => property.adress.state.length > 2 );
  if(stateLength) {
    throw new AppError(403, "State must be informed only with initials")
  } */

  /* const zipCodeLength = properties.find((property) => property.adress.zipCode.length > 8 );
  if(zipCodeLength) {
    throw new AppError(403, "ZipCode don't have eight numbers")
  } */

  const categoryExists = await categoryRepository.findOneBy({
    id: categoryId,
  });
  if (!categoryExists) {
    throw new AppError(404, "Category not found");
  }

  const adressExists = await addressRepository.findOneBy({
    district: district,
    zipCode: zipCode,
    number: number,
    city: city,
    state: state,
  });
  if (adressExists) {
    throw new AppError(400, "Adress already exists");
  }

  const createdAdress = addressRepository.create({
    district,
    zipCode,
    number,
    city,
    state,
  });

  await addressRepository.save(createdAdress);

  const createdProperty = propertyRepository.create({
    value,
    size,
    address: createdAdress,
    category: {
      id: categoryExists.id,
      name: categoryExists.name,
    },
  });

  await propertyRepository.save(createdProperty);

  return createdProperty;
};

export default createPropertyService;
