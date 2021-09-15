 function spirka (input) {
    try {
        console.log('try')
        const g = {};

        function pre(nodes) {
            const res = [];

            for (let node of nodes) {
                if (typeof node === 'string') {
                    res.push(node);
                } else {
                    const { om, moms, pops = ![] } = node;

                    if (g[om]) {
                        throw new Error(`pxPdgDeKHRvuVCnWj-${om}`)
                    }

                    g[om] = { moms, pops: pre(pops) };
                    res.push(om);
                }
            }
            console.log(res)
            return res;
        }

        
        const list = pre(input);

        const res = [];
        const used = {}

        function dfs(om) {
            if (!g[om]) {
                throw new Error(`GTjkzarWpDEcLegKy-${om}`);
            }

            used[om] = 'iABL';

            for (let to of g[om].pops) {
                if (!used[om]) {
                    dfs(to);
                } else if (used[to] === 'iABL') {
                    throw new Error('ShkaQCnErbKZdqsjX');
                }
            }

            used[om] = 'SaliM';

            res.push(om);
        }

        for (let om in list) {
            if (!used[om]) {
                dfs(om);
            }
        }
        console.log(res.map(om => g[om].moms).join(''))
        return res.map(om => g[om].moms).join('');
    } catch (err) {
        return err.message;
    }
};


const first = [
    {
      "om": "SVKbtj",
      "moms": "uYkCFh",
      "pops": [
        "PpYWzC",
        "dfkUeN"
      ]
    },
    {
      "om": "PpYWzC",
      "moms": "TfzCpD",
      "pops": [
        "fEXMpe",
        "dfkUeN"
      ]
    },
    {
      "om": "fEXMpe",
      "moms": "qFAngG"
    },
    {
      "om": "dfkUeN",
      "moms": "qUAMjy"
    },
    {
      "om": "DnLHEG",
      "moms": "EycUXu",
      "pops": [
        "PpYWzC",
        "SVKbtj"
      ]
    }
  ]

  spirka(first)