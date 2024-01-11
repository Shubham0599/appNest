import { MessageRepository } from "./message.repository";

//below class need the copy of the repository 
export class MessageService {
    //a property stoare the instance of messagerepo
    messageRepo: MessageRepository
    constructor() {
        //serviceis creating its own repository ,dont do this in real app
        this.messageRepo = new MessageRepository();
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