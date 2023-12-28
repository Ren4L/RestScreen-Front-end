export default class EndingWordController {
    static getNumber(views: number, t: Function, word:string = '') {
        let number = views.toString();
        if(number.length < 4){
            if (+number < 20 && +number>10)
                return `${number} ${word ? t(word) : ''}`;
            else if(+number[number.length-1] === 1)
                return `${number} ${word ? t(word+"1") : ''}`;
            else if (+number[number.length-1] > 1 && +number[number.length-1] < 5)
                return `${number} ${word ? t(word+"2") : ''}`;
            else
                return `${number} ${word ? t(word) : ''}`;
        }
        else if(number.length > 3 && number.length < 7)
            return `${Math.floor(+number/1000)} ${t('Video.thousand')} ${word ? t(word) : ''}`;
        else if(number.length > 6 && number.length < 10)
            return `${Math.floor(+number/1000_000)} ${t('Video.million')} ${word ? t(word) : ''}`;
        else if(number.length > 9 && number.length < 13)
            return `${Math.floor(+number/1000_000_000)} ${t('Video.billion')} ${word ? t(word) : ''}`;
        else
            return `∞ ${t(word)}`;
    }

    static getDatePublic(datePublic:Date, t:Function) {
        let dateNow:Date = new Date(Date.now());
        let year:number = new Date(Math.abs(+dateNow - +datePublic)).getFullYear() - 1970;
        let month:number = new Date(Math.abs(+dateNow - +datePublic)).getMonth() - 1;
        let day:number = new Date(Math.abs(+dateNow - +datePublic)).getUTCDate() - 1;
        let hour:number = new Date(Math.abs(+dateNow - +datePublic)).getUTCHours();
        let minute:number = new Date(Math.abs(+dateNow - +datePublic)).getUTCMinutes();
        let second:number = new Date(Math.abs(+dateNow - +datePublic)).getUTCSeconds();

        if (+year.toString().substr(year.toString().length-2, 2) > 10 && +year.toString().substr(year.toString().length-2, 2) < 20)
            return `${year} ${t("Video.year")}`;
        else if (year == 1 || +year.toString()[year.toString().length-1] == 1)
            return `${year} ${t("Video.year1")}`;
        else if (year > 1 && year < 5 || +year.toString()[year.toString().length-1] > 1 && +year.toString()[year.toString().length-1] < 5)
            return `${year} ${t("Video.year2")}`;
        else if (year > 4)
            return `${year} ${t("Video.year")}`;

        if (+month.toString().substr(month.toString().length-2, 2) > 10)
            return `${month} ${t("Video.month")}`;
        else if (month == 1)
            return `${month} ${t("Video.month1")}`;
        else if (month > 1 && month < 5)
            return `${month} ${t("Video.month2")}`;
        else if (month > 4)
            return `${month} ${t("Video.month")}`;


        if (+day.toString().substr(day.toString().length-2, 2) > 10 && +day.toString().substr(day.toString().length-2, 2) < 20)
            return `${day} ${t("Video.day")}`;
        else if (day == 1 || +day.toString()[day.toString().length-1] == 1)
            return `${day} ${t("Video.day1")}`;
        else if (day > 1 && day < 5 || +day.toString()[day.toString().length-1] > 1 && +day.toString()[day.toString().length-1] < 5)
            return `${day} ${t("Video.day2")}`;
        else if (day > 4)
            return `${day} ${t("Video.day")}`;

        if (+hour.toString().substr(hour.toString().length-2, 2) > 10 && +hour.toString().substr(hour.toString().length-2, 2) < 20)
            return `${hour} ${t("Video.hour")}`;
        else if (hour == 1 || +hour.toString()[hour.toString().length-1] == 1)
            return `${hour} ${t("Video.hour1")}`;
        else if (hour > 1 && hour < 5 || +hour.toString()[hour.toString().length-1] > 1 && +hour.toString()[hour.toString().length-1] < 5)
            return `${hour} ${t("Video.hour2")}`;
        else if (hour > 4)
            return `${hour} ${t("Video.hour")}`;

        if (+minute.toString().substr(minute.toString().length-2, 2) > 10 && +minute.toString().substr(minute.toString().length-2, 2) < 20)
            return `${minute} ${t("Video.minute")}`;
        else if (minute == 1 || +minute.toString()[minute.toString().length-1] == 1)
            return `${minute} ${t("Video.minute1")}`;
        else if (minute > 1 && minute < 5 || +minute.toString()[minute.toString().length-1] > 1 && +minute.toString()[minute.toString().length-1] < 5)
            return `${minute} ${t("Video.minute2")}`;
        else if (minute > 4)
            return `${minute} ${t("Video.minute")}`;

        if (+second.toString().substr(second.toString().length-2, 2) > 10 && +second.toString().substr(second.toString().length-2, 2) < 20)
            return `${second} ${t("Video.second")}`;
        else if (second == 1 || +second.toString()[second.toString().length-1] == 1)
            return `${second} ${t("Video.second1")}`;
        else if (second > 1 && second < 5 || +second.toString()[second.toString().length-1] > 1 && +second.toString()[second.toString().length-1] < 5)
            return `${second} ${t("Video.second2")}`;
        else if (second > 4)
            return `${second} ${t("Video.second")}`;
        else
            return `0 ${t("Video.second")}`;
    }

    static getComments(count:number, t:Function){
        if (+count.toString().substr(count.toString().length-2, 2) > 10 && +count.toString().substr(count.toString().length-2, 2) < 20)
            return `${count} ${t("Video.comment")}`;
        else if (count == 1 || +count.toString()[count.toString().length-1] == 1)
            return `${count} ${t("Video.comment1")}`;
        else if (count > 1 && count < 5 || +count.toString()[count.toString().length-1] > 1 && +count.toString()[count.toString().length-1] < 5)
            return `${count} ${t("Video.comment2")}`;
        else if (count > 4)
            return `${count} ${t("Video.comment")}`;
    }

}