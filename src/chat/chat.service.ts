import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './entities/chat.entity';


@Injectable()
export class ChatService {
  
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {};

  create(createChatDto: CreateChatDto){
    createChatDto.createAt = new Date();
    createChatDto.updateAt = new Date();
    createChatDto.isDelete = false;
    return this.chatModel.create(createChatDto);
    
  }

  findAll(){
    return this.chatModel.find().exec();
  }

  findOne(id: string){
    return this.chatModel.findOne({id: id});
  }

  updateOne(id: string, updateChatDto: UpdateChatDto){
    updateChatDto.updateAt = new Date();
    return this.chatModel.findOneAndUpdate({id: id}, updateChatDto);
  }

  deleteOne(id: string){
    return this.chatModel.findOneAndDelete({id: id});
  }

}
