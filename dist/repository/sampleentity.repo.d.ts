import { Model } from 'mongoose';
import { sampleentity, sampleentityDocument } from 'src/schemas/sampleentity.schema';
export declare class sampleentityRepo {
    private readonly sampleentityModel;
    constructor(sampleentityModel: Model<sampleentityDocument>);
    create(data: any): Promise<sampleentity>;
    findAll(): Promise<sampleentity[]>;
    update(sampleentityId: any, data: any): Promise<sampleentity>;
    delete(sampleentityId: any): Promise<sampleentity>;
}
