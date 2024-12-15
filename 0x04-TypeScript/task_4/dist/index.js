var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Cpp } from '../subjects/Cpp';
import { React } from '../subjects/React';
import { Java } from '../subjects/Java';
var cpp = new Cpp();
var react = new React();
var java = new Java();
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
};
cpp.setTeacher = teacher;
react.setTeacher = __assign(__assign({}, teacher), { experienceTeachingReact: 5 });
java.setTeacher = __assign(__assign({}, teacher), { experienceTeachingJava: 2 });
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
//# sourceMappingURL=index.js.map