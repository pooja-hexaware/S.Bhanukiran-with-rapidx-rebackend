"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleentityModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sampleentity_controller_1 = require("../controllers/sampleentity.controller");
const sampleentity_service_1 = require("../services/sampleentity.service");
const sampleentity_repo_1 = require("../repository/sampleentity.repo");
const sampleentity_schema_1 = require("../schemas/sampleentity.schema");
let sampleentityModule = class sampleentityModule {
};
sampleentityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: sampleentity_schema_1.sampleentity.name, schema: sampleentity_schema_1.sampleentitySchema }])
        ],
        controllers: [sampleentity_controller_1.sampleentityController],
        providers: [sampleentity_service_1.sampleentityService, sampleentity_repo_1.sampleentityRepo],
        exports: [sampleentity_service_1.sampleentityService, sampleentity_repo_1.sampleentityRepo]
    })
], sampleentityModule);
exports.sampleentityModule = sampleentityModule;
//# sourceMappingURL=sampleentity.module.js.map