import React from 'react';
import { GitHubCalendar } from '@stickyboard/github-calendar';

const calendarData = [
    { date: '2020-01-01', count: 125 },
    { date: '2020-01-22', count: 21 },
    { date: '2020-01-30', count: 30 },
    { date: '2020-02-11', count: 40 },
    { date: '2020-02-12', count: 2 },
    { date: '2020-02-13', count: 33 },
    { date: '2020-02-15', count: 24 },
    { date: '2020-02-30', count: 23 },
    { date: '2020-03-20', count: 14 },
    { date: '2020-05-24', count: 45 },
    { date: '2020-11-24', count: 43 },
    { date: '2020-12-24', count: 12 },
    { date: '2020-12-25', count: 3 },
    { date: '2020-12-28', count: 95 },
];

function RechartsGithubCalendar() {
    return (
        <GitHubCalendar
            startDate="2020-01-01"
            endDate="2020-12-31"
            data={calendarData}
        />
    );
}

export default RechartsGithubCalendar;
