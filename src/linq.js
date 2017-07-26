const exLinq = function () {

    this.forEach = function (array, expression) {
        for (var index = 0; index < array.length; index++) {
            if (expression(array[index], index)) {
                break;
            }
        }
    }
    this.select = function (array, expression) {
        var list = [];
        this.forEach(array, function (item) {
            list.push(expression(item));
        });
        return list;
    }
    this.remove = function (array, expression) {
        var newArray = [];
        this.forEach(array, function (item) {
            if (!expression(item)) {
                newArray.push(item);
            }
        });
        return newArray;
    }
    this.sum = function (array, expression) {
        var total = undefined;
        this.forEach(array, function (item) {
            total += expression(item); //expression(item, total);
        });
        return total;
    }
    this.avg = function (array, expression) {
        var result = undefined;
        this.forEach(array, function (item) {
            result += expression(item);
        });

        return result / array.length;
    }
    this.min = function (array, expression) {
        var minValue = undefined;
        this.forEach(array, function (item) {
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
        this.forEach(array, function (item) {
            var val = expression(item);
            if (maxValue === undefined) {
                maxValue = val;
            } else if (maxValue < val) {
                maxValue = val;
            }
        });
        return maxValue;
    }
    this.where = function (array, expression) {
        var finds = [];
        this.forEach(array, function (item) {
            if (expression(item)) {
                finds.push(item);
            }
        });
        return finds;
    }
    this.firstOfDefault = function (array, expression) {
        var findItem = undefined;
        this.forEach(array, function (item) {
            if (findItem === undefined && expression(item)) {
                findItem = item;
                return true;
            }
        });
        return findItem;
    }
    this.take = function (array, count) {
        var newArray = [];
        var index = 0;
        this.forEach(array, function (item) {
            index++;
            newArray.push(item);
            return index == count || array.length < count;
        });
        return newArray;
    }
    this.skip = function (index) {

    }
    this.indexOf = function (array, expression) {
        var findIndex = -1;
        this.forEach(array, function (item, index) {
            if (expression(item)) {
                findIndex = index;
                return true;
            }
        });
        return findIndex;
    }
    this.groupBy = function (array, expression) {
        var list = [];
        var linq = this;
        this.forEach(array, function (item, index) {
            var key = expression(item);
            var items = [];
            if (!linq.exists(list, function (x) {
                return x.key == key;
            })) {
                linq.forEach(array, function (item2, index2) {
                    if (index != index2) {
                        if (key == expression(item2)) {
                            items.push(item2);
                        }
                    }
                });
                list.push({
                    key: key,
                    items: items
                });
            }
        });
        return list;
    }
    this.orderBy = function (array, expression) {
        var list = array;
        var linq = this;
        this.forEach(list, function (x, xIndex) {
            linq.forEach(array, function (y, yIndex) {
                if (xIndex!=yIndex) {
                    if (expression(x) > expression(y)) {
                        list[yIndex] = x;
                        list[xIndex] = y;
                        xIndex=yIndex;
                    }
                }
            });
        });
        return list;
    }
    this.orderByDescending = function (array, expression) {

        var list = array;
        var linq = this;
        this.forEach(list, function (x, xIndex) {
            linq.forEach(array, function (y, yIndex) {
                if (xIndex!=yIndex) {
                    if (expression(x) < expression(y)) {
                        list[yIndex] = x;
                        list[xIndex] = y;
                        xIndex=yIndex;
                    }
                }
            });
        });
        return list;
    }
    this.any = function (array, expression) {
        var isFind = false;
        this.forEach(array, function (item) {
            isFind = expression(item);
            return isFind;
        });
        return isFind;
    }

    this.exists = function (array, expression) {
        return this.any(array, expression);
    }

};
var linq = new exLinq();

Array.prototype.forEach = function (expression) {
    linq.forEach(this, expression);
}
Array.prototype.select = function (expression) {
    return linq.select(this, expression);
}
Array.prototype.remove = function (expression) {
    return linq.remove(this, expression);
}
Array.prototype.sum = function (expression) {
    return linq.sum(this, expression);
}
Array.prototype.avg = function (expression) {
    return linq.avg(this, expression);
}
Array.prototype.min = function (expression) {
    return linq.min(this, expression);
}
Array.prototype.where = function (expression) {
    return linq.where(this, expression);
}
Array.prototype.firstOfDefault = function (expression) {
    return linq.firstOfDefault(this, expression);
}
Array.prototype.take = function (count) {
    return linq.take(this, count);
}
Array.prototype.skip = function (index) {
    return linq.skip(this, count);
}
Array.prototype.indexOf = function (expression) {
    return linq.indexOf(this, expression);
}
Array.prototype.groupBy = function (expression) {
    return linq.groupBy(this, expression);
}
Array.prototype.orderBy = function (expression) {
    return linq.orderBy(this, expression);
}
Array.prototype.orderByDescending = function (expression) {
    return linq.orderByDescending(this, expression);
}
Array.prototype.any = function (expression) {
    return linq.any(this, expression);
}
Array.prototype.exists = function (expression) {
    return linq.exists(this, expression);
}