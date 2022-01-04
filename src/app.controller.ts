import { AppService } from './app.service';
import { Controller, Get } from "@nestjs/common";


@Controller('/api')
export class ApiController{
    constructor(private appService: AppService) {}
    @Get("/todo")
    getTodo() {
        return this.appService.getTodo()
    }
}