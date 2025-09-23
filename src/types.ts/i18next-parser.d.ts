declare module "i18next-parser/src/lexers/jsx-lexer.js" {
    import Lexer from "i18next-parser/src/lexers/lexer.js";

    export default class JsxLexer extends Lexer {
        constructor(options?: any);
        extract(content: string, filename: string): any;
    }
}
