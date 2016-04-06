String.prototype.splitLast = function(separator) {
    var si = this.split(separator);
    var output = [];
    var last = si.pop();
    if (si.length > 0) {
        output.push(si.join(separator));
    }
    if (last) {
        output.push(last);
    }
    return output;
};