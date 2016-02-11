# -*- coding: utf-8 -*-
from tg import AppConfig

from tracim.lib.auth.wrapper import AuthConfigWrapper


class TracimAppConfig(AppConfig):
    """
    Tracim specific config processes.
    """

    def after_init_config(self, conf):
        self._set_up_auth(conf)
        #  Fix an tg2 strange thing: auth_backend is set in config, but instance
        #  of AppConfig has None in auth_backend attr
        self.auth_backend = conf['auth_backend']

    def _set_up_auth(self, conf):
        AuthConfigWrapper.wrap(conf)
