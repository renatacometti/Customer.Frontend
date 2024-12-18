import { MessagesTypes } from "../enum/messages-type.enum";

export interface Message {
    type: MessagesTypes;
    description: string;
}