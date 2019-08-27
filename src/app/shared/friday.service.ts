import { Subject } from 'rxjs';
import { Friday } from './friday.model';



export class FridayService{
    materialsChanged= new Subject<Friday[]>();
    startedEditing=new Subject<number>();
    private fridays:Friday[]=
      [
        
      ];

    getMaterials(){
        return this.fridays.slice();
    }

    setMonday(fridays:Friday[]){
      this.fridays=fridays;
      this.materialsChanged.next(this.fridays.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.fridays[index];
    }

    addMaterial(friday:Friday){
        this.fridays.push(friday);
        this.materialsChanged.next(this.fridays.slice());
    }

    upDateMaterial(index:number,newMaterial:Friday){
      this.fridays[index] = newMaterial;
      this.materialsChanged.next(this.fridays.slice());
    }

    deleteMaterial(index:number){
      this.fridays.splice(index,1);
      this.materialsChanged.next(this.fridays.slice());
    }

    addMaterials(fridays:Friday[]){
      this.fridays.push(...fridays);
      this.materialsChanged.next(this.fridays.slice())
    }
}