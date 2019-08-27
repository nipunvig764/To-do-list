import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http';
import { MondayService } from './monday.service';
import { TuesdayService } from './tuesday.service';
import { WednesdayService } from './wednesday.service';
import { ThursdayService } from './thursday.service';
import { FridayService } from './friday.service';
import { SaturdayService } from './saturday.service';
import { orderListService } from './todo.service';
import { Material } from './todo.model';
import { Monday } from './monday.model';
import { Tuesday } from './tuesday.model';
import { Thursday } from './thursday.model';
import { Friday } from './friday.model';
import { Saturday } from './saturday.model';
import { Wednesday } from './wednesday.model';
import { AuthService } from '../auth/auth.service';
import { tokenName } from '@angular/compiler';

@Injectable()
export class DataStorageService{
    constructor(private http:Http,private mondayService:MondayService,private tuesdayService: TuesdayService,private wednesdayService:WednesdayService,
        private thursdayService:ThursdayService,private fridayService: FridayService,private saturdayService:SaturdayService,private slService:orderListService,private authservice:AuthService){}

        storeTask(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.slService.getMaterials());
        }
        storeMonday(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.mondayService.getMondays());
        }
        storeTuesday(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.tuesdayService.getMaterials());
        }
        storeWednesday(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.wednesdayService.getMaterials());
        }
        storeThursday(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.thursdayService.getMaterials());
        }
        storeFriday(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.fridayService.getMaterials());
        }
        storeSaturday(){
            const token = this.authservice.getToken();
            return this.http.put('https://example-1dec4.firebaseio.com/task.json?auth=' + token,this.saturdayService.getMaterials());
        }

        getMaterials(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const materials:Material[] = response.json();
                        this.slService.setMonday(materials);
                    }
                );
        }

        getMonday(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const mondays:Monday[] = response.json();
                        this.mondayService.setMonday(mondays);
                    }
                );
        }

        getTuesday(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const tuesdays:Tuesday[] = response.json();
                        this.tuesdayService.setMonday(tuesdays);
                    }
                )
        }

        getWednesday(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const wednesdays:Wednesday[] = response.json();
                        this.wednesdayService.setMonday(wednesdays);
                    }
                )
        }

        getThursday(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const thursdays:Thursday[] = response.json();
                        this.thursdayService.setMonday(thursdays);
                    }
                )
        }

        getFriday(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const fridays:Friday[] = response.json();
                        this.fridayService.setMonday(fridays);
                    }
                )
        }

        getSaturday(){
            const token = this.authservice.getToken();
            this.http.get('https://example-1dec4.firebaseio.com/task.json?auth='+ token)
                .subscribe(
                    (response:Response) => {
                        const saturdays:Saturday[] = response.json();
                        this.saturdayService.setMonday(saturdays);
                    }
                )
        }
}