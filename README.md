##A minimal [ESLint](http://eslint.org) custom formatter (reporter) that displays one summary line for all files processed.

<a href="http://semver.org" target="_blank" alt="Semantic Versioning"><img src="https://img.shields.io/badge/semver-1.0.0-lightgrey.svg"></a>
<a href="https://github.com/davidwaterston/eslint-summary/blob/master/LICENSE" target="_blank" alt="MIT License"><img src="http://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://david-dm.org/davidwaterston/eslint-summary" target="_blank" alt="Dependencies"><img src="https://david-dm.org/davidwaterston/eslint-summary.svg"></a>
<a href="#verifying-releases" alt="Releases signed with Gnu Privacy Guard"><img src="https://img.shields.io/badge/gpg-signed-green.svg"></a>
<a href="https://gitter.im/davidwaterston/eslint-summary" target="_blank" alt="Join the chat at https://gitter.im/davidwaterston/eslint-summary"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  
A minimal [ESLint](http://eslint.org) custom formatter (reporter) that displays one summary line for all files processed. The summary line shows the number of files processed, the number of files passed linting (no errors or warnings) and the number of warning and/or errors (if there were any). Use this formatter when you simply want to verify the overall lint status of your project on Git pre-push, etc.  
  
  
## Install

```sh
$ npm install --save-dev eslint-summary
```
  
  
## Getting started

Use it with:

#### [ESLint CLI](http://eslint.org/docs/user-guide/command-line-interface)

```sh
$ eslint --format node_modules/eslint-summary/summary.js *.js
```

#### [grunt-eslint](https://github.com/sindresorhus/grunt-eslint/)

```js
grunt.initConfig({
    eslint: {
        options: {
            format: require('eslint-summary')
        },
        target: ['*.js']
    }
});

grunt.loadNpmTasks('grunt-eslint');
grunt.registerTask('default', ['eslint']);
```
  
  
## Compatibility
This extension has been tested and confirmed to work with ESLint versions 0.18.0 and later. 
  
  
## Example output
<img src="https://dvolvr.files.wordpress.com/2015/04/eslint-summary.png" width="800" alt="ESLint-Summary in action" />

  
## Release History
See the [change log](https://github.com/davidwaterston/eslint-summary/blob/master/CHANGELOG.md) file for more details.
  
  
## Verifying Releases
I use <a href="http://semver.org" target="_blank" alt="Semantic Versioning">Semantic Versioning</a> to number releases. Each release is tagged with the appropriate version number and signed using <a href="https://www.gnupg.org" target="_blank" alt="Gnu Privacy Guard (GPG)">Gnu Privacy Guard (GPG)</a>. The public key used to sign releases is  
```
Name: David Waterston  
Email: david@davidwaterston.com  
Key ID: A7AD9C85  
Signature: 71A9 DC13 447A 1E4F C6EB  5D64 DE08 A991 A7AD 9C85  
```
This public key is included in the repository with a SHA1 of 16d013451476fa4a1a67d6ad4b90583e205b53b1.  
After cloning the repo, and assuming you have GPG installed correctly, you can import this key into your keychain
```
git cat-file blob pubkey | gpg --import
```
When this public key is successfully imported, you can use it to verify the integrity of any of the tagged releases of this repo
```
git tag -v v1.0.0
```
which should produce output similar to:
```
object 04f37a55784c1f3abc2cf927a935a488aa954035  
type commit  
tag v1.0.0  
tagger David Waterston <david@davidwaterston.com> 1427387056 +0000  
  
Initial commit  
  
This is just an example so don't get fixated on the details, what matters is the signature!
gpg: Signature made Thu 26 Mar 16:24:16 2015 GMT using RSA key ID A7AD9C85
gpg: Good signature from "David Waterston <david@davidwaterston.com>" [ultimate]
```
The important thing to notice here is that the RSA key ID matches mine (A7AD9C85) and the line that says that this is a good signature.  
  
The public key can further be verified by checking the details held on <a href="http://pgp.mit.edu/pks/lookup?search=david%40davidwaterston.com&op=index&fingerprint=on&exact=on" target="_blank" alt="pgp.mit.edu">pgp.mit.edu</a>.
  
  
## License
Copyright (c) 2015 David Waterston. All rights reserved.  
Distributed under an MIT license. See the [LICENSE](https://github.com/davidwaterston/eslint-summary/blob/master/LICENSE) file for more details.
