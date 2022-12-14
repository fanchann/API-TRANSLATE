# Tran{S}late?
this is an API for translate, perfect for practice
<p align="center">
  <img src="/bin/assets/Hitam Minimalis Gunung Logo.gif">
</p>

# HOW TO USE?

```bash
  /api/translate
```

| Parameter  | Description                    |             
| :-------- | :------------------------- |
| `/api/translate/to/CodeCuntry/InsertYourText`| to translate the language **auto-detect language active**  |
|`/api/translate/from/id/to/en/InsertYourText`|to translate specifically from your country's language to another country's language |


## API Reference

#### Requests Example

```bash
  /api/translate/to/en/selamat_pagi
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `en` | `Country Code` | translate into english |
|`selamat_pagi`|`Value`|translate your language|

#### To Spesific Translate

```bash
  /api/translate/from/id/to/en/selamat_pagi
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Country code from language` | translate from indonesia |
| `en` | `Country code to tranlate language` |  into english |
|`selamat_malam`|`Value`|translate your language|

### Country name and country code
| COUNTRY | CODE     |
| :-------- | :------- |
|`Amharic`|`am`|
|`Arabic`|`ar`|
|`Basque`|`eu`|
|`Bengali`|`bn`|
|`English (UK)`|`en-,GB`|
|`Portuguese (Brazil)`|`pt-,BR`|
|`Bulgarian`|`bg`|
|`Catalan`|`ca`|
|`Cherokee`|`ch`|
|`Croatian`|`hr`|
|`Welsh`|`cy`|
|`Czech`|`cs`|
|`Danish`|`da`|
|`Dutch`|`nl`|
|`Vietnamese`|`vi`|
|`Ukrainian`|`uk`|
|`English (US)`|`en`|
|`Estonian`|`et`|
|`Filipino`|`fi`|
|`French`|`fr`|
|`German`|`de`|
|`Greek`|`el`|
|`Gujarati`|`gu`|
|`Hebrew`|`iw`|
|`Hindi`|`hi`|
|`Hungarian`|`hu`|
|`Icelandic`|`is`|
|`Indonesian`|`id`|
|`Italian`|`it`|
|`Japanese`|`ja`|
|`Kannada`|`kn`|
|`Korean`|`ko`|
|`Latvian`|`lv`|
|`Lithuanian`|`lt`|
|`Malay`|`ms`|
|`Malayalam`|`ml`|
|`Marathi`|`mr`|
|`Norwegian`|`no`|
|`Polish`|`pl`|
|`Portuguese(Portugal)`|`pt-PT`|
|`Romanian`|`ro`|
|`Russian`|`ru`|
|`Serbian`|`sr`|
|`Chinese(PRC)`|`zh - CN`|
|`Slovak`|`sk`|
|`Slovenian`|`sl`|
|`Spanish`|`es`|
|`Swahili`|`sw`|
|`Swedish`|`sv`|
|`Tamil`|`ta`|
|`Telugu`|`te`|
|`Thai`|`th`|
|`Chinese,(Taiwan)`|`zh-TW`|
|`Turkish`|`tr`|
|`Urdu`|`ur`|

## [WANT TO TRY?](https://translated1.herokuapp.com/api/translate/to/id/hello_im_here)

