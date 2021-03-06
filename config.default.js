'use strict';

const config = {
  app: {
    addons: 'slack-rpg/addon-official',
    include: {
      general: false,
    },
  },
  slack: {
    token: 'xoxb-Your-Token',
    autoReconnect: true,
  },
};

module.exports = config;
