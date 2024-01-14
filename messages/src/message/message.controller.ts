import { Body, Controller, Get, Param, Post,NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    messageService: MessageService

    constructor(messageService:MessageService){
        this.messageService =messageService
    }
    @Get()
    listMessage() {
        console.log("List all messages");
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        //console.log(body);
        return this.messageService.create(body.content);
    }
    @Get('/:id')
    async getMessage(@Param('id') param: string) {
        console.log(param);
        var message=await this.messageService.findOne(param);
        if(!message){
            throw new NotFoundException("No meesage Found Matching this id")
        }
        return message;
    }

}
