"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Hello extends react_1.default.Component {
    render() {
        return react_1.default.createElement("h1", null,
            " Hello From ",
            this.props.compiler,
            " and ",
            this.props.framework);
    }
}
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map