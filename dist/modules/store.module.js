"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const store_controller_1 = require("../controllers/store.controller");
const store_service_1 = require("../services/store.service");
const store_repo_1 = require("../repository/store.repo");
const store_schema_1 = require("../schemas/store.schema");
let storeModule = class storeModule {
};
storeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: store_schema_1.Store.name, schema: store_schema_1.StoreSchema }])
        ],
        controllers: [store_controller_1.storeController],
        providers: [store_service_1.storeService, store_repo_1.storeRepo],
        exports: [store_service_1.storeService, store_repo_1.storeRepo]
    })
], storeModule);
exports.storeModule = storeModule;
//# sourceMappingURL=store.module.js.map