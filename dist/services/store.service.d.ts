import { storeRepo } from '../repository/store.repo';
import { Store } from '../schemas/store.schema';
export declare class storeService {
    private readonly storeRepo;
    constructor(storeRepo: storeRepo);
    findAll(): Promise<Store[]>;
    findById(storeId: any): Promise<Store>;
}
