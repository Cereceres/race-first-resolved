const assert = require('assert');
const race = require('../index');


describe('test to promise all', () => {
    it('should resolve when the first promise is resolved', async() => {
        const player1 = new Promise((resolve) => setTimeout(resolve, 1000, 'first'));
        const player2 = new Promise((resolve) => setTimeout(resolve, 2000, 'second'));
        const player3 = new Promise((resolve) => setTimeout(resolve, 3000, 'third'));
        const res = await race([ player1, player2, player3 ]);
        assert(res === 'first');
    });

    it('should resolve when the first promise is resolved', async() => {
        const player1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'first'));
        const player2 = new Promise((resolve) => setTimeout(resolve, 2000, 'second'));
        const player3 = new Promise((resolve) => setTimeout(resolve, 3000, 'third'));
        const res = await race([ player1, player2, player3 ]);
        assert(res === 'second');
    });

    it('should resolve when the first promise is resolved', async() => {
        const player1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'first'));
        const player2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'second'));
        const player3 = new Promise((resolve) => setTimeout(resolve, 3000, 'third'));
        const res = await race([ player1, player2, player3 ]);
        assert(res === 'third');
    });
});
