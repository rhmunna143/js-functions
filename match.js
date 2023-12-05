function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string') {
        return 'Invalid!!! Give two string...';
    } else {
        if(string1.toLocaleLowerCase().includes(string2.toLocaleLowerCase())) {
            return 'true';
        } else {
            return 'false';
        }
    }
}

