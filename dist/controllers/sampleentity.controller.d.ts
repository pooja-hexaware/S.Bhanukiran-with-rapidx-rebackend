import { sampleentityDto } from '../dto/sampleentity-dto.dto';
import { sampleentityService } from '../services/sampleentity.service';
export declare class sampleentityController {
    private readonly sampleentityService;
    constructor(sampleentityService: sampleentityService);
    create(sampleentityDto: sampleentityDto): Promise<import("../schemas/sampleentity.schema").sampleentity>;
    findAll(): Promise<import("../schemas/sampleentity.schema").sampleentity[]>;
    update(id: string, sampleentityDto: sampleentityDto): Promise<import("../schemas/sampleentity.schema").sampleentity>;
    delete(id: string): Promise<import("../schemas/sampleentity.schema").sampleentity>;
}
