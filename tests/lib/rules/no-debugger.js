/**
 * @fileoverview Tests for no-debugger rule.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-debugger"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-debugger", rule, {
    valid: [
        "var test = { debugger: 1 }; test.debugger;"
    ],
    invalid: [
        { code: "debugger", errors: [{ message: "Unexpected 'debugger' statement.", type: "DebuggerStatement"}] }
    ]
});
