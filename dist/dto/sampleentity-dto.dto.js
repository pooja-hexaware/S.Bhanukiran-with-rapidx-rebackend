"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleentityDto = void 0;
const openapi = require("@nestjs/swagger");
class sampleentityDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, idno: { required: true, type: () => String }, email: { required: true, type: () => String }, mobile: { required: true, type: () => String }, address: { required: true, type: () => String } };
    }
}
exports.sampleentityDto = sampleentityDto;
//# sourceMappingURL=sampleentity-dto.dto.js.map