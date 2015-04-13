'use strict';

var chalk = require('chalk');
var table = require('text-table');

var pluralize = function(word, count) {
    var plural = count === 1 ? word : word + 's';
    return plural;
};

module.exports = function(results) {

    var errorColor = 'red';
    var warningColor = 'yellow';

    var errorCount = 0;
    var fileCount;
    var failureCount = 0;
    var passCount = 0;
    var warningCount = 0;

    var summaryLineArray;


    results.forEach(function(result) {

        var messages = result.messages;

        if (messages.length === 0) {
            passCount++;
        } else {
            failureCount++;
            warningCount += result.warningCount;
            errorCount += result.errorCount;
        }

    });

    fileCount = passCount + failureCount;

    summaryLineArray = [
        chalk.bold(fileCount + ' ' + pluralize('file', fileCount) + ' checked.'),
        chalk.bold(passCount + ' passed.'),
        chalk.bold(failureCount + ' failed.')
    ];

    if (warningCount || errorCount) {
        summaryLineArray.push(chalk[warningColor].bold(warningCount + ' ' + pluralize('warning', warningCount) + '.'));
        summaryLineArray.push(chalk[errorColor].bold(errorCount + ' ' + pluralize('error', errorCount) + '.'));
    }

    return '\n'
            + table([summaryLineArray])
            + '\n';

};
