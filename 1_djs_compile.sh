tsc

FROM_NAME="./build/dolmenjs.js"
DEST_NAME="./test/vendors/dolmenjs/dolmenjs_$(date +%Y%m).js"
UGLY_NAME="./test/vendors/dolmenjs/dolmenjs_$(date +%Y%m).min.js"

cp $FROM_NAME $DEST_NAME

uglifyjs $DEST_NAME -o $UGLY_NAME -c -m
