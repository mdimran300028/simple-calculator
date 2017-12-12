// Display
var Display = document.getElementById('display');

// First row
var Sine    = document.getElementById('sine');
var Cosine  = document.getElementById('cosine');
var Tan     = document.getElementById('tangent');
var Log     = document.getElementById('log');
var Integer = document.getElementById('integer');

// Second row
var Absolute= document.getElementById('abs');
var Square  = document.getElementById('square');
var Cube    = document.getElementById('cube');
var Exp     = document.getElementById('exp');
var Root    = document.getElementById('root');

// Third row
var Seven   = document.getElementById('seven');
var Eight   = document.getElementById('eight');
var Nine    = document.getElementById('nine');
var Delete  = document.getElementById('del');
var allClear= document.getElementById('clear');

// Forth row
var Four    = document.getElementById('four');
var Five    = document.getElementById('five');
var Six     = document.getElementById('six');
var Product = document.getElementById('product');
var Divide  = document.getElementById('divide');

// Fifth row
var One     = document.getElementById('one');
var Two     = document.getElementById('two');
var Three   = document.getElementById('three');
var Sum     = document.getElementById('sum');
var Diff    = document.getElementById('difference');

// Sixth row
var Zero    = document.getElementById('zero');
var Dot     = document.getElementById('decimal');
var TenExp  = document.getElementById('tenExp');
var Ans = document.getElementById('ans');
var Result  = document.getElementById('result');

//Current Memory
var Memory ;

// First row's function's
Sine.onclick = function () {
    var theta = eval(document.getElementById('display').value);
    theta = (theta*Math.PI/180);
    var result = Math.sin(theta);
    Memory = result;
    Display.value = result;
}
Cosine.onclick = function () {
    var theta = eval(document.getElementById('display').value);
    theta = (theta*Math.PI/180);
    var result = Math.cos(theta);
    Memory = result;
    Display.value = result;
}
Tan.onclick = function () {
    var theta = eval(document.getElementById('display').value);
    theta = (theta*Math.PI/180);
    var result = Math.tan(theta);
    Memory = result;
    Display.value = result;
}

Log.onclick = function () {
    var val = eval(document.getElementById('display').value);
    var result = Math.log(val);
    Memory = result;
    Display.value = result;
}
Integer.onclick = function () {
    var val = document.getElementById('display').value;
    var result = Math.round(val);
    Memory = result;
    Display.value = result;
}

// Second rows function's
Absolute.onclick = function () {
    var val = eval(document.getElementById('display').value);
    var result = Math.abs(val);
    Memory = result;
    Display.value = result;
}
Square.onclick = function () {
    var val = eval(document.getElementById('display').value);
    var result = val*val;
    Memory = result;
    Display.value = result;
}
Cube.onclick = function () {
    var val = eval(document.getElementById('display').value);
    var result = val*val*val;
    Memory = result;
    Display.value = result;
}
Exp.onclick = function () {
    var val = eval(document.getElementById('display').value);
    var result = Math.exp(val);
    Memory = result;
    Display.value = result;
}
Root.onclick = function () {
    var val =eval(document.getElementById('display').value);
    var result = Math.sqrt(val);
    Memory = result;
    Display.value = result;
}

//Third row's functions
Seven.onclick = function () {
    Display.value += "7";
}
Eight.onclick = function () {
    Display.value += "8";
}
Nine.onclick = function () {
    Display.value += "9";
}
Delete.onclick = function () {
    Display.value = "";
}
allClear.onclick = function () {
    Memory = 0;
    Display.value = "";
}

//Fourth row's functions
Four.onclick = function () {
    Display.value += "4";
}
Five.onclick = function () {
    Display.value += "5";
}
Six.onclick = function () {
    Display.value += "6";
}
Product.onclick = function () {
    Display.value += "*";
}
Divide.onclick = function () {
    Display.value += "/";
}


//Fifth row's functions
One.onclick = function () {
    Display.value += "1";
}
Two.onclick = function () {
    Display.value += "2";
}
Three.onclick = function () {
    Display.value += "3";
}
Sum.onclick = function () {
    Display.value += "+";
}
Diff.onclick = function () {
    Display.value += "-";
}

//Fifth row's functions
Zero.onclick = function () {
    Display.value += "0";
}
Dot.onclick = function () {
    Display.value += ".";
}
TenExp.onclick = function () {
    var val = eval(document.getElementById('display').value);
    var result =1;
    for(var i=0; i<val; i++){
        result *=10;
    }
    Memory = result;
    Display.value = result;
}
Ans.onclick = function () {
    Display.value = Memory;
}
Result.onclick = function () {
    var Result = eval(document.getElementById('display').value);
    Memory = Result;
    Display.value = Result;
}