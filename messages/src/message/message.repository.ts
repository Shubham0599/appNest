import { Injectable } from "@nestjs/common";
import { readFile,writeFile } from "fs/promises";

@Injectable()
export class MessageRepository{

    async findOne(id:string){
        var content= await readFile('message.json','utf8')
        var meassge= JSON.parse(content);
        return meassge[id]
    }
    async findAll(){
        var content= await readFile('message.json','utf8')
        var meassge= JSON.parse(content);
        return meassge
    }
    async create(newmessage:string){
        var content= await readFile('message.json','utf8')
        var meassge= JSON.parse(content);
        var id=Math.floor(Math.random()*999)
        meassge[id]={id,content:newmessage}
        await writeFile('message.json',JSON.stringify(meassge));
    }
}