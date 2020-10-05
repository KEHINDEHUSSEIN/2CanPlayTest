var express = require('express');
var router = express.Router();
let crypto = require("crypto")
let Token;

router.get("/", (req, res) => {
    res.json({
        sucess: true,
        message: "APi is working "
    })
})

router.post('/api/test/login', (req, res) => {
    if (req.body.username === "test" && req.body.password === "1234567") {
        crypto.randomBytes(45, (err, buffer) => {
            Token = buffer.toString('hex')
            res.json({
                sucess: true,
                token: Token
            })
        })
    } else {
        res.json({
            sucess: false,
            message: "invalid login data"
        })
    }
});

router.get("/api/test/data", (req, res) => {
    if (req.headers.token === Token) {
        res.json(data)
    } else {
        res.json({
            sucess: false,
            message: "invalid token"
        })
    }
})

module.exports = router;


let data = {
    "test": {
        data: {
            "profile": [
                {
                    "id": 724,
                    "userName": "Kayode",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_533182.jpg",
                    "dob": "1985-10-30",
                    "aboutUser": "cool and easy going ",
                    "jobTitle": "accounting manager ",
                    "company": "oluwabusola poultry ",
                    "school": "lautech ",
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "1",
                    "isUserVerified": 0,
                    "age": 35,
                    "distance": 109.82909025297057,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 1199,
                            "userID": "724",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_533182.jpg",
                            "createdAt": "2020-07-12 21:56:09",
                            "updatedAt": "2020-07-12 21:56:09"
                        }
                    ],
                    "hobbies": [
                        {
                            "id": 5,
                            "hobbie_name": "Sports"
                        }
                    ],
                    "personality": [
                        {
                            "id": 16,
                            "personality_name": "Smart"
                        }
                    ]
                },
                {
                    "id": 1478,
                    "userName": "Femi",
                    "gender": "Male",
                    "displayPic": "https://graph.facebook.com/10221295103900211/picture?type=large",
                    "dob": "1987-01-18",
                    "aboutUser": "I'm an entrepreneur",
                    "jobTitle": "Creative Director",
                    "company": "sozo stitchez & styl",
                    "school": "Lagos state polytechnic ",
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 33,
                    "distance": 118.75083673183707,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2245,
                            "userID": "1478",
                            "imageURL": "https://graph.facebook.com/10221295103900211/picture?type=large",
                            "createdAt": "2020-08-19 03:26:20",
                            "updatedAt": "2020-08-19 03:26:20"
                        }
                    ],
                    "hobbies": [
                        {
                            "id": 1,
                            "hobbie_name": "Music"
                        },
                        {
                            "id": 9,
                            "hobbie_name": "Travelling"
                        },
                        {
                            "id": 6,
                            "hobbie_name": "Food"
                        },
                        {
                            "id": 4,
                            "hobbie_name": "Books"
                        }
                    ],
                    "personality": [
                        {
                            "id": 1,
                            "personality_name": "Good Looking"
                        },
                        {
                            "id": 3,
                            "personality_name": "Calm"
                        },
                        {
                            "id": 5,
                            "personality_name": "Innocent"
                        },
                        {
                            "id": 4,
                            "personality_name": "Charming"
                        },
                        {
                            "id": 14,
                            "personality_name": "Attractive"
                        },
                        {
                            "id": 18,
                            "personality_name": "Introvert"
                        }
                    ]
                },
                {
                    "id": 1479,
                    "userName": "JERRY",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_8731990.jpg",
                    "dob": "1989-10-20",
                    "aboutUser": " ",
                    "jobTitle": "",
                    "company": "",
                    "school": "University of Benin",
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "1",
                    "isUserVerified": 0,
                    "age": 31,
                    "distance": 107.7793851163581,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2246,
                            "userID": "1479",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_8731990.jpg",
                            "createdAt": "2020-08-19 03:44:45",
                            "updatedAt": "2020-08-19 03:44:45"
                        }
                    ],
                    "hobbies": [
                        {
                            "id": 1,
                            "hobbie_name": "Music"
                        },
                        {
                            "id": 7,
                            "hobbie_name": "Swimming"
                        },
                        {
                            "id": 5,
                            "hobbie_name": "Sports"
                        },
                        {
                            "id": 6,
                            "hobbie_name": "Food"
                        },
                        {
                            "id": 8,
                            "hobbie_name": "Dancing"
                        },
                        {
                            "id": 9,
                            "hobbie_name": "Travelling"
                        }
                    ],
                    "personality": [
                        {
                            "id": 1,
                            "personality_name": "Good Looking"
                        },
                        {
                            "id": 14,
                            "personality_name": "Attractive"
                        },
                        {
                            "id": 17,
                            "personality_name": "Outgoing"
                        },
                        {
                            "id": 16,
                            "personality_name": "Smart"
                        },
                        {
                            "id": 18,
                            "personality_name": "Introvert"
                        }
                    ]
                },
                {
                    "id": 1480,
                    "userName": "Adejuwon",
                    "gender": "male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_1186713.jpg",
                    "dob": "1986-06-08",
                    "aboutUser": null,
                    "jobTitle": null,
                    "company": null,
                    "school": null,
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 34,
                    "distance": 121.42116048145489,
                    "religion_name": "others",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2247,
                            "userID": "1480",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_1186713.jpg",
                            "createdAt": "2020-08-19 03:52:19",
                            "updatedAt": "2020-08-19 03:52:19"
                        }
                    ],
                    "hobbies": [],
                    "personality": []
                },
                {
                    "id": 1482,
                    "userName": "Sunny",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_6851098.jpg",
                    "dob": "1987-04-04",
                    "aboutUser": " ",
                    "jobTitle": "",
                    "company": "",
                    "school": " ",
                    "dontShowAge": "0",
                    "makeDistanceInvisible": "1",
                    "isUserVerified": 0,
                    "age": 33,
                    "distance": 72.70544607214572,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2248,
                            "userID": "1482",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_6851098.jpg",
                            "createdAt": "2020-08-19 03:57:07",
                            "updatedAt": "2020-08-19 03:57:07"
                        },
                        {
                            "id": 2249,
                            "userID": "1482",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_3489468.jpg",
                            "createdAt": "2020-08-19 04:04:27",
                            "updatedAt": "2020-08-19 04:04:27"
                        }
                    ],
                    "hobbies": [],
                    "personality": []
                },
                {
                    "id": 1483,
                    "userName": "ugo",
                    "gender": "male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_4651942.jpg",
                    "dob": "1987-10-06",
                    "aboutUser": null,
                    "jobTitle": null,
                    "company": null,
                    "school": null,
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 33,
                    "distance": 379.7853129839747,
                    "religion_name": "others",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2250,
                            "userID": "1483",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_4651942.jpg",
                            "createdAt": "2020-08-19 04:04:32",
                            "updatedAt": "2020-08-19 04:04:32"
                        }
                    ],
                    "hobbies": [],
                    "personality": []
                },
                {
                    "id": 1484,
                    "userName": "Thompson",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_8220208.jpg",
                    "dob": "1984-09-02",
                    "aboutUser": "I am loving and caring, and I am also outgoing",
                    "jobTitle": "Banker",
                    "company": "zenith",
                    "school": " ",
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 36,
                    "distance": 109.28330760372508,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2251,
                            "userID": "1484",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_8220208.jpg",
                            "createdAt": "2020-08-19 04:05:38",
                            "updatedAt": "2020-08-19 04:05:38"
                        }
                    ],
                    "hobbies": [
                        {
                            "id": 1,
                            "hobbie_name": "Music"
                        },
                        {
                            "id": 9,
                            "hobbie_name": "Travelling"
                        },
                        {
                            "id": 8,
                            "hobbie_name": "Dancing"
                        },
                        {
                            "id": 6,
                            "hobbie_name": "Food"
                        }
                    ],
                    "personality": [
                        {
                            "id": 1,
                            "personality_name": "Good Looking"
                        },
                        {
                            "id": 5,
                            "personality_name": "Innocent"
                        },
                        {
                            "id": 9,
                            "personality_name": "Agreeableness"
                        },
                        {
                            "id": 14,
                            "personality_name": "Attractive"
                        }
                    ]
                },
                {
                    "id": 1485,
                    "userName": "Kelvin",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_2277158.jpg",
                    "dob": "1985-03-15",
                    "aboutUser": "Gentle and easy going person",
                    "jobTitle": "Computer Engineer",
                    "company": "Mitshoba innovation",
                    "school": " ",
                    "dontShowAge": "0",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 35,
                    "distance": 141.24009794976038,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2252,
                            "userID": "1485",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_2277158.jpg",
                            "createdAt": "2020-08-19 04:13:31",
                            "updatedAt": "2020-08-19 04:13:31"
                        }
                    ],
                    "hobbies": [
                        {
                            "id": 3,
                            "hobbie_name": "Chess"
                        },
                        {
                            "id": 1,
                            "hobbie_name": "Music"
                        },
                        {
                            "id": 9,
                            "hobbie_name": "Travelling"
                        }
                    ],
                    "personality": [
                        {
                            "id": 1,
                            "personality_name": "Good Looking"
                        },
                        {
                            "id": 16,
                            "personality_name": "Smart"
                        },
                        {
                            "id": 3,
                            "personality_name": "Calm"
                        }
                    ]
                },
                {
                    "id": 1487,
                    "userName": "Sly",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_3131523.jpg",
                    "dob": "1984-04-26",
                    "aboutUser": " ",
                    "jobTitle": "",
                    "company": "",
                    "school": " ",
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 36,
                    "distance": 128.16155246911808,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2253,
                            "userID": "1487",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_3131523.jpg",
                            "createdAt": "2020-08-19 04:17:43",
                            "updatedAt": "2020-08-19 04:17:43"
                        }
                    ],
                    "hobbies": [
                        {
                            "id": 8,
                            "hobbie_name": "Dancing"
                        },
                        {
                            "id": 9,
                            "hobbie_name": "Travelling"
                        },
                        {
                            "id": 6,
                            "hobbie_name": "Food"
                        },
                        {
                            "id": 7,
                            "hobbie_name": "Swimming"
                        }
                    ],
                    "personality": [
                        {
                            "id": 1,
                            "personality_name": "Good Looking"
                        },
                        {
                            "id": 3,
                            "personality_name": "Calm"
                        },
                        {
                            "id": 9,
                            "personality_name": "Agreeableness"
                        },
                        {
                            "id": 17,
                            "personality_name": "Outgoing"
                        },
                        {
                            "id": 16,
                            "personality_name": "Smart"
                        }
                    ]
                },
                {
                    "id": 1488,
                    "userName": "Cally",
                    "gender": "Male",
                    "displayPic": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_1572069.jpg",
                    "dob": "1995-07-19",
                    "aboutUser": " ",
                    "jobTitle": "",
                    "company": "",
                    "school": " ",
                    "dontShowAge": "1",
                    "makeDistanceInvisible": "0",
                    "isUserVerified": 0,
                    "age": 25,
                    "distance": 122.94693246219924,
                    "religion_name": "Christian",
                    "swipeType": null,
                    "addStatus": "false",
                    "profile_images": [
                        {
                            "id": 2254,
                            "userID": "1488",
                            "imageURL": "https://2canplay.s3.us-east-2.amazonaws.com/Profile_Image_1572069.jpg",
                            "createdAt": "2020-08-19 04:19:10",
                            "updatedAt": "2020-08-19 04:19:10"
                        }
                    ],
                    "hobbies": [],
                    "personality": []
                }
            ]
        }
    }
}