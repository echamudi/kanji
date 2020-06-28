/**
 * Copyright (c) 2020 Ezzat Chamudi
 * Copyright (c) 2020 Project Authors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 */

const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

(async () => {
    const targetDir = path.join('.', 'dist', 'kanjium');
    const csvtojsonConfig = {
        delimiter: '\t',
        noheader: 'true',
        headers: [
            "key",
            "val",
        ],
    };

    // Generate folder
    fs.mkdirSync(targetDir, { recursive: true });

    // Extractor from source txt to kanjium json
    async function extractKanjium(name) {
        const obj = {};


        const objRaw = await csvtojson(csvtojsonConfig)
            .fromFile(
                path.join(__dirname, '..', 'raw-data', 'kanjium-' + name + '.txt')
            );

        objRaw.forEach((el) => {
            obj[el.key] = el.val.split(',')
        });
    
        // Save
        fs.writeFileSync(path.join(targetDir, 'kanjium-' + name + '.json'), JSON.stringify(obj));
    }

    extractKanjium('antonyms');
    extractKanjium('lookalikes');
    extractKanjium('synonyms');
    extractKanjium('variants');

    const notice = `
This folder is generated by script. Please don't edit the content manually.
The pitch accent notation, verb particle data, phonetics, homonyms and other additions or modifications to EDICT, KANJIDIC or KRADFILE.
Data taken from kanjium https://github.com/mifunetoshiro/kanjium
`;
    
    // Add notice
    fs.writeFileSync(path.join(targetDir, '_notice.txt'), notice, function(err) {
        if (err) {
            console.log(err);
        }
    });
    
})();
