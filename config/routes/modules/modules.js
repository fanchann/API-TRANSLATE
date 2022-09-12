const translate = require('@vitalets/google-translate-api');
const doc = require('./docs')

const index = async (req, res) => {
    res.send({
        status: 500,
        message: `Did you read the documentation on github?`
    })
}

const autoDetectTranslate = async (req, res) => {
    let text = req.params.text;
    let to = req.params.to;

    const transator = translate(text, {
        to: to
    }).then(result => {
        let date = new Date().toISOString();
        res.send({
            status: 200,
            method: 'GET',
            toLanguage: to,
            result: result.text,
            time: date
        })
    }).catch(err => {
        res.send({
            status: 400,
            message: `what this ${to}? please read the docs`,
            time: new Date().toISOString()
        });
    });
}

const selectLangTranslate = async (req, res) => {
    let from = req.params.from;
    let text = req.params.text;
    let to = req.params.to;

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

const documentation = async (req, res) => {
    res.json({
        How_To_Use: "/api/translate/to/CodeCountry/InsertYourText",
        Example_: "/api/translate/to/en/Aku adalah Kamu",
        Spesific_Lang: "/api/translate/from/CodeFromLanguage/to/CodeToLanguage/InsertYourText",
        Example__: "/api/translate/from/en/to/id/I am you",
        Language: doc
    })
}

const nothing = async (req, res) => {
    res.send({
        status: 400,
        message: "where you looking for?"
    })
}

module.exports = {
    index,
    autoDetectTranslate,
    selectLangTranslate,
    nothing,
    documentation
}