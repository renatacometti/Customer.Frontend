import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from '../interfaces/message';
import { MessagesTypes } from '../enum/messages-type.enum';


@Injectable({
  providedIn: 'root'
})
export class ToastService {


  constructor(
    private messageService: MessageService
  ) { }

  toast(item: Message | any, type: MessagesTypes | number = MessagesTypes.default ): Message | Message[] | null {

      const toast: Message = {description: item, type};

      switch (type) {
        case MessagesTypes.error: this.messageService.add({ severity: 'error', summary: 'Erro', detail: toast.description });
        break;
        case MessagesTypes.warning: this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: toast.description });
        break;
        case MessagesTypes.success: this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: toast.description });
        break;

        default: this.messageService.add({ severity: 'info', summary: 'Informação', detail: toast.description });

      }

      return toast;
  }

}
