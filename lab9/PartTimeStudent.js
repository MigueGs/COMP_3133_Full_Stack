"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PartTimeStudent = /** @class */ (function () {
    function PartTimeStudent(sid, snm, per, isPass, studentType) {
        this.sid = sid;
        this.snm = snm;
        this.per = per;
        this.isPass = isPass;
        this.studentType = studentType;
    }
    PartTimeStudent.prototype.display = function () {
        console.log("sid: ".concat(this.sid, ", snm: ").concat(this.snm, ", per: ").concat(this.per, ", isPass: ").concat(this.isPass, ", studentType: ").concat(this.studentType));
    };
    return PartTimeStudent;
}());
exports.default = PartTimeStudent;
