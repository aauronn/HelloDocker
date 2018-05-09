import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { City, PointOfInterest, CityToAdd } from '../shared/city';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';


@Injectable()
export class DataService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    public token: string = "";
    public tokenExpiration: Date;
    tokenCookie = 'UNKNOWN';

    public cities: City[] = [];
    public city: City = new City();





    // Methods
    public get loginRequired(): boolean {
        //return this.token.length === 0 || this.tokenExpiration > new Date();
        this.token = this.cookieService.get('authtoken');
        return this.cookieService.get('authtoken').length === 0;
    }

    login(creds): Observable<boolean> {
        return this.http
            .post('/api/account/createtoken', creds)
            .map((data: any) => {

                this.token = data.token;
                this.tokenExpiration = data.expiration;

                this.cookieService.set('authtoken', this.token, moment(this.tokenExpiration).toDate());

                return true;
            });
    }

    loadCities(): Observable<boolean> {
        return this.http.get('/api/cities',
            { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map((data: any[]) => {
                this.cities = data;
                return true;
            });

    }

    getCity(cityId: string, withpoi: boolean = false): Observable<boolean> {
        return this.http.get('/api/cities/' + cityId + '?includePointsOfInterest=' + withpoi,
            { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map((data: City) => {
                this.city = data;
                return true;
            });
    }

    addCity(city: City): Observable<boolean> {
        var cityToAdd = new CityToAdd();
        cityToAdd.description = city.description;
        cityToAdd.name = city.name;

        return this.http.post('/api/cities', city,
            { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map((data: City) => {
                this.city = data;
                return true;
            });

    }

    deleteCity(city: City): Observable<boolean> {
        return this.http.delete('/api/cities' + city.id, 
            { headers: new HttpHeaders().set("Authorization", "Bearer " + this.token) },)
            .map((response: Response) => {
                response.json();
                return true;
            });
    }


    //postCity(city: City): Observable<boolean> {
    //    return this.http.post('/api/cit')
    //}
}