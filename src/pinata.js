const fs = require("fs");
const FormData = require("form-data");
const rfs = require("recursive-fs");
const basePathConverter = require("base-path-converter");
// const got = require('got');
const axios = require('axios');


const pinDirectoryToPinata = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const src = "/Users/ranhong/workspace/blockchain/hashlips_art_engine/build/images";
    var status = 0;
    try {
        const {dirs, files} = await rfs.read(src);
        let data = new FormData();
        for (const file of files) {
            data.append(`file`, fs.createReadStream(file), {
                filepath: basePathConverter(src, file),
            });
        }
        const config = {
            onUploadProgress: (progress) => {
                console.log(progress);
            }
        }
        axios.post(url, data, {
            maxBodyLength: 'Infinity',
            headers: {
                "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                "Authorization": "eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2YjUwOWEwMS1mMjc3LTQ1MTEtYWI1Zi03NTgwMzU5YWMwMTciLCJlbWFpbCI6ImdvYmxpbmRpY2t3dGZAb3V0bG9vay5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzBlN2QyZTZmN2FiMWIzZmIxYmQiLCJzY29wZWRLZXlTZWNyZXQiOiJjOGExNDE1YWVhNTA5OGQ1MzE1ZGE2NmViZTE2ZTZhMDhkNjFiN2QwMTZjMDU1MGE5MzY0NzZhNWM5OTMxYThhIiwiaWF0IjoxNjU3NzczODk5fQ"
            },
        }, config).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error)
        });
        // const response = await got(url, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        //         "Authorization": "eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2YjUwOWEwMS1mMjc3LTQ1MTEtYWI1Zi03NTgwMzU5YWMwMTciLCJlbWFpbCI6ImdvYmxpbmRpY2t3dGZAb3V0bG9vay5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzBlN2QyZTZmN2FiMWIzZmIxYmQiLCJzY29wZWRLZXlTZWNyZXQiOiJjOGExNDE1YWVhNTA5OGQ1MzE1ZGE2NmViZTE2ZTZhMDhkNjFiN2QwMTZjMDU1MGE5MzY0NzZhNWM5OTMxYThhIiwiaWF0IjoxNjU3NzczODk5fQ"
        //     },
        //     body: data
        // }).on('uploadProgress', progress => {
        //     console.log(progress);
        // });

        // console.log(JSON.parse(response.body));
    } catch (error) {
        console.log(error);
    }
};

pinDirectoryToPinata().then(r => {})


// API
// Key: c0e7d2e6f7ab1b3fb1bd
// API
// Secret: c8a1415aea5098d5315da66ebe16e6a08d61b7d016c0550a936476a5c9931a8a
// JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2YjUwOWEwMS1mMjc3LTQ1MTEtYWI1Zi03NTgwMzU5YWMwMTciLCJlbWFpbCI6ImdvYmxpbmRpY2t3dGZAb3V0bG9vay5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzBlN2QyZTZmN2FiMWIzZmIxYmQiLCJzY29wZWRLZXlTZWNyZXQiOiJjOGExNDE1YWVhNTA5OGQ1MzE1ZGE2NmViZTE2ZTZhMDhkNjFiN2QwMTZjMDU1MGE5MzY0NzZhNWM5OTMxYThhIiwiaWF0IjoxNjU3NzczODk5fQ.KLBm4 - UQAOARNCemZ61MjBHcudjY4lr5orZ6XyQq2io