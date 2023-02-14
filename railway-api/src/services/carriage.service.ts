import { HttpException } from '@exceptions/HttpException';
import { Carriage } from '@interfaces/carriage.interface';
import carriageModel from '@models/carriage.model';
import { isEmpty } from '@utils/util';

class CarriageService {
    public carriages = carriageModel;

    public async findAllCarriages(): Promise<Carriage[]> {
        const carriages: Carriage[] = await this.carriages.find();
        return carriages;
    }

    public async findCarriageById(carriageId: string): Promise<Carriage> {
        if (isEmpty(carriageId)) throw new HttpException(400, 'CarriageId is empty');

        const findCarriage: Carriage = await this.carriages.findOne({ _id: carriageId });
        if (!findCarriage) throw new HttpException(409, 'Carriage doesn\'t exist');

        return findCarriage;
    }

    public async createCarriage(carriageData: Carriage): Promise<Carriage> {
        if (isEmpty(carriageData)) throw new HttpException(400, 'carriageData is empty');

        const createCarriageData: Carriage = await this.carriages.create({ ...carriageData });
        return createCarriageData;
    }

    public async updateCarriage(carriageId: string, carriageData: Carriage): Promise<Carriage> {
        if (isEmpty(carriageData)) throw new HttpException(400, 'carriageData is empty');

        const updateCarriageById: Carriage = await this.carriages.findByIdAndUpdate(carriageId, { ...carriageData });
        if (!updateCarriageById) throw new HttpException(409, 'Carriage doesn\'t exist');

        return updateCarriageById;
    }

    public async deleteCarriage(carriageId: string): Promise<Carriage> {
        const deleteCarriageById: Carriage = await this.carriages.findByIdAndDelete(carriageId);
        if (!deleteCarriageById) throw new HttpException(409, 'Carriage doesn\'t exist');

        return deleteCarriageById;
    }


    public async findCarriagesByCost(maxCost: number): Promise<Carriage[]> {
        if (isEmpty(maxCost)) throw new HttpException(400, 'Carriage cost is empty');

        const findTrains: Carriage[] = await this.carriages.find({ price: { $lt: maxCost } });
        if (!findTrains) throw new HttpException(409, 'Carriages doesn\'t exist');

        return findTrains;
    }

    public async findAllTrainsSortByLuggageNumber(): Promise<Carriage[]> {
        const carriages: Carriage[] = await this.carriages.find().sort({ luggageNumber: 1 });
        return carriages;
    }
}

export default CarriageService;
