// src/sidebar/SidebarMenuDict.js

import React from 'react';

import Timeline from '@material-ui/icons/Timeline';
import GitHubIcon from '@material-ui/icons/GitHub';

const SidebarMenuDict = {
    /******************
     * Component Menus
     ******************/
    COMPONENTS: [
        {
            title: 'Sample',
            icon: <Timeline />,
            url: '/sample',
            value: 101,
            need_permission: false,
        },
        {
            title: 'Github Calendar',
            icon: <GitHubIcon />,
            url: '/githubcalendar',
            value: 101,
            need_permission: false,
        },
    ],
};

export default SidebarMenuDict;
