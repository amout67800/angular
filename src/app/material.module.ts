import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatInputModule, MatMenuModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatButtonModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSelectModule, 
    MatInputModule, 
    MatMenuModule, 
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatIconModule,
    FormsModule
  ]
})
export class MaterialModule {}