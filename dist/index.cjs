'use strict';

const EMPTY = "";
const SPACE = " ";
const SLASH = "/";
const QUOTATION_MARK = "'";
const END_OF_LINE = "\n";

const toLower = (value) => value.toLowerCase();
const toUpper = (value) => value.toUpperCase();

exports.EMPTY = EMPTY;
exports.END_OF_LINE = END_OF_LINE;
exports.QUOTATION_MARK = QUOTATION_MARK;
exports.SLASH = SLASH;
exports.SPACE = SPACE;
exports.toLower = toLower;
exports.toUpper = toUpper;
