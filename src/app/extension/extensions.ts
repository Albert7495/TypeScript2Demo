interface Date{
    addDaysToCurrentDay(days: number):Date;
    format():string;
}

Date.prototype.format=function():string{

    let dat =new Date (this.valueOf());
    var mes=dat.getMonth();
  //  return `${dat.getDate()}/${++mes}/${dat.getFullYear()}`
    return dat.toLocaleDateString();   
}

Date.prototype.addDaysToCurrentDay = function(days:number):Date{
    let dat =new Date(this.valueOf());

    dat.setDate(dat.getDate() + days);

    return dat;
}

window.onload=function(){
    var currentDay= new Date();

    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDay(5).format());
    
}

