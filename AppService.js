class AppService {

  constructor(){
    this.data = [
    {id : 1, title : "title 3", adresse : "address 1", type : "true"},
    {id : 2, title : "title 2", adresse : "address 4", type : "false"},
    {id : 3, title : "title 1", adresse : "address 3", type : "false"},
    {id : 4, title : "title 4", adresse : "address 2", type : "false"}
  ];
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
}

const instance = new AppService();
Object.freeze(instance);

export default instance;