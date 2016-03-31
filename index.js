String.prototype.splitLast = function (separator) {
    var si = this.split(separator);
    var sb = "";
    var max = si.length;
    for (var i = 0; i < max; i++) {
        if (i < max-1) {
            sb += si[i];
            if (i < max-2) {
                sb += separator;
            }
        }
    }
    var output = [];
    if (sb !== "") {
        output.push(sb);
    }
    output.push(si[max-1]);
    return output;
};