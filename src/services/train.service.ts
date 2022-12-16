import { HttpException } from '@exceptions/HttpException';
import { Train } from '@interfaces/train.interface';
import trainModel from '@models/train.model';
import { isEmpty } from '@utils/util';

class TrainService {
    public trains = trainModel;

    public async findAllTrains(): Promise<Train[]> {
        const trains: Train[] = await this.trains.find();
        return trains;
    }

    public async findTrainById(trainId: string): Promise<Train> {
        if (isEmpty(trainId)) throw new HttpException(400, 'TrainId is empty');

        const findTrain: Train = await this.trains.findOne({ _id: trainId });
        if (!findTrain) throw new HttpException(409, 'Train doesn\'t exist');

        return findTrain;
    }

    public async createTrain(trainData: Train): Promise<Train> {
        if (isEmpty(trainData)) throw new HttpException(400, 'trainData is empty');

        const createTrainData: Train = await this.trains.create({ ...trainData });
        return createTrainData;
    }

    public async updateTrain(trainId: string, trainData: Train): Promise<Train> {
        if (isEmpty(trainData)) throw new HttpException(400, 'trainData is empty');

        const updateTrainById: Train = await this.trains.findByIdAndUpdate(trainId, { ...trainData });
        if (!updateTrainById) throw new HttpException(409, 'Train doesn\'t exist');

        return updateTrainById;
    }

    public async deleteTrain(trainId: string): Promise<Train> {
        const deleteTrainById: Train = await this.trains.findByIdAndDelete(trainId);
        if (!deleteTrainById) throw new HttpException(409, 'Train doesn\'t exist');

        return deleteTrainById;
    }

    public async search(str: string): Promise<Train[]> {
        if (isEmpty(str)) throw new HttpException(400, 'String is empty');

        const findTrains: Train[] = await this.trains.find({ destinationPoint: { '$regex': str, '$options': 'i' } });
        if (!findTrains) throw new HttpException(409, 'Trains doesn\'t exist');

        return findTrains;
    }
}

export default TrainService;
