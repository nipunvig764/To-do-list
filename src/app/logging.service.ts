export class LoggingService{
    serverElements = [
        {
            type:'server',
            name:'Testserver',
            content:'Just a test'
        }
    ];
    onServerAdded(name:string,content:string){
        this.serverElements.push({
          type:'server',
          name:name,
          content:content
        });
      }
}