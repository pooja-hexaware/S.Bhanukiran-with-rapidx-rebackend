import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sampleentity, sampleentityDocument } from 'src/schemas/sampleentity.schema';

@Injectable()
export class sampleentityRepo {
    constructor(
        @InjectModel(sampleentity.name)
        private readonly sampleentityModel: Model<sampleentityDocument>) {}

    async create(data): Promise<sampleentity> {
        return new this.sampleentityModel(data).save();
    }

    async findAll(): Promise<sampleentity[]> {
        return this.sampleentityModel.find({})
            .exec();
    }

    async update(sampleentityId, data): Promise<sampleentity> {
        const filter = { _id: sampleentityId };
        return this.sampleentityModel.findOneAndUpdate(filter, data);
    }

    async delete(sampleentityId): Promise<sampleentity> {
        const filter = { _id: sampleentityId };
        return this.sampleentityModel.findByIdAndDelete(sampleentityId);
    }
}