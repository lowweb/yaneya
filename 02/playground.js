'use strict';

var sam = [];

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
    console.log (result)
    console.log(sam)
    const answer = ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle'];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});



async function solution(input) {
    
    // ... решение задачи
    
    // for (let sub of Object.values(input)) {
    //     console.log(typeof sub)
    //   }
    // for (let item in input) {
    //     // console.log(typeof item)
    //     item.read(2, (file) => console.log(typeof file));
    // }

    // console.log(input['file'])
    // пример вызова read
    // input.read(2, (folder) => console.log(folder.read(0, (folder)=> console.log(folder))));
    // let i=0;
    // for (let i =0; i<=5; i++) {
    //    return  i += input.read(1, (file) => file);
    // }
    // console.log(i)
    // return countElement
    // input.read(2, (file) => console.log(file));
    // пример вызова size
    // input.size((size) => console.log(size));

    // input.read(0, (file) => {
    //     for (let subdep in Object.values(file)) {
    //         console.log(subdep)
    //     }
    // });
    input.size((size) => {
            for (let index = 0; index < size; index++)
            {
                input.read(index,(file) => {
                    if (typeof file === 'string') {
                        // console.log(file);
                        sam.push(file);
                    }
    
                    if (typeof file === 'object' && file != null && Object.keys(file).length != 0) {
                        solution(file);       
                    }
    
                });
       
            }
        });
    
    
    // return 'dsadas'
    // console.log(sam)
    // return ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle']

}
