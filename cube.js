function cubeNumber(number) {
    if(typeof number != 'number'){
        return 'Invalid!!! Please Enter a number...';
    } else {
        const cube = number * number * number;
        return cube;
    }
}
