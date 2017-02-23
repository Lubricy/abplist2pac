abplist2pac
===========

abplist2pac : convert & bundle adblock plus compatible easylist to proxy auto config file.

usage:
------

just set this [proxy.pac](./dist/proxy.pac.js) in your favourite browser/ios device/etc.

build from source:
------------------

make sure node/npm installed in your box,
then just
```bash
git clone http://github.com/Lubricy/abplist2pac
cd abplist2pac
npm install
```
then find your desired pac file at `./dist`, which you can serve the file to your beloved other fellows later.

TODO:
-----

parse all files in ./fixt/
