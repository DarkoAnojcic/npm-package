'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('src/cucumber_report.json');
let data = JSON.parse(rawdata);

const request = [];
let title;
let steps = [];
let scenarios = [];
data.forEach(element => {
    scenarios = [];
    // console.log(element.name);
    element.elements.forEach(scenario => {
        title = scenario.name;
        steps = [];
        // console.log(scenario.name);
        scenario.steps?.forEach(step => {
            if(step.name !== undefined) {
                steps.push({
                    step: step.keyword + step.name,
                    status: step.result.status,
                    duration: step.result.duration,
                    error_message: step.result.error_message
                })
                // console.log(step.keyword + step.name);
            }
        });
        scenarios.push({
            title,
            steps
            }
        );
        // console.log(element.name);
        // console.log(scenario.name);
    });

    request.push({
        feature: element.name,
        scenarios
    }
    )
});

console.log(JSON.stringify(request));