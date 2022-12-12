import { HttpException } from '@exceptions/HttpException';
import { Bus } from '@interfaces/bus.interface';
import busModel from '@models/bus.model';
import { isEmpty } from '@utils/util';

class BusService {
    public buses = busModel;

    public async findAllBuses(): Promise<Bus[]> {
        const buses: Bus[] = await this.buses.find();
        return buses;
    }

    public async findBusById(busId: string): Promise<Bus> {
        if (isEmpty(busId)) throw new HttpException(400, 'BusId is empty');

        const findBus: Bus = await this.buses.findOne({ _id: busId });
        if (!findBus) throw new HttpException(409, 'Bus doesn\'t exist');

        return findBus;
    }

    public async createBus(busData: Bus): Promise<Bus> {
        if (isEmpty(busData)) throw new HttpException(400, 'busData is empty');

        const createBusData: Bus = await this.buses.create({ ...busData });
        return createBusData;
    }

    public async updateBus(busId: string, busData: Bus): Promise<Bus> {
        if (isEmpty(busData)) throw new HttpException(400, 'busData is empty');

        const updateBusById: Bus = await this.buses.findByIdAndUpdate(busId, { ...busData });
        if (!updateBusById) throw new HttpException(409, 'Bus doesn\'t exist');

        return updateBusById;
    }

    public async deleteBus(busId: string): Promise<Bus> {
        const deleteBusById: Bus = await this.buses.findByIdAndDelete(busId);
        if (!deleteBusById) throw new HttpException(409, 'Bus doesn\'t exist');

        return deleteBusById;
    }

    public async findBusesByMileage(maxMileage: number): Promise<Bus[]> {
        if (isEmpty(maxMileage)) throw new HttpException(400, 'Bus mileage is empty');

        const findBuses: Bus[] = await this.buses.find({ mileage: { $lt: maxMileage } });
        if (!findBuses) throw new HttpException(409, 'Buses doesn\'t exist');

        return findBuses;
    }

    public async search(destination: string): Promise<Bus[]> {
        if (isEmpty(destination)) throw new HttpException(400, 'Destination is empty');

        const findBuses: Bus[] = await this.buses.find({ destinationPoint: { '$regex': destination, '$options': 'i' } });
        if (!findBuses) throw new HttpException(409, 'Buses doesn\'t exist');

        return findBuses;
    }

    public async findAllBusesSortByYear(): Promise<Bus[]> {
        const buses: Bus[] = await this.buses.find().sort({ year: 1 });
        return buses;
    }
}

export default BusService;
