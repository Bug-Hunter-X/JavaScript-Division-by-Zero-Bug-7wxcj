# JavaScript Division by Zero Bug

This repository demonstrates a common JavaScript error: division by zero. The `foo` function attempts to divide `a` by `b`, but does not handle the case where `b` is zero, leading to an exception.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version.

## Bug Description

The function `foo` incorrectly handles cases where the second parameter (`b`) is zero.  When `b` is 0, this results in an error.

## Solution

The solution adds a check to prevent division by zero, returning an appropriate value (e.g., NaN, Infinity, or a custom error message) when `b` is zero.
