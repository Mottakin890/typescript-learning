var _a;
function getInfo() {
    const name = document.getElementById('username');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    let info = `My name is ${name.value}.\nMy email is: ${email.value}.\nI am ${age.value} years old.`;
    console.log(info);
    setTimeout(() => {
        alert(info);
    }, 4);
}
// (window as any).getInfo = getInfo; ==> wee can do this where we have to make the getInfo() available through the window. so that it can be accessable globally.
///But there is more secure option for that Using by ID . It separates the .ts file from the html and make it more secure.
(_a = document.getElementById('getInfo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', getInfo);
export {};
