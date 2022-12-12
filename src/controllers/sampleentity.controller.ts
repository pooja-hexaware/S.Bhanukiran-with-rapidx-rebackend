import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { sampleentityDto } from '../dto/sampleentity-dto.dto';
import { sampleentityService } from '../services/sampleentity.service';


@Controller('sampleentity')
export class sampleentityController {
    constructor(private readonly sampleentityService: sampleentityService) { }

    @Post()
    async create(@Body() sampleentityDto: sampleentityDto) {
        const res = this.sampleentityService.create(sampleentityDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.sampleentityService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() sampleentityDto: sampleentityDto) {
        return this.sampleentityService.update(id, sampleentityDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.sampleentityService.delete(id);
    }
}