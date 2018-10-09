import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ MatFormFieldModule, MatInputModule ],
    exports: [ MatFormFieldModule, MatInputModule ]
})

export class MaterialModule { };