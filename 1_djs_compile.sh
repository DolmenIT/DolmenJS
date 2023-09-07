
BUILD_NAME="./build/dolmenjs/" 
DIST_NAME="./dist/dolmenjs.js"
TEST_NAME="./test/vendors/dolmenjs/dolmenjs_$(date +%Y%m).js"

rm -r $BUILD_NAME
rm $DIST_NAME
rm $TEST_NAME

tsc
npx webpack --config webpack.config.js

cp -r $DIST_NAME $TEST_NAME

# uglifyjs $DEST_NAME -o $UGLY_NAME -c -m
