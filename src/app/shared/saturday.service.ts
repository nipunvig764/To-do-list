import { Subject } from 'rxjs';
import { Saturday } from './saturday.model';



export class SaturdayService{
    materialsChanged= new Subject<Saturday[]>();
    startedEditing=new Subject<number>();
    private saturdays:Saturday[]=
      [
        
      ];

    getMaterials(){
        return this.saturdays.slice();
    }

    setMonday(saturdays:Saturday[]){
      this.saturdays=saturdays;
      this.materialsChanged.next(this.saturdays.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.saturdays[index];
    }

    addMaterial(saturday:Saturday){
        this.saturdays.push(saturday);
        this.materialsChanged.next(this.saturdays.slice());
    }

    upDateMaterial(index:number,newMaterial:Saturday){
      this.saturdays[index] = newMaterial;
      this.materialsChanged.next(this.saturdays.slice());
    }

    deleteMaterial(index:number){
      this.saturdays.splice(index,1);
      this.materialsChanged.next(this.saturdays.slice());
    }

    addMaterials(saturdays:Saturday[]){
      this.saturdays.push(...saturdays);
      this.materialsChanged.next(this.saturdays.slice())
    }
}