import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatInputModule, MatMenuModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatDialogModule,
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
    FormsModule,
    MatCardModule
  ]
})
export class MaterialModule {}