import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatstreamSpringbootGraalvmService } from '../services/chatstream-springboot-graalvm.service';
import { Subscription } from 'rxjs';
import { Message } from '../model/message';
import {concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-device-list',
  templateUrl: './chatstream-springboot-graalvm.component.html',
  styleUrls: ['./chatstream-springboot-graalvm.component.css']
})
export class ChatstreamSpringbootGraalvmComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  newMessage = '';
  nativeImage = 'Is it a graalvm native image?';
  private chatSubscription: Subscription;

  constructor(private chatstreamSpringbootGraalvmService: ChatstreamSpringbootGraalvmService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
  }

  addMessage(message: Message) {
    this.messages = [...this.messages, message];
  }

  appendMessage(chunk: string) {
    if (this.messages.length > 0) {
      const lastMessage = this.messages[this.messages.length - 1];
      lastMessage.text = lastMessage.text.trim() + ' ' + chunk;
      this.messages = [...this.messages.slice(0, -1), lastMessage];
    }
  }

  getIconClass(userName: string) {
    return userName === 'You' ? 'fas human-icon' : 'fas fa-robot';
  }

  getBuildType() {
      this.chatstreamSpringbootGraalvmService.getBuildType()
          .subscribe((response: string) => {
              console.log(response);
              if (response !== '') {
                  this.nativeImage = response;
              }
          });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
        this.addMessage({
            text: this.newMessage,
            userName: 'You'
        });

        let first = true;
        this.chatstreamSpringbootGraalvmService.sendMessage(this.newMessage).pipe(
          concatMap(() => {
            return this.chatstreamSpringbootGraalvmService.connectToChatStream();
          })
        ).subscribe((chunk: string) => {
            if (first && chunk !== '') {
                this.addMessage({
                    text: chunk,
                    userName: 'Assistent'
                });
                first = false;
            } else {
                this.appendMessage(chunk);
            }
            this.newMessage = '';
        });
    }
  }
}
