import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Langchain4jRoutingModule } from './langchain4j-routing.module';
import { ChatstreamSpringbootGraalvmComponent } from './chatstream-sb-graalvm/chatstream-springboot-graalvm.component';
import { ChatstreamSpringbootGraalvmService } from './services/chatstream-springboot-graalvm.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatstreamSpringbootGraalvmComponent],
  imports: [
    CommonModule,
    Langchain4jRoutingModule,
    FormsModule
  ],
  providers: [ChatstreamSpringbootGraalvmService]
})
export class Langchain4jModule { }
