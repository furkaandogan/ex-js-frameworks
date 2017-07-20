const exLinqTest = function () {
    var linq = new exLinq();
    var sampleData = [
        {
            id: 1,
            name: "John",
            age: 30,
            city: "istanbul",
            cars: ["Ford", "BMW", "Fiat"]
        },
        {
            id: 2,
            name: "Marry",
            age: 25,
            city: "istanbul",
            cars: ["Ford"]
        },
        {
            id: 3,
            name: "julia",
            age: 22,
            city: "izmir",
            cars: ["Fiat"]
        },
        {
            id: 4,
            name: "julia",
            age: 22,
            city: "izmir",
            cars: ["Fiat"]
        },
        {
            id: 5,
            name: "Furkan",
            age: 22,
            city: "istanbul",
            cars: []
        }
    ];
    this.appendBody = function (html) {
        document.body.innerHTML = html;
    }
    this.groupBy = function () {
        var list = linq.groupBy(sampleData, function (x) { return x.city; });
        var dataJSON = JSON.stringify(sampleData);
        var groupListJSON = JSON.stringify(list);
        this.appendBody("</br> Sample Data </br>" + dataJSON + "</br> result</br>" + groupListJSON);
        console.log(list);
    }
}