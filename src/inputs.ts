function getInfo() {
    const name: HTMLInputElement = document.getElementById('username') as HTMLInputElement
    const email: HTMLInputElement = document.getElementById('email') as HTMLInputElement
    const age: HTMLInputElement = document.getElementById('age') as HTMLInputElement

    let info: string = `My name is ${name.value}.\nMy email is: ${email.value}.\nI am ${age.value} years old.`;
    console.log(info);
    setTimeout(() => {
        alert(info)
    }, 4)
}

// (window as any).getInfo = getInfo; ==> wee can do this where we have to make the getInfo() available through the window. so that it can be accessable globally.

///But there is more secure option for that Using by ID . It separates the .ts file from the html and make it more secure.
document.getElementById('getInfo')?.addEventListener('click', getInfo);