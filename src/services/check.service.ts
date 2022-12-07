import { HttpException } from '@exceptions/HttpException';
import { Check } from '@interfaces/check.interface';
import checkModel from '@models/check.model';
import { isEmpty } from '@utils/util';

class CheckService {
    public checks = checkModel;

    public async findAllChecks(): Promise<Check[]> {
        const checks: Check[] = await this.checks.find();
        return checks;
    }

    public async findCheckById(checkId: string): Promise<Check> {
        if (isEmpty(checkId)) throw new HttpException(400, 'CheckId is empty');

        const findCheck: Check = await this.checks.findOne({ _id: checkId });
        if (!findCheck) throw new HttpException(409, 'Check doesn\'t exist');

        return findCheck;
    }

    public async createCheck(checkData: Check): Promise<Check> {
        if (isEmpty(checkData)) throw new HttpException(400, 'checkData is empty');

        const createCheckData: Check = await this.checks.create({ ...checkData });
        return createCheckData;
    }

    public async updateCheck(checkId: string, checkData: Check): Promise<Check> {
        if (isEmpty(checkData)) throw new HttpException(400, 'checkData is empty');

        const updateCheckById: Check = await this.checks.findByIdAndUpdate(checkId, { ...checkData });
        if (!updateCheckById) throw new HttpException(409, 'Check doesn\'t exist');

        return updateCheckById;
    }

    public async deleteCheck(checkId: string): Promise<Check> {
        const deleteCheckById: Check = await this.checks.findByIdAndDelete(checkId);
        if (!deleteCheckById) throw new HttpException(409, 'Check doesn\'t exist');

        return deleteCheckById;
    }
}

export default CheckService;
