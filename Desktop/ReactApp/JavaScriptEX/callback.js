function a(cb){
    setTimeout(() => {
        console.log('a work');
        cb();
    }, 5000);
}

function b() {
    console.log('b work');
}

a(function() {
    b()
})