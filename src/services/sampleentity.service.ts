import { Injectable } from '@nestjs/common';
import { sampleentityRepo } from '../repository/sampleentity.repo';
import { sampleentity } from '../schemas/sampleentity.schema';

@Injectable()
export class sampleentityService {
    constructor(
        private readonly sampleentityRepo: sampleentityRepo
    ) { }

    async findAll(): Promise<sampleentity[]> {
        return this.sampleentityRepo.findAll();
    }

    async create(data): Promise<sampleentity> {
        data.createddate = new Date();
        return this.sampleentityRepo.create(data);
    }

    async update(sampleentityId, data): Promise<sampleentity> {
        return this.sampleentityRepo.update(sampleentityId, data);
    }

    async delete(sampleentityId): Promise<sampleentity> {
        return this.sampleentityRepo.delete(sampleentityId);
    }
}