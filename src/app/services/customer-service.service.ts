import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, observable, of } from 'rxjs';
import { ICust, IpRegCust, SendRegCust, sendLoginCust, ICustomer, IGetOTP } from 'src/app/models/icust';
import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeES from "@angular/common/locales/es";
registerLocaleData(localeES, "es");
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  format = 'yyyy-MM-dd';
  myDate = 'thu 2019-06-29';
  locale = 'en-US';
  formattedDate2 = formatDate(this.myDate, this.format, this.locale);
  formattedDate
  url = 'http://localhost:61568/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }



  getBusList(from: string, to: string, traveldate: Date): Observable<ICust[]> {
    this.formattedDate = formatDate(traveldate, this.format, this.locale);
    return this.http.get<ICust[]>(this.url + "BusAvailability/Search?src=" + from + "&dest=" + to + "&startDate=" + this.formattedDate);
  }

  registerCustomerService(regcust: SendRegCust): Observable<SendRegCust> {
    return this.http.post<SendRegCust>(this.url + "RegistrationLogin/PostCustomer", regcust, this.httpOptions);
  }

  updateCustomerService(id:number, updatedCustomer: SendRegCust, ): Observable<SendRegCust>{
    return this.http.put<SendRegCust>(this.url + "RegistrationLogin/PutCustomer/"+id+"/", updatedCustomer, this.httpOptions);
  }

  loginCustomerService(email: string, password: string): Observable<SendRegCust> {
    return this.http.get<SendRegCust>(this.url + "RegistrationLogin/GetCustomer?email=" + email + "&password=" + password);
  }

  getCustomerByIdService(id: number):Observable<any>{
    return this.http.get<any>(this.url+ "RegistrationLogin/GetCustomer/"+id);
  }

  getCustomerByEmailService(email: string):Observable<any>{
    return this.http.get<any>(this.url+ "RegistrationLogin/GetCustomer?email="+email);
  }

  getOTPFromDbToVerifyUser(email: string):Observable<any>{
    return this.http.get<any>(this.url+"RegistrationLogin/Getotp?email="+email);
  }


}
