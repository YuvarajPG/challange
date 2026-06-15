interface Mobile {
    color: string;
}
interface Mobile {
    name: string;
    getdetails(name: string): string
}
let mymobile: Mobile = {
    color: "Green",
    name: "Samsung Galaxy s20",
    getdetails: (details: any) => details,
}
console.log(mymobile.getdetails(mymobile.name))
