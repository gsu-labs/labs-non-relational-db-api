import { HttpException } from '@exceptions/HttpException';
import { Passenger } from '@interfaces/passenger.interface';
import passengerModel from '@models/passenger.model';
import { isEmpty } from '@utils/util';

class PassengerService {
    public passengers = passengerModel;

    public async findAllPassengers(): Promise<Passenger[]> {
        const passengers: Passenger[] = await this.passengers.find();
        return passengers;
    }

    public async findPassengerById(passengerId: string): Promise<Passenger> {
        if (isEmpty(passengerId)) throw new HttpException(400, 'PassengerId is empty');

        const findPassenger: Passenger = await this.passengers.findOne({ _id: passengerId });
        if (!findPassenger) throw new HttpException(409, 'Passenger doesn\'t exist');

        return findPassenger;
    }

    public async createPassenger(passengerData: Passenger): Promise<Passenger> {
        if (isEmpty(passengerData)) throw new HttpException(400, 'passengerData is empty');

        const createPassengerData: Passenger = await this.passengers.create({ ...passengerData });
        return createPassengerData;
    }

    public async updatePassenger(passengerId: string, passengerData: Passenger): Promise<Passenger> {
        if (isEmpty(passengerData)) throw new HttpException(400, 'passengerData is empty');

        const updatePassengerById: Passenger = await this.passengers.findByIdAndUpdate(passengerId, { ...passengerData });
        if (!updatePassengerById) throw new HttpException(409, 'Passenger doesn\'t exist');

        return updatePassengerById;
    }

    public async deletePassenger(passengerId: string): Promise<Passenger> {
        const deletePassengerById: Passenger = await this.passengers.findByIdAndDelete(passengerId);
        if (!deletePassengerById) throw new HttpException(409, 'Passenger doesn\'t exist');

        return deletePassengerById;
    }
}

export default PassengerService;
