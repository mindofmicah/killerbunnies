mkdir target/public -p 2>/dev/null
grunt requirejs

cd target/public

rm -rf build build.txt GruntFile.js

echo "Removing unneeded files"
find js/ -type f | egrep -v "(js/vendor/requirejs/require.js|js/main)" | xargs rm -rf
find js/ -type d | xargs rmdir -p 2>/dev/null

echo "Copy over the app directory"
cp -av ../../app ../


echo "Uploading files to server"
rsync -rlpgoDv --size-only . ninemilefilms@ninemilefilms.com:~/html/killerbunnies/
