[![Build Status](https://travis-ci.org/tracim/tracim.svg?branch=master)](https://travis-ci.org/tracim/tracim) [![Coverage Status](https://img.shields.io/coveralls/tracim/tracim.svg)](https://coveralls.io/r/tracim/tracim) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/tracim/tracim/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/tracim/tracim/?branch=master) [![PyPI](https://img.shields.io/pypi/pyversions/tracim.svg)](https://pypi.python.org/pypi/tracim)

# Tracim - Introduction #

Tracim is a collaborative software designed to allow people to share and work on various data and document types.

If you hesitate to install a wiki, a forum or a file management software, stop hesitating and install Tracim.

With Tracim, you manage in the same place:

- forum-like threads,
- files and automatic versioning,
- wiki-like pages for online information,

All data offers:

- information status: open / resolved / cancelled / deprecated
- native versioning
- comment threads making Tracim knowledge-growth ready.

Join Tracim community : http://tracim.org

## Use-cases ##

### Collaborate with clients ###

Share information with your clients.

In the same place you will be able to share trouble-shooting threads, files and general information. You can define who the information is shared with.

Example: share the documentation with all your users, run a forum open to your clients, another forum for your collaborators and share troubleshooting threads with each of your clients in a private workspace.

### Run a community of experts or passionate people ###

Collaborate and share experience and stimulate knowledge growth.

In a unique place, you centralize files and threads, and raw information too. Every collaborator can update the information status.
Stop worrying about information loss: the traceability is at the hearth of Tracim.

The newcomers knowledge growth is easy because all information has a status and full history.
You get the status of information and know how it got there.

### Work on quality-driven projects ###

In quality-driven projects like research and development, knowledge and quality are more important that task ownership and deadlines.

With Tracim, you centralize information, you can stay in touch by configuring your email notifications and work on several projects.

### Manage documents and files ###

Traceability and versioning are very important for high-quality processes. Unfortunately, specialized software are hard to setup and use.

Let's try Tracim ! You define access-control for each workspace and store documents and file there. Users can't delete information: everything is versioned and never deleted.

The user interface is easy to use: it's based on the well-known folders and files explorer paradigm.

----

# Tracim - the software #

## Licence ##

Tracim is licensed under the terms of the [MIT License](https://opensource.org/licenses/mit-license.php)

## Technical information ##

Tracim is a web application:

* developed with python 3.4, 3.5, 3.6
* based on the [TurboGears](http://www.turbogears.org/) web framework.
* relying on [PostgreSQL](http://www.postgresql.org/) or [MySQL](https://www.mysql.fr/) or [SQLite](https://www.sqlite.org/) as the storage engine.

The user interface is based on the following resources and technologies:

* [Mako](http://www.makotemplates.org/) templating engine (server-side)
* [Bootstrap 3](http://getbootstrap.com/)
* [jQuery](http://wwwjquery.corm)
* Icons are taken from [Tango Icons](http://tango.freedesktop.org/) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* The design is based on the [Bootstrap dashboard example](http://getbootstrap.com/examples/dashboard/) and uses some images from [Start Boostrap free templates](http://startbootstrap.com/)



It runs on [Debian GNU/Linux](http://www.debian.org/), it should work out-of-the-box on [Ubuntu](http://www.ubuntu.com/) and also on other GNU/Linux distributions.

Hopefully it works on BSD and Windows OSes (but this has not been tested yet).

----

# Use it (or give it a try) #

## Online Demo ##

The easiest way to test Tracim is to test it through the online demo:

* [http://demo.tracim.fr](http://demo.tracim.fr)
* login as admin: admin@admin.admin
* password: admin@admin.admin

## Ask for a dedicated instance ##

If you want your own dedicated instance but do not want to manage it by yourself, let's contact me at damien.accorsi@free.fr

## Docker ##

In case you prefer using Docker:

    docker run -e DATABASE_TYPE=sqlite -p 80:80 -v /var/tracim/etc:/etc/tracim -v /var/tracim/var:/var/tracim algoo/tracim

## Install Tracim on your server ##

Following the installation documentation below, you'll be able to run your own instance on your server.

----

# Installation #

## Distribution dependencies ##

You'll need to install the following packages :

    sudo apt install git realpath redis-server \
                     python3 python-virtualenv python3-dev python-pip  python-lxml \
                     build-essential libxml2-dev libxslt1-dev zlib1g-dev libjpeg-dev

## Get the source ##

Get the sources from GitHub:

    git clone https://github.com/tracim/tracim.git
    cd tracim/

## Frontend dependencies ##

[//]: # ( from https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

Install `nodejs` by typing:

    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    sudo apt install -y nodejs

Check that this went well by getting `npm` version:

    npm -v

Then install frontend dependencies listed in the file `package.json`:

    npm install

At last, compile frontend files:

    npm run gulp-dev # for a development environment
    # npm run gulp-prod # for a production environment

## Tracim virtual environment ##

Create a python virtual environment:

    virtualenv -p /usr/bin/python3 tg2env

Activate it in your terminal session (**all tracim command execution must be executed under this virtual environment**):

    source tg2env/bin/activate

Install Tracim and its dependencies:

    cd tracim/
    python setup.py develop
    pip install -r ../install/requirements.txt

## Configuration files ##

Create configuration files for a development environment and for `WsgiDAV`:

    cp development.ini.base development.ini
    cp wsgidav.conf.sample wsgidav.conf

## Translation ##

Compile translation binary files from available catalogs:

    python setup.py compile_catalog

## Database schema ##

The last step before running the application is to initialize the database
schema. This is done through the following command:

    gearbox setup-app

## Running Tracim ##

The two parameters are optional but useful to reload the server upon code changes and to get debug data:

    gearbox serve --reload --debug

You can now enter the application at
[http://127.0.0.1:8080](http://127.0.0.1:8080) and login with admin user:

 * user : `admin@admin.admin`
 * password : `admin@admin.admin`

If admin user not created yet, execute following command:

    gearbox user create -l admin@admin.admin -p admin@admin.admin -g managers -g administrators

    PG # CONNECT TO DATABASE
    ------------------------
    server:     127.0.0.1
    database:   tracimdb
    username:   bibi

    psql: FATAL:  password authentication failed for user "bibi"
    FATAL:  password authentication failed for user "bibi"
    ERRROR

In this case, delete the user and database you previously created (using pgtool) and do it again. Do not forget to run the grant_all_rights command!

## Configuration ##

At this point, you have :

* an installation of Tracim with its dedicated python3-ready virtualenv
* a PostgreSQL server and dedicated database

What you have to do now is to configure the application and to initialize the database content.

### Create configuration ###

    cp tracim/development.ini.base tracim/development.ini

You can now edit the file and setup required files. Here are the main ones:

#### Database access ####

Configure database in the development.ini file. This is defined as sqlalchemy.url
and the default value is below:

    sqlalchemy.url = postgresql://tracimuser:tracimpassword@127.0.0.1:5432/tracimdb?client_encoding=utf8

#### Listening port

Default configuration is to listen on port 8080. If you want to adapt this to your environment, edit the .ini file and setup the port you want:

    port = 8080

#### Interface language

The default language is English. You can change it to French by uncommenting the following line in the .ini file:

    lang = fr

#### SMTP parameters for resetpassword and notifications

for some reason, you have to configure SMTP parameters for rest password process and SMTP parameters for notifications in separate places.

The reset password related parameters are the follwoing ones :

    resetpassword.email_sender = tracim@mycompany.com
    resetpassword.smtp_host = smtp.mycompany.com
    resetpassword.smtp_port = 25
    resetpassword.smtp_login = username
    resetpassword.smtp_passwd = password

The main parameters for notifications are the following ones:

    email.notification.activated = true
    email.notification.from = Tracim Notification <tracim@tmycompany.com>
    email.notification.smtp.server = smtp.mycompany.com
    email.notification.smtp.port = 25
    email.notification.smtp.user = username
    email.notification.smtp.password = password

#### Website ####

You must define general parameters like the base_url and the website title which are required for home page and email notification links

    website.title = My Company Intranet
    website.base_url = http://intranet.mycompany.com:8080

#### LDAP ####

To use LDAP authentication, set ``auth_type`` parameter to "ldap":

    auth_type = ldap

Then add LDAP parameters

    # LDAP server address
    ldap_url = ldap://localhost:389

    # Base dn to make queries
    ldap_base_dn = dc=directory,dc=fsf,dc=org

    # Bind dn to identify the search
    ldap_bind_dn = cn=admin,dc=directory,dc=fsf,dc=org

    # The bind password
    ldap_bind_pass = toor

    # Attribute name of user record who contain user login (email)
    ldap_ldap_naming_attribute = uid

    # Matching between ldap attribute and ldap user field (ldap_attr1=user_field1,ldap_attr2=user_field2,...)
    ldap_user_attributes = mail=email

    # TLS usage to communicate with your LDAP server
    ldap_tls = False

    # If True, LDAP own tracim group managment (not available for now!)
    ldap_group_enabled = False

You may need an administrator account to manage Tracim. Use the following command (from ``/install/dir/of/tracim/tracim``):

```
gearbox user create -l admin-email@domain.com -g managers -g administrators
```

Keep in mind ``admin-email@domain.com`` must match with LDAP user.

#### Other parameters  ####

There are other parameters which may be of some interest for you. For example, you can:

* include a JS tracker like Piwik or Google Analytics,
* define your own notification email subject
* personalize notification email
* personalize home page (background image, title color...)
* ...

### database schema ###

The last step before to run the application is to initialize the database schema. This is done through the following command:

    source tg2env/bin/activate
    cd tracim && gearbox setup-app && cd -

## Running the server ##

### Running Tracim in standalone mode ###

Now you can run the standalone server:

    ./bin/run.sh
    
Which should result in something like this:

    13:53:49,982 INFO  [gearbox] Starting subprocess with file monitor
    13:53:50,646 WARNI [py.warnings] /tmp/tracim/protov1/tg2env/lib/python3.2/site-packages/tw2/core/validation.py:12: ImportWarning: Not importing directory '/tmp/tracim/protov1/tg2env/lib/python3.2/site-packages/tw2/core/i18n': missing __init__.py
      from .i18n import _
    
    13:53:50,862 INFO  [gearbox] Starting server in PID 11174.
    Starting HTTP server on http://0.0.0.0:8080
    
You can now enter the application at [http://localhost:8080](http://localhost:8080) and login:

* user : admin@admin.admin
* password : admin@admin.admin
    
Enjoy :)

# Going further #

Here is additional documentation about configuring:

 * [Apache](doc/apache.md)
 * [PostgreSQL, MySQL and SQLAlchemy](doc/database.md)
 * [Tracim](doc/setting.md)

# Support and Community #

Building the community is a work in progress.

Need help ? Do not hesitate to contact me : damien.accorsi@free.fr

<a href='https://www.browserstack.com' target="_blank">
    <img src="https://raw.githubusercontent.com/tracim/tracim/master/tracim/tracim/public/assets/img/logo_browserstack.png" width="150">
</a>

BrowserStack support open source project and graciously helps us testing Tracim on every devices.
