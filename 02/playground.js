'use strict';


((global) => {
    const timeout = 20;
    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeout);
    };

    const Folder = function (a = []) {
        if (!new.target) {
            return new Folder(a);
        }

        this.read = (index, cb) => _async(() => a[index], cb);
        this.size = (cb) => _async(() => a.length, cb);
    };

    Object.freeze(Folder);
    global.Folder = Folder;
})(typeof window === 'undefined' ? global : window);

const input = Folder([
    'file',
    'ffffile',
    Folder([
        'file',
    ]),
    Folder([
        'fiiile',
    ]),
    Folder([
        {},
        null,
        'file',
        'ffiillee',
        'ffiillee',
    ]),
    Folder([
        Folder([
            'filllle',
            'file',
            null,
        ]),
        {},
        Folder([])
    ]),
]);



// проверка решения
solution(input).then(result => {
    const answer = ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle'];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});



async function solution(input) {

async function checkItem(input,resultArr) {
    let size = await new Promise(resolve=> input.size(x => resolve(x)))
    for (let index = 0; index < size; index++)
    {
        let item = await new Promise(resolve=> input.read(index,(file) => {resolve(file)}))

        if (typeof item === 'string' && item != 'file') {
            resultArr.push(item)
        }
        if (typeof item === 'object' && item != null && Object.keys(item).length != 0) {
            await checkItem(item,resultArr)      
        }
    }
    return resultArr
}

let result = await checkItem(input,[])
result.sort();

return result;
}


module.exports = async function(input) {
    async function checkItem(input,resultArr) {
        let size = await new Promise(resolve=> input.size(x => resolve(x)))
        for (let index = 0; index < size; index++)
        {
            let item = await new Promise(resolve=> input.read(index,(file) => {resolve(file)}))
    
            if (typeof item === 'string' && item != 'file') {
                resultArr.push(item)
            }
            if (typeof item === 'object' && item != null && Object.keys(item).length != 0) {
                await checkItem(item,resultArr)      
            }
        }
        return resultArr
    }
    
    let result = await checkItem(input,[])
    result.sort();
    
    return result;
}