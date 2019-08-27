import { Subject } from 'rxjs';
import { Tuesday } from './tuesday.model';



export class TuesdayService{
    materialsChanged= new Subject<Tuesday[]>();
    startedEditing=new Subject<number>();
    private tuesdays:Tuesday[]=
      [
        
      ];
  

    getMaterials(){
        return this.tuesdays.slice();
    }

    setMonday(tuesdays:Tuesday[]){
      this.tuesdays=tuesdays;
      this.materialsChanged.next(this.tuesdays.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.tuesdays[index];
    }

    addMaterial(tuesday:Tuesday){
        this.tuesdays.push(tuesday);
        this.materialsChanged.next(this.tuesdays.slice());
    }

    upDateMaterial(index:number,newMaterial:Tuesday){
      this.tuesdays[index] = newMaterial;
      this.materialsChanged.next(this.tuesdays.slice());
    }

    deleteMaterial(index:number){
      this.tuesdays.splice(index,1);
      this.materialsChanged.next(this.tuesdays.slice());
    }

    addMaterials(tuesdays:Tuesday[]){
      this.tuesdays.push(...tuesdays);
      this.materialsChanged.next(this.tuesdays.slice())
    }

}