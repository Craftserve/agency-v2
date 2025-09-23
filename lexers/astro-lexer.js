import JsxLexer from "./jsx-lexer.js";

export default class AstroLexer extends JsxLexer {
    constructor(options = {}) {
        super(options);
    }

    extract(content, filename) {
        return super.extract(content, `${filename}.tsx`);
    }
}
