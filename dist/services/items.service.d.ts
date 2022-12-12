import { itemsRepo } from 'src/repository/items.repo';
import { Items } from '../schemas/items.schema';
export declare class itemsService {
    private readonly itemsRepo;
    constructor(itemsRepo: itemsRepo);
    findAll(): Promise<Items[]>;
    findById(itemId: any): Promise<Items>;
}
