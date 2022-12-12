import { Injectable } from '@nestjs/common';
import { storeRepo } from '../repository/store.repo';
import { Store } from '../schemas/store.schema';

@Injectable()
export class storeService {
    constructor(
        private readonly storeRepo: storeRepo
    ) { }

    async findAll(): Promise<Store[]> {
        return this.storeRepo.findAll();
    }

    async findById(storeId): Promise<Store> {
        return this.storeRepo.findById(storeId);
    }

}