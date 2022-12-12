import { storeService } from '../services/store.service';
export declare class storeController {
    private readonly storeService;
    constructor(storeService: storeService);
    findAll(): Promise<import("../schemas/store.schema").Store[]>;
    update(id: string): Promise<import("../schemas/store.schema").Store>;
}
