/**
 * Copyright (c) 2020 Ezzat Chamudi
 * Copyright (c) 2020 Project Authors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 */

const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

fs.mkdirSync('./raw-data/', { recursive: true });

// Add notice
const notice = `This folder is generated by script. Please don't edit the content manually.`;
fs.writeFileSync('./raw-data/_notice.txt', notice, function(err) {
    if (err) {
        console.log(err);
    }
});

// Download files
(async () => {
    console.log('Downloading required files');

    await Promise.all([
        (() => new Promise((resolve, reject) => {
            // Download Kanjium Antonyms
            https.get('https://raw.githubusercontent.com/echamudi/kanjium/master/data/source_files/antonyms.txt', (response) => {
                response.pipe(fs.createWriteStream('./raw-data/kanjium-antonyms.txt'));
                resolve();
            });
        }))(),
        (() => new Promise((resolve, reject) => {
            // Download Kanjium Synonyms
            https.get('https://raw.githubusercontent.com/echamudi/kanjium/master/data/source_files/synonyms.txt', (response) => {
                response.pipe(fs.createWriteStream('./raw-data/kanjium-synonyms.txt'));
                resolve();
            });
        }))(),
        (() => new Promise((resolve, reject) => {
            // Download Kanjium Lookalikes
            https.get('https://raw.githubusercontent.com/echamudi/kanjium/master/data/source_files/lookalikes.txt', (response) => {
                response.pipe(fs.createWriteStream('./raw-data/kanjium-lookalikes.txt'));
                resolve();
            });
        }))(),
        (() => new Promise((resolve, reject) => {
            // Download Kanjium Variants
            https.get('https://raw.githubusercontent.com/echamudi/kanjium/master/data/source_files/variants.txt', (response) => {
                response.pipe(fs.createWriteStream('./raw-data/kanjium-variants.txt'));
                resolve();
            });
        }))()
    ]);

    console.log('Downloading git files');

    // Download Kanji VG
    execSync('cd ./raw-data && git clone --depth 1 -b master https://github.com/echamudi/kanjivg.git && cd ..',
        {
            stdio: 'inherit'
        }
    );

    console.log('Completed');
})();
