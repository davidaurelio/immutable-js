JSX="node_modules/.bin/jsx --harmony --no-cache-dir"

$JSX __tests__ spec
sed -i '' "s#require[(]'immutable#require('$PWD#" spec/*.js
for DIR in contrib/*/__tests__; do
  SPECDIR="$(dirname $DIR)/spec"
  $JSX "$DIR" "$SPECDIR"
  sed -i '' "s#require[(]'immutable#require('$PWD#" $SPECDIR/*.js
done
node_modules/.bin/jasmine-node --matchall spec contrib/*/spec
rm -rf spec contrib/*/spec
