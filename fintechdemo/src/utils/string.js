import { AppConstant } from "../constant/AppConstant";

export const capitalize = (string = "") => { //jsUpperCasefirstCharacter
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeInWord = (string = "") => { //jsUpperCasefirstCharacterInWord
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
};

export function firstChar(string) {
    AppConstant.showConsoleLog('string:', string);
    if (string) {
        return string.charAt(0).toUpperCase();
    }
    return '';
}

export function usaFormatNumStr(num) {

    //console.log('num:', num);
    let value = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 12,345.67
    if (value == NaN) {
        value = '';
    }
    return value; // 12,345.67
}
export function replaceAll(str, find, replace) {
    var re = new RegExp(find, 'g');
    return str.replace(re, replace);
}

export function convertUrlToJson(str) {
    return JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

export function ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function myRandomUniqueInts(quantity, min = 0, max, withPadStr = false) {
    const set = new Set();
    //  Get the maximum value my getting the size of the
    //  array and subtracting by 1.
    let max1 = (max + 1);
    while (set.size < quantity) {
        if (withPadStr) {
            set.add(setLimitZero(`${Math.floor(Math.random() * (max1 - min)) + min}`))
        } else {
            set.add(Math.floor(Math.random() * (max1 - min)) + min)
        }

    }
    return Array.from(set);
}
export function myRandomNonUniqueInts(quantity, min = 0, max, withPadStr = false) {
    const set = [];

    let max1 = (max + 1);
    while (set.length < quantity) {
        if (withPadStr) {
            // set.push(setLimitZero(`${Math.floor(Math.random() * max) + 1}`));
            set.push(setLimitZero(`${Math.floor(Math.random() * (max1 - min)) + min}`));
        } else {
            // set.push(Math.floor(Math.random() * max) + 1);
            set.push(Math.floor(Math.random() * (max1 - min)) + min);
        }

    }
    return set;
}

export function setLimitZero(str, limit = 2) {

    return str.padStart(limit, '0');
}

/**
 * Convert an integer to its words representation
 * 
 * @author McShaman (http://stackoverflow.com/users/788657/mcshaman)
 * @source http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
 */
export function NumberToEnglish(n, custom_join_character = '') {

    var string = n.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    var and = custom_join_character || 'and';

    /* Is number zero? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                words.push(word);
            }

            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            // /* Add 'and' string after units or tens integer if: */
            // if (ints[0] || ints[1]) {

            //     /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
            //     if (ints[2] || !i && chunksLen) {
            //         words.push(and);
            //     }

            // }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }

        }

    }

    return capitalizeInWord(words.reverse().join(' '));

}
/*----------Example
// one hundred and twenty three million four hundred and fifty six thousand seven hundred and eighty nine
NumberToEnglish(123456789);

// Use a custom separator (like , instead of "and")
// one hundred , twenty three million four hundred , fifty six thousand seven hundred , eighty nine
NumberToEnglish(123456789, ",");
*/

export function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        totalMin = Math.floor(duration / 60000),
        totalSec = Math.floor(duration / 1000);;

    hours = (hours < 10) ? "0" + hours : `${hours}`;
    minutes = (minutes < 10) ? "0" + minutes : `${minutes}`;
    totalMin = (totalMin < 10) ? "0" + totalMin : `${totalMin}`;
    seconds = (seconds < 10) ? "0" + seconds : `${seconds}`;
    totalSec = (totalSec < 10) ? "0" + totalSec : `${totalSec}`;;

    return {
        hours,
        minutes,
        seconds,
        milliseconds,
        totalMin,
        totalSec
    }
}

export function secondToTime(duration) {

    var seconds = Math.floor(duration % 3600 % 60),
        minutes = Math.floor(duration % 3600 / 60),
        hours = Math.floor(duration / 3600);

    hours = (hours < 10) ? "0" + hours : `${hours}`;
    minutes = (minutes < 10) ? "0" + minutes : `${minutes}`;
    seconds = (seconds < 10) ? "0" + seconds : `${seconds}`;

    return {
        hours,
        minutes,
        seconds
    }
}

export function jsonCopy(data) {
    if (data == null) {
        return defaultValue;
    }
    return JSON.parse(JSON.stringify(data));
}

export function NumberToRoman(num) {
    if (typeof num !== 'number')
        return false;

    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return (Array(+digits.join("") + 1).join("M") + roman_num).toLowerCase();
}

export function convertThousandToK(value) {
    if (Number(value) != null && Number(value) >= 1000000) {
        return Number(value) != null && Number(value) >= 1000000 ? `${(value % 1000000) == 0 ? (value / 1000000) : (value / 1000000).toFixed(2)}` + "M" : (
            Number(value) != null ? `${value}` : '0'
        )
    } else if (Number(value) != null && Number(value) >= 1000) {
        return Number(value) != null && Number(value) >= 1000 ? `${(value % 1000) == 0 ? (value / 1000) : (value / 1000).toFixed(2)}` + "K" : (
            Number(value) != null ? `${value}` : '0'
        )
    }
    return (
        Number(value) != null ? `${value}` : '0'
    )
}

export function randomAlphaNumericString({ length, charsList = null }) {
    let chars = charsList || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export function randomNumber(min, max) {
    var min = min;
    //  Get the maximum value my getting the size of the
    //  array and subtracting by 1.
    var max = (max + 1);
    let random = Math.floor(Math.random() * (max - min)) + min;
    //Get a random integer between the min and max value.
    return random == max ? max - 1 : random;
}

export function getTimeValue(duration) {
    let durationText = '00:00';
    let h = Math.floor(Number(duration) / 3600).toString().padStart(2, '0')
    let m = Math.floor(Number(duration) % 3600 / 60).toString().padStart(2, '0')
    let s = Math.floor(Number(duration) % 3600 % 60).toString().padStart(2, '0')
    if (h != '00') {
        durationText = `${h}:${m}:${s}`;
    } else {
        durationText = `${m}:${s}`;
    }
    return durationText;
}

export function jsUcfirst(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return '';
}

export function jsUcfirstAfterSpace(string, splitText = ' ', jointText = ' ') {
    if (string) {
        return string
            .toLowerCase()
            .split(splitText)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(jointText);
    }
    return '';
}