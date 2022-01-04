import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getTodo() {
        return[{id: 1, text: "TEST TEXT TODO", category: 'Health'}]
    }
}