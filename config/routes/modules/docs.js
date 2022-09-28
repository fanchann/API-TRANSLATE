//this documentation of language
const data = [
    ["Amharic", "am"],
    ["Arabic", "ar"],
    ["Basque", "eu"],
    ["Bengali", "bn"],
    ["English (UK)", "en-,GB"],
    ["Portuguese (Brazil)", "pt-,BR"],
    ["Bulgarian", "bg"],
    ["Catalan", "ca"],
    ["Cherokee", "ch"],
    ["Croatian", "hr"],
    ["Welsh", "cy"],
    ["Czech", "cs"],
    ["Danish", "da"],
    ["Dutch", "nl"],
    ["Vietnamese", "vi"],
    ["Ukrainian", "uk"],
    ["English (US)", "en"],
    ["Estonian", "et"],
    ["Filipino", "fi"],
    ["French", "fr"],
    ["German", "de"],
    ["Greek", "el"],
    ["Gujarati", "gu"]
    ["Hebrew", "iw"],
    ["Hindi", "hi"],
    ["Hungarian", "hu"],
    ["Icelandic", "is"],
    ["Indonesian", "id"],
    ["Italian", "it"],
    ["Japanese", "ja"],
    ["Kannada", "kn"],
    ["Korean", "ko"],
    ["Latvian", "lv"]
    ["Lithuanian", "lt"],
    ["Malay", "ms"],
    ["Malayalam", "ml"],
    ["Marathi", "mr"],
    ["Norwegian", "no"]
    ["Polish", "pl"],
    ["Portuguese(Portugal)", "pt-PT"],
    ["Romanian", "ro"],
    ["Russian", "ru"],
    ["Serbian", "sr"],
    ["Chinese(PRC)", "zh - CN"],
    ["Slovak", "sk"],
    ["Slovenian", "sl"]
    ["Spanish", "es"],
    ["Swahili", "sw"],
    ["Swedish", "sv"],
    ["Tamil", "ta"],
    ["Telugu", "te"],
    ["Thai", "th"],
    ["Chinese,(Taiwan)", "zh-TW"]
    ["Turkish", "tr"],
    ["Urdu", "ur"]

];


const docs = data.map((item) => {

    if (item) {
        return ({
            country: item[0],
            code: item[1]
        });
    }
});


module.exports = docs
