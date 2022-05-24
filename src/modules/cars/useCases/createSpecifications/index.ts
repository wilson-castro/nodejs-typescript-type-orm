import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };