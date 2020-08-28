// src/components/page/GithubCalendarPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [{ i: 'RechartsGithubCalendar', x: 0, y: 0, w: 4, h: 6 }],
    md: [{ i: 'RechartsGithubCalendar', x: 0, y: 0, w: 4, h: 6 }],
    sm: [{ i: 'RechartsGithubCalendar', x: 0, y: 0, w: 4, h: 6 }],
    xs: [{ i: 'RechartsGithubCalendar', x: 0, y: 0, w: 6, h: 6 }],
    xxs: [{ i: 'RechartsGithubCalendar', x: 0, y: 0, w: 4, h: 6 }],
};

const initialBlocks = [{ i: 'RechartsGithubCalendar' }];

class GithubCalendarPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

GithubCalendarPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(GithubCalendarPage);
