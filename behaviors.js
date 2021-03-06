// Behavior Data -- Compiled using CSocket -- //
var storage = {};

exports.Set_Variable = function (variable, scope, value) {
  try {
    storage[variable] = value;
  } catch (e) {
    return;
	}
	storage[variable] = value;
	return;
};
exports.Get_Variable_Value = function (variable, scope, default_value) {
  if (typeof storage[variable] !== 'undefined') {
	return {"Value": storage[variable]}} else
	{ 
    return {"Value": default_value};
	}
};
exports.Clear_Variables = function (scope) {
    storage = {};
    console.log("Cleared variables in: " + scope);
};
exports.Destroy_Variable = function (variable) {
  if (storage[variable] !== undefined) {
	delete storage[variable];
	return {"Success": true};
	} else
  return {"Success": false};
};
exports.Test_for_Variable = function (variable) {
  if (storage[variable] !== undefined) {
	return {"Exists":true};
	} else
  return {"Exists":false};
};

exports.Get_Variables = function () {
  return {"Variables":Object.keys(storage)};
};
exports.Get_Variable_Count = function () {
  return {"Count":Object.keys(storage).length};
};
exports.Add_Values = function (value, value2) {
    try {
    return {"Sum": value + value2};
    } catch (e) {return {"Sum": 0};}
    return {"Sum": value + value2};
};
exports.Subtract_Values = function (value, value2) {
    try {
    return {"Difference": value - value2};
    } catch (e) {return {"Difference": 0};}
    return {"Difference": value - value2};
};
exports.Multiply_Values = function (value, value2) {
    try {
    return {"Product": value * value2};
    } catch (e) {return {"Product": 0};}
    return {"Product": value * value2};
};
exports.Divide_Values = function (value, value2) {
    try {
    return {"Quotient": value / value2};
    } catch (e) {return {"Quotient": 0};}
    return {"Quotient": value / value2};
};
exports.Square_Root = function (value) {
    try {
    return {"Result": Math.sqrt(value)};
    } catch (e) {return {"Result": 0};}
    return {"Result": Math.sqrt(value)};
};
exports.Modulus = function (value, value2) {
    try {
    return {"Remainder": value % value2};
    } catch (e) {return {"Remainder": 0};}
    return {"Remainder": value % value2};
};
exports.Power = function (value, value2) {
    try {
    return {"Result": Math.pow(value, value2)};
    } catch (e) {return {"Result": 0};}
    return {"Result": Math.pow(value, value2)};
};
exports.Minimum = function (value, value2) {
    try {
    return {"Minimun": Math.min(value, value2)};
    } catch (e) {return {"Minimun": 0};}
    return {"Minimun": Math.min(value, value2)};
};
exports.Maximum = function (value, value2) {
    try {
    return {"Maximum": Math.max(value, value2)};
    } catch (e) {return {"Maximum": 0};}
    return {"Maximum": Math.max(value, value2)};
};
exports.Round_Number = function(num, method, scale) {
    if (method == "Round") {
  if(!("" + num).includes("e")) {
    return {"Result": +(Math.round(num + "e+" + scale)  + "e-" + scale)};
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return {"Result": +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale)};
    }
  }
  if (method == "Truncate") {
      return {"Result": Math.trunc(num)};
  }
  if (method == "Ceiling") {
      return {"Result": Math.ceil(num)};
  }
  if (method == "Floor") {
      return {"Result": Math.floor(num)};
  }
};
exports.Math_Function = function(num, method, mode) {
    if (method == "Sine") {
        if (mode == "Normal") {
            return {"Result":Math.sin(num)};
        } else {
            return {"Result":Math.sinh(num)};
        }
    }
    if (method == "Cosine") {
        if (mode == "Normal") {
            return {"Result":Math.cos(num)};
        } else {
            return {"Result":Math.cosh(num)};
        }
    }
    if (method == "Arcosine") {
        if (mode == "Normal") {
            return {"Result":Math.acos(num)};
        } else {
            return {"Result":Math.acosh(num)};
        }
    }
    if (method == "Arcsine") {
        if (mode == "Normal") {
            return {"Result":Math.asin(num)};
        } else {
            return {"Result":Math.asinh(num)};
        }
    }
    if (method == "Artangent") {
        if (mode == "Normal") {
            return {"Result":Math.atan(num)};
        } else {
            return {"Result":Math.atanh(num)};
        }
    }
    if (method == "Tangent") {
        if (mode == "Normal") {
            return {"Result":Math.tan(num)};
        } else {
            return {"Result":Math.tanh(num)};
        }
    }
};
exports.Random_Number = function(num, num2) {
    let m = Math.min(num, num2);
    let d = Math.max(num, num2) - m;
    return {"Result":(Math.random() * d) + m};
};
exports.Absolute_Value = function(num) {
    return {"Result":Math.abs(num)};
};
exports.Calculate_Distance = function(x, y, x2, y2) {
  let x_dif = x - x2;
  let y_dif = y - y2;
  return {"Distance":Math.sqrt(Math.pow(x_dif,2) + Math.pow(y_dif,2))};
};
exports.Calculate_Distance = function(x, y, x2, y2) {
  return {"Angle":Math.atan2(x2 - x, y2 - y) * 180 / Math.PI};
};
