import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {

  @Prop()
  id: string;

  @Prop()
  message: string;

  @Prop()
  receiver: string;

  @Prop()
  sender: string;

  @Prop()
  createAt: Date;

  @Prop()
  updateAt: Date;

  @Prop()
  isDelete: boolean;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
