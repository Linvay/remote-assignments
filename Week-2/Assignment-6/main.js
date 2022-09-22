function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${n1 + n2} (${n1}+${n2})`);
        }, delayTime);
    }) 
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

async function main() {
    console.log(await delayedResultPromise(1, 7, 2000));
}
main();
// result will be shown in the console after <delayTime> seconds