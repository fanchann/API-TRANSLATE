const translate = require('@vitalets/google-translate-api');
const doc = require('./docs')

//index
const index = async (req, res) => {
    res.send({
        status: 500,
        data :{
                message: `Did you read the documentation on github?`,
        }
    })
}

// //autoDetect Translate
// const autoDetectTranslate = async (req, res) => {
//     let text = req.params.text;
//     let to = req.params.to;

//     const transator = translate(text, {
//         to: to
//     }).then(result => {
//         let date = new Date().toISOString();
//         res.send({
//             status: 200,
//             method: 'GET',
//             toLanguage: to,
//             result: result.text,
//             time: date
//         })
//     }).catch(err => {
//         res.send({
//             status: 400,
//             message: `what this ${to}? please read the docs`,
//             time: new Date().toISOString()
//         });
//     });
// }

//selectLanguageToTranslate
const selectLangTranslate = async (req, res) => {
    if(req.query != null){
        var from = req.query.from;
        var text = req.query.text;
        var to = req.params.to;        
    }else{
        res.send({
            status: 400,
            message: `nothing translated`,
            time: new Date().toISOString()
        });        
    }

    const transator = translate(text, {
        from: from,
        to: to
    }).then(result => {
        let date = new Date().toISOString();
        res.send({
            status: 200,
            method: 'GET',
            fromLanguage: from,
            toLanguage: to,
            result: result.text,
            time: date
        })
    }).catch(err => {
        res.send({
            status: 400,
            message: `nothing translated`,
            time: new Date().toISOString()
        });
    });
}


//documentation
const documentation = async (req, res) => {
    res.json({
        How_To_Use: "/api/v1/?from={country}&to={country}&text={insert_your_text}",
        Example: "/api/v1/?from=id&to=en&text=selamat_pagi",
        Example_2: "/api/v1/?to=en&text=selamat_pagi",
        // Spesific_Lang: "/api/translate/from/CodeFromLanguage/to/CodeToLanguage/InsertYourText",
        // Example__: "/api/translate/from/en/to/id/I am you",
        Language: doc
    })
}


//whereYouLookingFor
const nothing = async (req, res) => {
    res.send({
        status: 400,
        message: "where you looking for?"
    })
}

module.exports = {
    index,
    selectLangTranslate,
    nothing,
    documentation
}
