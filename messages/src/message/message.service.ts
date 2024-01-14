import { MessageRepository } from "./message.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService {  
    messageRepo: MessageRepository
    constructor(messageRepo:MessageRepository) {
        //used beter approach to use inversion of controll
        this.messageRepo = messageRepo
    }
    findAll() {
        return this.messageRepo.findAll();
    }
    findOne(id: string) {
        return this.messageRepo.findOne(id);
    }
    create(content: string) {
        return this.messageRepo.create(content);
    }
}