set -ex

echo "Installing sonar-scanner version $SONAR_SCANNER_VERSION"
apk add --no-cache git wget nodejs nodejs-npm
npm install --silent
npm run coverage
wget http://dl.bintray.com/jeremy-long/owasp/dependency-check-3.1.1-release.zip && unzip dependency-check-3.1.1-release.zip -d / && rm -rf dependency-check-3.1.1-release.zip
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-$SONAR_SCANNER_VERSION.zip && unzip sonar-scanner-cli-${SONAR_SCANNER_VERSION} -d / && rm sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip
apk del wget
