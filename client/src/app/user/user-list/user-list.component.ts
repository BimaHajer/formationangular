import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com' }
  ];

  displayedData = [...this.data];
  selectedItems: any[] = [];
  loading = false; 
  show: boolean=false;

  addItem() {
    alert('Add item functionality');
  }

  deleteItems() {
 this.show=true
  }

  updateItem() {
    if (this.selectedItems.length === 1) {
      const selectedItem = this.selectedItems[0];
      alert(`Update item: ${JSON.stringify(selectedItem)}`);
    }
  }

  hasSelection(): boolean {
    return this.selectedItems.length > 0;
  }
  close(){
    this.show=false
  }
  save(){
    this.show=false
  } 
}
