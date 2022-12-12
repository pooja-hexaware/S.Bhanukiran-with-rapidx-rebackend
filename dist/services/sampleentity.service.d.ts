import { sampleentityRepo } from '../repository/sampleentity.repo';
import { sampleentity } from '../schemas/sampleentity.schema';
export declare class sampleentityService {
    private readonly sampleentityRepo;
    constructor(sampleentityRepo: sampleentityRepo);
    findAll(): Promise<sampleentity[]>;
    create(data: any): Promise<sampleentity>;
    update(sampleentityId: any, data: any): Promise<sampleentity>;
    delete(sampleentityId: any): Promise<sampleentity>;
}
