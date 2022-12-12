import { HttpException } from '@exceptions/HttpException';
import { Driver } from '@interfaces/driver.interface';
import driverModel from '@models/driver.model';
import { isEmpty } from '@utils/util';

class DriverService {
    public drivers = driverModel;

    public async findAllDrivers(): Promise<Driver[]> {
        const drivers: Driver[] = await this.drivers.find();
        return drivers;
    }

    public async findDriverById(driverId: string): Promise<Driver> {
        if (isEmpty(driverId)) throw new HttpException(400, 'DriverId is empty');

        const findDriver: Driver = await this.drivers.findOne({ _id: driverId });
        if (!findDriver) throw new HttpException(409, 'Driver doesn\'t exist');

        return findDriver;
    }

    public async createDriver(driverData: Driver): Promise<Driver> {
        if (isEmpty(driverData)) throw new HttpException(400, 'driverData is empty');

        const createDriverData: Driver = await this.drivers.create({ ...driverData });
        return createDriverData;
    }

    public async updateDriver(driverId: string, driverData: Driver): Promise<Driver> {
        if (isEmpty(driverData)) throw new HttpException(400, 'driverData is empty');

        const updateDriverById: Driver = await this.drivers.findByIdAndUpdate(driverId, { ...driverData });
        if (!updateDriverById) throw new HttpException(409, 'Driver doesn\'t exist');

        return updateDriverById;
    }

    public async deleteDriver(driverId: string): Promise<Driver> {
        const deleteDriverById: Driver = await this.drivers.findByIdAndDelete(driverId);
        if (!deleteDriverById) throw new HttpException(409, 'Driver doesn\'t exist');

        return deleteDriverById;
    }
}

export default DriverService;
