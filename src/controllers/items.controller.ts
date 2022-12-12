import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { itemsService } from '../services/items.service';

@Controller('items')
export class itemsController {
    constructor(private readonly itemsService: itemsService) { }

    @Get()
    async findAll() {
        return await this.itemsService.findAll();
    }

    @Get('/:id')
    update(@Param('id') id: string) {
        return this.itemsService.findById(id);
    }

}