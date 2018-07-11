var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(
        [{
            "companyID": 16400573,
            "companyName": "Google Inc.",
            "isDefunct": false,
            "companyPhone": "(650) 253-0000",
            "companyFax": "(650) 253-0001",
            "companyDomain": "www.google.com",
            "location": {
                "Street": "1600 Amphitheatre Pkwy",
                "City": "Mountain View",
                "State": "California",
                "Zip": 94043,
                "CountryCode": "United States"
            },
            "companyDescription": "Google's innovative search technologies connect millions of people around the world with information every day. Founded in 1998 by Stanford Ph.D. students Larry Page and Sergey Brin, Google today is a top web property in all major global markets. Google's targeted advertising program provides businesses of all sizes with measurable results, while enhancing the overall web experience for users. Google is headquartered in Silicon Valley with offices throughout the Americas, Europe and Asia.\n",
            "topLevelIndustry": ["Software "],
            "revenue": "$110.9 Billion",
            "revenueRange": "Over $5 bil.",
            "employees": 80110,
            "employeesRange": "Over 10,000",
            "companyLogo": "https://res.cloudinary.com/zoominfo-com/image/upload/w_70,h_70,c_fit/v1497349368/google.com",
            "companySIC": [6719, 671],
            "companyNAICS": [551112, 55111],
            "companyRevenueIn000s": 110855000,
            "companyTicker": "NASDAQ: GOOGL",
            "isTagged": false
        },

            {
                "companyID": 2441797,
                "companyName": "Apple Inc.",
                "isDefunct": false,
                "companyPhone": "(408) 996-1010",
                "companyFax": "(408) 974-2113",
                "companyDomain": "www.apple.com",
                "location": {
                    "Street": "One Apple Park Way",
                    "City": "Cupertino",
                    "State": "California",
                    "Zip": 95014,
                    "CountryCode": "United States"
                },
                "companyDescription": "Apple Inc (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications. The Company's products and services include iPhone, iPad, Mac, iPod, Apple TV, a portfolio of consumer and professional software applications, the iOS and OS X operating systems, iCloud, and a variety of accessory, service and support offerings.\n",
                "topLevelIndustry": ["Software Development","Design", "Software", "Personal Computers & Peripherals", "Computer Equipment & Peripherals", "Manufacturing", "Consumer Electronics", "Consumer Goods", "Consumer Electronics & Computers", "Retail", "Electronic Components", "Electronics", "Telecommunication Equipment"],
                "revenue": "$229.2 Billion",
                "revenueRange": "Over $5 bil.",
                "employees": 123000,
                "employeesRange": "Over 10,000",
                "companyLogo": "https://res.cloudinary.com/zoominfo-com/image/upload/w_70,h_70,c_fit/v1497349368/apple.com",
                "companySIC": [3575, 3577],
                "companyNAICS": [334220, 334111],
                "companyRevenueIn000s": 229234000,
                "companyTicker": "NASDAQ: AAPL",
                "isTagged": false
            }]
    );
});

module.exports = router;
