import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { storeService } from '../services/store.service';

@Controller('store')
export class storeController {
    constructor(private readonly storeService: storeService) { }

    @Get()
    async findAll() {
        return await this.storeService.findAll();
    }

    @Get('/:id')
    update(@Param('id') id: string) {
        return this.storeService.findById(id);
    }

}