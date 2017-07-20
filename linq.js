const exLinq = function () {

    this.forEach = function (array, expression) {
        for (var index = 0; index < array.length; index++) {
            if (expression(array[index], index)) {
                break;
            }
        }
    }
    this.sum = function (array, expression) {
        var total = undefined;
        forEach(array, function (item) {
            total += expression(item); //expression(item, total);
        });
        return total;
    }
    this.avg = function (array, expression) {
        var result = undefined;
        forEach(array, function (item) {
            result += expression(item);
        });

        return result / array.length;
    }
    this.min = function (array, expression) {
        var minValue = undefined;
        forEach(array, function (item) {
            var val = expression(item);
            if (minValue === undefined) {
                minValue = val
            } else if (minValue > val) {
                minValue = val;
            }
        });
        return minValue;
    }
    this.max = function (array, expression) {
        var maxValue = undefined;
        forEach(array, function (item) {
            var val = expression(item);
            if (maxValue === undefined) {
                maxValue = val;
            } else if (maxValue < val) {
                maxValue = val;
            }
        });
    }
    this.where = function (array, expression) {
        var finds = [];
        forEach(array, function (item) {
            if (expression(item)) {
                finds.push(item);
            }
        });
        return finds;
    }
    this.firstOfDefault = function (array, expression) {
        var findItem = undefined;
        forEach(array, function (item) {
            if (findItem === undefined && expression(item)) {
                findItem = item;
                return true;
            }
        });
        return findItem;
    }
    this.indexOf = function (array, expression) {
        var findIndex = -1;
        forEach(array, function (item, index) {
            if (expression(item)) {
                findIndex = index;
                return true;
            }
        });
        return findIndex;
    }
    this.groupBy = function (array, expression) {
        var list = [];
        forEach(array, function (item, index) {
            var key = expression(item);
            var items = [];
            forEach(array, function (item2, index2) {
                if (index != index) {
                    if (key == expression(item2)) {
                        items.push(item2);
                    }
                }
            });
            list.push({
                key: key,
                items: items
            });
        });
    }
    this.any = function (array, expression) {
        var isFind = false;
        forEach(array, function (item) {
            isFind = expression(item);
            return isFind;
        });
    }

    this.exists = function (array, expression) {
        return any(array, expression);
    }

};