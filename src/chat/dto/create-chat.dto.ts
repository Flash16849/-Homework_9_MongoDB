export class CreateChatDto {
    
    id: string;
    message: string;
    receiver: string;
    sender: string;
    createAt: Date;
    updateAt: Date;
    isDelete: boolean;
}
