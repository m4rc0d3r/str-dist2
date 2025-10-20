declare const EMPTY = "";
declare const SPACE = " ";
declare const SLASH = "/";
declare const QUOTATION_MARK = "'";
declare const END_OF_LINE = "\n";

declare const toLower: <T extends string>(value: T) => Lowercase<T>;
declare const toUpper: <T extends string>(value: T) => Uppercase<T>;

export { EMPTY, END_OF_LINE, QUOTATION_MARK, SLASH, SPACE, toLower, toUpper };
