import IStudent from "./IStudent";
export default class PartTimeStudent implements IStudent {
    readonly sid: number
    snm: string
    per: number
    isPass: boolean
    studentType: string
    constructor(sid: number, snm: string, per: number, isPass: boolean, studentType: string) {
        this.sid = sid
        this.snm = snm
        this.per = per
        this.isPass = isPass
        this.studentType = studentType
    }

    display(): void {
        console.log(`sid: ${this.sid}, snm: ${this.snm}, per: ${this.per}, isPass: ${this.isPass}, studentType: ${this.studentType}`)
    }
}