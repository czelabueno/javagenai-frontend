import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatstreamSpringbootGraalvmComponent } from './chatstream-sb-graalvm/chatstream-springboot-graalvm.component';

const routes: Routes = [
  {
    path: 'chatstream-sb-graalvm',
    component: ChatstreamSpringbootGraalvmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Langchain4jRoutingModule { }
