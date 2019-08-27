
import { Subject } from 'rxjs';
import { Material } from '../shared/todo.model';



export class orderListService{
    materialsChanged= new Subject<Material[]>();
    startedEditing=new Subject<number>();
    private materials:Material[]=
      [
        
      ];
  

    getMaterials(){
        return this.materials.slice();
    }
    setMonday(materials:Material[]){
      this.materials=materials;
      this.materialsChanged.next(this.materials.slice())
    }

    getMaterial(index:number){
      console.log(index);
      return this.materials[index];
    }

    addMaterial(material:Material){
        this.materials.push(material);
        this.materialsChanged.next(this.materials.slice());
    }

    upDateMaterial(index:number,newMaterial:Material){
      this.materials[index] = newMaterial;
      this.materialsChanged.next(this.materials.slice());
    }

    deleteMaterial(index:number){
      this.materials.splice(index,1);
      this.materialsChanged.next(this.materials.slice());
    }

    addMaterials(materials:Material[]){
      this.materials.push(...materials);
      this.materialsChanged.next(this.materials.slice())
    }

}