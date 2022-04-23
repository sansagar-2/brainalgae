import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class UtilityService {
    constructor(private http: HttpClient) { }

    toLowercase(string) {
        return string.toLowerCase();
    }
    dateConversion(millis) {
        return new Date(millis).toLocaleDateString();
    }

    getTimeDifference(date) {
        let now = new Date();

        var dif = now.getTime() - date.getTime();

        var seconds = dif / 1000;
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
    //   let aDay = 24*60*60*1000;
    //   console.log(this.getTimeDifference(new Date(Date.now()-aDay)));
    //   console.log(timeSince(new Date(Date.now()-aDay*2)));




}