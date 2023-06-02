

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ElseIfComponent } from './else-if/else-if.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { Form2Component } from './form2/form2.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ToDoComponent } from './to-do/to-do.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/parent/child/child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { CtpParentComponent } from './child-to-parent/ctp-parent/ctp-parent.component';
import { CtpChildComponent } from './child-to-parent/ctp-parent/ctp-child/ctp-child.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import {CustomPipeComponent} from './custom-pipe/custom-pipe.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsdInrPipe } from './custom-pipe/usd-inr.pipe';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AppHighlightDirective } from './custom-directive/app-highlight.directive';
import { BetterHighlightDirective } from './custom-directive/better-highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IfElseComponent,
    ElseIfComponent,
    SwitchComponent,
    ForLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    Form2Component,
    ToggleComponent,
    MaterialUiComponent,
    ToDoComponent,
    ParentToChildComponent,
    ParentComponent,
    ChildComponent,
    ChildToParentComponent,
    CtpParentComponent,
    CtpChildComponent,
    TwowaybindingComponent,
    TemplateReferenceVariableComponent,
    PipesComponent,
    UsdInrPipe,
    CustomPipeComponent,
    CustomDirectiveComponent,
    AppHighlightDirective,
    BetterHighlightDirective
   
  
    
   
  ],
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,MatTreeModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
