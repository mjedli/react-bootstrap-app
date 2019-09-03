class AppService {

  constructor(){
    this.data = [
      {id : 1, title : "title 3", adresse : "address 1", type : "true"},
      {id : 2, title : "title 2", adresse : "address 4", type : "false"},
      {id : 3, title : "title 1", adresse : "address 3", type : "false"},
      {id : 4, title : "title 4", adresse : "address 2", type : "false"},
      {id : 5, title : "title 5", adresse : "address 5", type : "false"},
      {id : 6, title : "title 6", adresse : "address 7", type : "true"},
      {id : 7, title : "title 8", adresse : "address 6", type : "false"},
      {id : 8, title : "title 7", adresse : "address 9", type : "false"},
      {id : 9, title : "title 9", adresse : "address 8", type : "false"}
    ];
    this.currentId = 0;
    this.alertMessage = "";
    this.searchValue = "";

  }

  getSearchValue() {
    return this.searchValue;
  }

  setSearchValue(value) {
    this.searchValue = value;
  }

  setAlertMessage(msg) {
    this.alertMessage = msg;
  }

  getAlertMessage() {
    return this.alertMessage;
  }

  getCurrentId() {
    return this.currentId;
  }

  setCurrentId(id) {
    this.currentId = id; 
  }

  addComponent(item){
    let currentId = 1;

    let index = this.data.findIndex((e) => e.id === currentId);

    while(index !== -1) {
      currentId = currentId +1;
      index = this.data.findIndex((e) => e.id === currentId);
    }
    item.id=currentId;
    this.data.push(item);
  }

  get(id){
    return this.data.find(d => d.id === id);
  }

  getAll() {
    let list = [];
    if(this.searchValue === "") {
      return this.data;
    } else {
      list = this.data.filter(
        e => ( (e.title.match(this.searchValue)) || (e.adresse.match(this.searchValue)))  
      );
      this.searchValue="";
      return list;
    }
  }

  /*
  * modifiyComponent
  */
  modifiyComponent(myComponent) {
    const index = this.data.findIndex((e) => e.id === myComponent.id);

    if (index === -1) {
        this.data.push(myComponent);
    } else {
        this.data[index] = myComponent;
    }
  }

  /*
  * removeComponent
  */
  removeComponent() {
    const index = this.data.findIndex((e) => e.id === this.currentId);

    if (index !== -1) {
        this.data.splice(index, 1);
    }
    this.currentId = 0; 
  }

}

const instance = new AppService();

export default instance;