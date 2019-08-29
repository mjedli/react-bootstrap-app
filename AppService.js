class AppService {

  constructor(){
    this.data = [
      {id : 1, title : "title 3", adresse : "address 1", type : "true"},
      {id : 2, title : "title 2", adresse : "address 4", type : "false"},
      {id : 3, title : "title 1", adresse : "address 3", type : "false"},
      {id : 4, title : "title 4", adresse : "address 2", type : "false"}
    ];
    this.currentId = 0;
    this.alertMessage = "";
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

  add(item){
    this.data.push(item);
  }

  get(id){
    return this.data.find(d => d.id === id);
  }

  getAll() {
    return this.data;
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