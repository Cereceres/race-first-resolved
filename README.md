# race-first-resolved
resolve when any promise is resolved in a array of promises.

# Usage

```js

async() => {
    const player1 = new Promise((resolve) => setTimeout(resolve, 1000, 'first'));
    const player2 = new Promise((resolve) => setTimeout(resolve, 2000, 'second'));
    const player3 = new Promise((resolve) => setTimeout(resolve, 3000, 'third'));
    const res = await race([ player1, player2, player3 ]);
    assert(res === 'first');
    const player1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'first'));
    const player2 = new Promise((resolve) => setTimeout(resolve, 2000, 'second'));
    const player3 = new Promise((resolve) => setTimeout(resolve, 3000, 'third'));
    const res = await race([ player1, player2, player3 ]);
    assert(res === 'second');
    const player1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'first'));
    const player2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'second'));
    const player3 = new Promise((resolve) => setTimeout(resolve, 3000, 'third'));
    const res = await race([ player1, player2, player3 ]);
    assert(res === 'third');
}
```

# API

## race(arrayOfPromises) -> promise

Resolve the promise when some promise in array is resolve, any promise rejected is ignored.
