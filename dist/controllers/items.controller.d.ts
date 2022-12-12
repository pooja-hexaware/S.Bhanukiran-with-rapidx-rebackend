import { itemsService } from '../services/items.service';
export declare class itemsController {
    private readonly itemsService;
    constructor(itemsService: itemsService);
    findAll(): Promise<import("../schemas/items.schema").Items[]>;
    update(id: string): Promise<import("../schemas/items.schema").Items>;
}
