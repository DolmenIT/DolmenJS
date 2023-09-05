

FROM_NAME="./build/dolmenjs/"
DEST_NAME="./test/vendors/dolmenjs/$(date +%Y%m)/"

rm -r $FROM_NAME
rm -r $DEST_NAME

tsc

cp -r $FROM_NAME $DEST_NAME

# uglifyjs $DEST_NAME -o $UGLY_NAME -c -m
