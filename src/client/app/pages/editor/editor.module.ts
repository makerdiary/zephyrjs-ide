// Core modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// 3rd party modules
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

// Own modules
import { MonacoModule } from './components/monaco/monaco.module';
import { ConsoleModule } from './components/console/console.module';
import { StatusBarModule } from './components/statusbar/statusbar.module';

// This module
import { EditorComponent } from './editor.component';


@NgModule({
    imports: [
        Angular2FontawesomeModule,
        CommonModule,
        FormsModule,
        ModalModule,

        MonacoModule,
        ConsoleModule,
        StatusBarModule
    ],
    declarations: [EditorComponent],
    exports: [EditorComponent]
})
export class EditorModule {}
